<template>
    <form @submit.prevent="submitHandler" class="form_small">
        <div class="form-section">

            <div :class="{ 'field--error wobble-error': $v.pet_name.$error }" class="form-group">
                <label class="form-group__label">Имя питомца</label>
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
                        <input type="date" class="input__control input__control_type_datetime" v-model="birthday_date">
                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors"></div>
                </div>
            </div>
        </div>
        <div class="form-section">

            <div :class="{ 'field--error wobble-error': $v.gender.$error }" class="form-group">
                <label class="form-group__label">Пол питомца</label>
                <div class="form-group__content">
                    <div class="radio-group">
                        <div class="radio-group__list">
                            <label class="radio">
                                <input type="radio" class="radio__control" value="m" v-model="gender"/>
                                <span class="radio__button">M</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="radio__control" value="w" v-model="gender"/>
                                <span class="radio__button">Ж</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors">
                        <div class="form-group__errors">
                            <div class="error" v-if="$v.gender.$dirty && !$v.gender.required">Выберите пол питомца</div>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="{ 'field--error wobble-error': $v.size.$error }" class="form-group">
                <label class="form-group__label">Размер питомца</label>
                <div class="form-group__content">
                    <div class="radio-group">
                        <div class="radio-group__list radio-group__list_with-images">
                            <label class="radio">
                                <input type="radio" class="radio__control" value="1" v-model="size"/>
                                <img class="radio__image" src="@/assets/small-dog.png" alt="">
                                <span class="radio__button">маленький</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="radio__control" value="2" v-model="size"/>
                                <img class="radio__image" src="@/assets/medium-dog.png" alt="">
                                <span class="radio__button">средний</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="radio__control" value="3" v-model="size"/>
                                <img class="radio__image" src="@/assets/large-dog.png" alt="">
                                <span class="radio__button">большой</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group__helper">
                    <div class="form-group__errors">
                        <div class="error" v-if="$v.size.$dirty && !$v.size.required">Выберите размер питомца</div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="form-group__label">Аллергия</label>
                <div class="form-group__content">
                    <div class="radio-group">
                        <div class="radio-group__list radio-group__list_with-images">
                            <label class="radio">
                                <input type="radio" class="radio__control" :value="true" v-model="hasAllergy"/>
                                <span class="radio__button">Да</span>
                            </label>
                            <label class="radio">
                                <input type="radio" class="radio__control" :value="false" v-model="hasAllergy"/>
                                <span class="radio__button">Нет</span>
                            </label>
                        </div>
                    </div>
                    <textarea
                            v-if="hasAllergy"
                            rows="2"
                            class="textarea"
                            v-model="food_exceptions"
                            placeholder="Рыба, курица"
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
  import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

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
    },
  }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
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
        justify-content: space-between;
    }

    .form_small {
        width: 650px;
        margin: 0 auto;
    }

    .form-section {
        display: flex;
        flex-direction: column;
    }

    .form-group {
        font-family: Montserrat, sans-serif;
        text-align: left;

        &__label {
            font-size: 12px;
            line-height: 15px;
            color: #828282;
            box-sizing: border-box;
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
            height: 50px;
            display: flex;
            justify-content: space-between;
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

    .radio {
        margin-right: 10px;
        display: flex;
        flex-direction: column;
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
            line-height: 25px;
            border: 2px solid #2289B5;
            box-sizing: border-box;
            border-radius: 5px;
            padding: 0 5px;
            min-width: 65px;
            text-align: center;
            margin-top: 17px;
        }

        &__control:checked ~ &__button {
            background-color: #2289B5;
            color: #FFFFFF;
        }

        &__control:checked ~ &__button:hover {
            background-color: #2289B5;
            color: #FFFFFF;
        }

        &__control:hover ~ &__button {
            background-color: rgba(34, 137, 181, 0.2);
            transition-duration: .8s;
        }

        &__image {
            width: 80px;
            display: block;
        }
    }

    .radio-group {
        &__list {
            display: flex;
        }
    }

    .textarea {
        border-radius: 5px;
        border: 1px solid #828282;
        box-sizing: border-box;
        color: #333333;
        font-family: Montserrat, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        margin-top: 10px !important;
        padding: 10px;
        resize: none;
        width: 100%;
    }

</style>
