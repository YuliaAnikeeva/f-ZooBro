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
                        <date-picker 
                          v-model="birthday_date"  
                          valueType="format" 
                          format="DD.MM.YYYY" 
                          class="date-picker" 
                          placeholder="ДД.ММ.ГГГГ" 
                          :disabled-date="notAfterToday" 
                          :lang="lang">
                        </date-picker>
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
  import 'vue2-datepicker/locale/ru';

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
       lang: {
          formatLocale: {
            firstDayOfWeek: 1,
          },
          monthBeforeYear: true,
        },
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
    @import "@/assets/styles/_forms.scss";

    form {
        display: flex;
        flex-wrap: wrap;
        padding: 0 12px;
        color: #464451;
    }

    .form_small {
        width: 690px;
        margin: 0 auto;
        // padding: 0;
    }

    .form-section {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 55px;
        &:first-child {
            margin-left: 0;
        }
    }

    .date-picker{
        min-width: 255px;
    }

    @media (max-width: 414px) {
    .form-section {
      margin: 0;
    }
}

    @media (max-width: 414px) {

        // form {
            // margin-left: 20px;
        // }

        .form-section {
            margin-left: 0;
        }

        // .radio-group__list {
            // margin-right: 20px;
        // }
    }
@media (max-width: 375px) {
  form {
    padding: 0 10px;
  }
}

</style>
