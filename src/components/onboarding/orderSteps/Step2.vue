<template>
    <form @submit.prevent="submitHandler">
        <div class="form-section">

            <div :class="{ 'field--error wobble-error': $v.pet_name.$error }" class="form-group">
                <label class="form-group__label">Твое имя</label>
                <div class="form-group__content">
                    <div class="input">
                        <input type="text" class="input__control" v-model="pet_name"/>
                        <div class="input__dropdown" v-if="pets.length">
                            <div v-for="(el, idx) in pets" class="input__dropdown-option"
                                 :key="idx"
                                 @click="()=>{updatePet(el.id)}"
                            >
                                {{el.name}}
                            </div>
                        </div>

                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors">
                        <div class="error" v-if="$v.pet_name.$dirty && !$v.pet_name.required">обязательное поле</div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="form-group__label">Порода</label>
                <div class="form-group__content">
                    <div class="input">
                        <input type="text" class="input__control" v-model="breed"/>
                        <div class="input__dropdown" v-if="brandsDog.length">
                            <div v-for="(el, idx) in brandsDog" class="input__dropdown-option"
                                 :key="idx"
                                 @click="()=>{breed = el}"
                            >
                                {{el}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors"></div>
                </div>
            </div>

            <div class="form-group">
                <label class="form-group__label">Дата рождения</label>
                <div class="form-group__content">
                    <div class="input input_type_date">
                        <!-- <input type="date" class="input__control input__control_type_datetime" v-model="birthday_date"> -->
                        <date-picker v-model="birthday_date" valueType="format" format="DD.MM.YYYY" class="date-picker" placeholder="ДД.ММ.ГГГГ" :disabled-date="notAfterToday"></date-picker>
                        <!-- <date-picker v-model="time2" type="datetime"></date-picker>
                        <date-picker v-model="time3" range></date-picker> -->
                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors"></div>
                </div>
            </div>
            <div class="form-group">
                <label class="form-group__label">Если ты не помнишь дату своего рождения, выбери примерный возраст</label>
                <div class="form-group__content">
                    <div class="radio-group radio-group_dog-years">
                        <div class="radio-group__list">
                            <label class="radio radio_big">
                                <input type="radio" class="radio__control" value="0-1" v-model="birthday_years"/>
                                <div class="radio__button">
                                  <span class="radio__button-label radio__button-label_sub">до 1 года</span>
                                </div>
                            </label>
                            <label class="radio radio_big">
                                <input type="radio" class="radio__control" value="1-5" v-model="birthday_years"/>
                                <div class="radio__button">
                                  <span class="radio__button-label radio__button-label_sub">1-5 лет</span>
                                </div>
                            </label>
                            <label class="radio radio_big">
                                <input type="radio" class="radio__control" value="5+" v-model="birthday_years"/>
                                <div class="radio__button">
                                  <span class="radio__button-label radio__button-label_sub">старше 5 лет</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors">
                        <div class="error" v-if="$v.birthday_years.$dirty && !$v.birthday_years.required">Укажи дату рождения или примерный возраст</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-section">

            <div :class="{ 'field--error wobble-error': $v.gender.$error }" class="form-group">
                <label class="form-group__label">Твой пол</label>
                <div class="form-group__content">
                    <div class="radio-group">
                        <div class="radio-group__list">
                            <label class="radio">
                                <input type="radio" class="radio__control" value="m" v-model="gender"/>
                                <div class="radio__button">
                                    <span class="radio__button-label">М</span>
                                </div>
                            </label>
                            <label class="radio">
                                <input type="radio" class="radio__control" value="w" v-model="gender"/>
                                <div class="radio__button">
                                    <span class="radio__button-label">Ж</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group__helper form-group__helper_small">
                    <div class="form-group__errors">
                        <div class="form-group__errors">
                            <div class="error" v-if="$v.gender.$dirty && !$v.gender.required">Выберите пол питомца</div>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="{ 'field--error wobble-error': $v.size.$error }" class="form-group">
                <label class="form-group__label">Твой размер</label>
                <div class="form-group__content">
                    <div class="radio-group radio-group_dog-size">
                        <div class="radio-group__list">
                            <label class="radio radio_big">
                                <input type="radio" class="radio__control" value="1" v-model="size"/>
                                <div class="radio__image">
                                	<img src="@/assets/small-dog.png" alt="">
                                </div>
                                <div class="radio__button">
                                  <span class="radio__button-label">маленький</span>
                                  <span class="radio__button-label radio__button-label_sub">до 10 кг</span>
                                </div>
                            </label>
                            <label class="radio radio_big">
                                <input type="radio" class="radio__control" value="2" v-model="size"/>
                                <div class="radio__image">
                                	<img src="@/assets/medium-dog.png" alt="">
                                </div>
                                <div class="radio__button">
                                  <span class="radio__button-label">средний</span>
                                  <span class="radio__button-label radio__button-label_sub">от 10 до 25 кг</span>
                                </div>
                            </label>
                            <label class="radio radio_big">
                                <input type="radio" class="radio__control" value="3" v-model="size"/>
                                <div class="radio__image">
                                	<img src="@/assets/large-dog.png" alt="">
                                </div>
                                <div class="radio__button">
                                  <span class="radio__button-label">большой</span>
                                  <span class="radio__button-label radio__button-label_sub">свыше 25 кг</span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group__helper form-group__helper_small">
                    <div class="form-group__errors">
                        <div class="error" v-if="$v.size.$dirty && !$v.size.required">Выберите размер питомца</div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="form-group__label">Аллергия</label>
                <div class="form-group__content">
                    <div class="radio-group">
                        <div class="radio-group__list">
                            <label class="radio">
                                <input type="radio" class="radio__control" :value="true" v-model="hasAllergy"/>
                                <div class="radio__button">
                                    <span class="radio__button-label">Да</span>
                                </div>
                            </label>
                            <label class="radio">
                                <input type="radio" class="radio__control" :value="false" v-model="hasAllergy"/>
                                <div class="radio__button">
                                    <span class="radio__button-label">Нет</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <textarea
                            v-if="hasAllergy"
                            rows="2"
                            class="textarea"
                            v-model="food_exceptions"
                            placeholder="Укажи, на что у тебя аллергия"
                    >
                          </textarea>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors"></div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
  import { email, required, requiredIf, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  const today = new Date();
today.setHours(0, 0, 0, 0);

  export default {
    name: 'Step2',
    props: ['order'],
    validations () {
      return {
        pet_name: {
          required,
          minLength: minLength(3),
        },
        gender: {
          required,
        },
        size: {
          required,
        },
        birthday_years:{
            required: requiredIf(function() {
                return !this.birthday_date;
            })
           
        }
      }
    },
    data: () => ({
      hasAllergy: false,
    }),
    computed: {
      ...(() => {
        let o = {}
        let f = ['pet_name', 'gender', 'size', 'breed', 'birthday_date', 'birthday_years', 'food_exceptions', 'pet_id']
        f.forEach(n => o[[n]] = {
          get () {
            return this.order[n]
          },
          set (val) {
            this.$emit('update:order', {
              ...this.order,
              [n]: val
            })
          }
        })
        return o
      })(),
      brandsDog () {
        const dogs = [
          'Метис', 'Двортерьер', 'Австралийская овчарка (Аусси)', 'Акита-ину', 'Алабай (Среднеазиатская овчарка)', 'Аляскинский кли-кай', 'Аляскинский маламут', 'Американская акита', 'Американский булли', 'Американский бульдог', 'Американский кокер-спаниель', 'Американский стаффордширский терьер', 'Английский бульдог', 'Английский кокер-спаниель', 'Английский мастиф', 'Английский сеттер', 'Аргентинский дог', 'Афганская борзая', 'Аффенпинчер', 'Басенджи', 'Бассет-хаунд', 'Бедлингтон-терьер', 'Белая швейцарская овчарка', 'Бельгийская овчарка', 'Бельгийский гриффон', 'Бернский зенненхунд', 'Бигль', 'Бишон фризе', 'Бладхаунд', 'Бобтейл', 'Боксер', 'Бордер-колли', 'Бордер-терьер', 'Бордоский дог', 'Босерон', 'Бостон-терьер', 'Бриар', 'Брюссельский гриффон', 'Бульмастиф', 'Бультерьер', 'Бурбуль', 'Веймаранер', 'Вельш-корги кардиган', 'Вельш-корги пемброк', 'Вельштерьер', 'Венгерская выжла', 'Вест-хайленд-уайт-терьер', 'Восточноевропейская овчарка', 'Грейхаунд', 'Далматин', 'Джек-рассел-терьер', 'Доберман', 'Дратхаар', 'Западно-сибирская лайка', 'Золотистый ретривер', 'Ирландский волкодав', 'Ирландский сеттер', 'Ирландский терьер', 'Испанский мастиф', 'Йоркширский терьер', 'Ка-де-бо', 'Кавалер-кинг-чарльз-спаниель', 'Кавказская овчарка', 'Канарский дог', 'Кане-корсо', 'Карело-финская лайка', 'Кеесхонд', 'Керн-терьер', 'Китайская хохлатая собака', 'Ксолоитцкуинтли', 'Курцхаар', 'Лабрадор-ретривер', 'Левретка', 'Леонбергер', 'Лхаса апсо', 'Мальтийская болонка', 'Мальтипу', 'Маремма-абруццкая овчарка', 'Миттельшнауцер', 'Мопс', 'Московская сторожевая собака', 'Неаполитанский мастиф', 'Немецкая овчарка', 'Немецкий дог', 'Немецкий ягдтерьер', 'Норвич-терьер', 'Ньюфаундленд', 'Папильон', 'Парсон-рассел-терьер', 'Пекинес', 'Пиренейская горная собака', 'Питбуль', 'Померанский шпиц', 'Помски', 'Пражский крысарик', 'Пти-брабансон', 'Пудель', 'Ризеншнауцер', 'Родезийский риджбек', 'Ротвейлер', 'Русская гончая', 'Русская пегая гончая', 'Русская псовая борзая', 'Русский охотничий спаниель', 'Русский той-терьер', 'Русский черный терьер', 'Салюки', 'Самоедская собака', 'Сенбернар', 'Сиба-ину', 'Сибирский хаски', 'Скотч-терьер', 'Стаффордширский бультерьер', 'Тайский риджбек', 'Такса', 'Тибетский мастиф', 'Тоса-ину', 'Уиппет', 'Фараонова собака', 'Фокстерьер', 'Французский бульдог', 'Цвергпинчер', 'Цвергшнауцер', 'Чау-чау', 'Чихуахуа', 'Шарпей', 'Шелти', 'Ши-тцу', 'Шипперке', 'Шотландская овчарка (колли)', 'Энтлебухер зенненхунд', 'Эрдельтерьер', 'Эстонская гончая', 'Японский хин', 'Японский шпиц',
        ]

        if (this.breed && this.breed.trim().length > 2) {
          const condidate = dogs.filter(el => el.toLowerCase().indexOf(this.breed.toLowerCase()) !== -1)
          if (condidate.length === 1 && condidate[0] === this.breed.trim()) {
            return []
          } else {
            return condidate
          }
        } else {
          return []
        }
      },
      pets () {
        const pets = this.$store.getters['pet/petList']

        if (this.pet_name && this.pet_name.trim().length > 0 && !this.pet_id) {
          const condidate = pets.filter(el => el.name.toLowerCase().indexOf(this.pet_name.toLowerCase()) !== -1)
          if (condidate.length === 1 && condidate[0] === this.pet_name.trim()) {
            return []
          } else {
            return condidate
          }
        } else {
          return []
        }
      },
    },
    methods: {
      updatePet (pet_id) {

        const pet = this.pets.filter(el => el.id === pet_id)[0]
        const { birthday_date, birthday_years, breed, food_exceptions, gender, id, name, size } = pet
        this.pet_name = name

        this.$emit('update:order', {
          ...this.order,
          pet_name: name,
          gender,
          size,
          breed,
          birthday_date,
          birthday_years,
          food_exceptions,
          pet_id: id,
        })

      },
      notAfterToday(birthday_date) {
      return birthday_date > today;
    },
    },
    components: { DatePicker },
  }
</script>
<style>
.mx-input {
     border: none; 
            box-shadow: none;
            -webkit-box-shadow: none;
}
</style>
<style lang="scss" scoped>
    // @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
    @import "@/assets/styles/_forms.scss";

    .buttons {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        &__prev, &__next {
            width: 255px;
            height: 55px;
            border-radius: 10px;

            span {
                font-size: 21px;
                text-align: center;
                letter-spacing: 0.2px;
                line-height: 55px;
            }

            &:hover {
                cursor: pointer;
            }
        }

        &__prev {
            background-color: rgba(249, 242, 246, 0.8);
        }

        &__next {
            background-color: #ffcc01;
            position: relative;

            svg {
                position: absolute;
                top: 10px;
                right: 32.4px;
                fill: #FAFAFA;
            }

            &:hover {
                svg {
                    fill: #2289b5;
                }
            }
        }
    }

    .scale-in-hor-left {
        animation: scale-in-hor-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @keyframes scale-in-hor-left {
        0% {
            transform: scaleX(0);
            transform-origin: 0% 0%;
            opacity: 1;
        }
        100% {
            transform: scaleX(1);
            transform-origin: 0% 0%;
            opacity: 1;
        }
    }

    .container {
        width: 920px;
        margin: 0 auto;
    }

    .transition-box {
        position: relative;
    }

    .translate-enter-active,
    .translate-leave-active {
        transition: all .5s;
    }

    .translate-enter,
    .translate-leave-active {
        opacity: 0;
    }

    .translate-enter {
        transform: translateX(31px);
    }

    .translate-leave-active {
        transform: translateX(-31px);
    }

    .abs {
        position: absolute;
        right: 0;
        left: 0;
    }

    form {
        display: flex;
        flex-wrap: wrap;
        padding: 0 5px;
    }

    .form_small {
        width: 690px;
        margin: 0 auto;
        padding: 0;
    }

    .form_contact {
        .form-group__helper {
            height: 40px;
        }
    }

    .form-section {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 55px;
        &:first-child {
            margin-left: 0;
        }
        // &:first-child {

        // }
    }

    .form-group {
        font-family: Montserrat, sans-serif;
        text-align: left;

        &__label {
            font-size: 12px;
            line-height: 15px;
            color: #828282;
            box-sizing: border-box;
            display: inline-block;
            max-width: 400px;
        }

        &__link {
            display: block;
            text-align: right;
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.3px;
            text-decoration-line: underline;
            color: #4F4F4F;
            padding: 5px 0;
        }

        &__helper {
            height: 60px;
            display: flex;
            justify-content: space-between;

            &_small {
                height: 50px;
            }
        }

        &__errors {
            color: red;
            font-family: Montserrat, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: 0.3px;

            & .error {
                padding: 5px 5px;
                display: flex;
            }
        }
    }

    .input {
        font-family: Montserrat, sans-serif;
        display: inline-flex;
        align-items: stretch;
        position: relative;
        box-sizing: border-box;
        margin-right: 20px;
        border-bottom: 1px solid #4f4f4f;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        padding-top: 5px;
        min-width: 255px;

        &:last-child {
            margin-right: 0;
        }

        &_type_date {
            min-width: 150px;
        }

        &_type_time {
            min-width: 100px;
        }

        &_type_address {
            min-width: 325px;
            width: 100%;
        }

        &__control {
            border: none;
            outline: none;
            padding: 10px 5px;
            width: 100%;
            box-sizing: border-box;
            line-height: 20px;
            font: inherit;

            &_type_datetime {
                padding: 8px 5px;
                text-transform: uppercase;
            }
        }

        &__dropdown {
            position: absolute;
            top: 105%;
            left: 0;
            right: 0;
            border-radius: 5px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, .3);
            background: #fff;
            z-index: 1;
            font-size: 16px;
            line-height: 20px;
            font-weight: 500;

            &-option {
                padding: 10px;

                &:hover {
                    background-color: rgba(#FFCC01, 0.3);
                }
            }
        }
    }

    .input-group {
        display: flex;
        justify-content: space-between;
    }
    .date-picker{
        min-width: 255px;
    }
    .radio {
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        box-sizing: border-box;

        &:last-child {
            margin-right: 0;
        }

        &__control {
            display: none;
        }

        &__button {
            font-family: Montserrat, sans-serif;
            font-size: 12px;
            font-weight: bold;
            line-height: 16px;
            border: 2px solid #2289B5;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 0 5px;
            min-width: 65px;
            text-align: center;
            padding: 3px 5px;

            &-label {
            	display: block;
            	margin: 0;

            	&_sub {
            		color: #828282;
            	}
            }
        }
        &_big &__button {
            min-height: 40px;
            min-width: 90px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
       

        &:hover > &__button {
            background-color: rgba(34, 137, 181, 0.2);
            transition-duration: .8s;
        }

        &__control:checked ~ &__button {
            background-color: #2289B5;
        }

        &__control:checked ~ &__button &__button-label {
            color: #fff;
        }


        &__image {
            margin-top: auto;
            margin-bottom: 10px;

            width: 100%;

            & img {
                display: block;
                margin: 0 auto;
            }
        }
    }

    .radio-group {
        
        margin-top: 17px;

        &__list {
            display: flex;
        }

        &_dog-size {
            margin-top: 0;
        }

        &_dog-size &__list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }

        &_dog-size .radio {
            margin: 0;

            &:first-child {
                justify-self: flex-start;
                align-items: flex-start;
            }

            &:last-child {
                justify-self: flex-end;
                align-items: flex-end;
            }
        }

        &_dog-years {
            max-width: 330px;
        }

        &_dog-years &__list {
            justify-content: space-between;
        }
    }

    .textarea {
        border-radius: 5px;
        border: 1px solid #828282;
        box-sizing: border-box;
        font-size: 12px;
        line-height: 15px;
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        margin-top: 10px !important;
        padding: 10px;
        resize: none;
        width: 100%;
        max-width: 280px;
    }

</style>
