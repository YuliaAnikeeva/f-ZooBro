<template>
  <div class="pet-form">
    <div class="pet-form__container">
      <div class="pet-form__form-section">
        <label class="avatar-input">
          <img v-if="avatarFile && $v.avatarFile.$dirty && !$v.avatarFile.$invalid" :src="avatarDataURL" alt="avatar" />
          <img v-else src="@/assets/profile-pic/default-avatar.png" alt="avatar" />
          <input 
            class="avatar-input__control"
            type="file"
            accept="image/jpg,image/jpeg,image/png"
            @change="onSelectAvatar"
            >
          <div class="avatar-input__overlay">
            <svg style="fill:currentColor;width:1em;height:1em" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M48.3365 6.23188C47.3384 5.16908 45.9601 4.54106 44.3916 4.54106H36.5019V4.44444C36.5019 3.23671 36.0266 2.07729 35.2186 1.30435C34.4106 0.483092 33.3175 0 32.1293 0H17.8707C16.635 0 15.5418 0.483092 14.7338 1.30435C13.9259 2.1256 13.4506 3.23671 13.4506 4.44444V4.54106H5.60837C4.03992 4.54106 2.6616 5.16908 1.6635 6.23188C0.665399 7.24638 0 8.69565 0 10.2415V34.2995C0 35.8937 0.617871 37.2947 1.6635 38.3092C2.6616 39.3237 4.08745 40 5.60837 40H44.3916C45.9601 40 47.3384 39.372 48.3365 38.3092C49.3346 37.2947 50 35.8454 50 34.2995V10.2415C50 8.64734 49.3821 7.24638 48.3365 6.23188ZM47.5285 34.2995H47.481C47.481 35.1691 47.1483 35.942 46.5779 36.5217C46.0076 37.1015 45.2472 37.4396 44.3916 37.4396H5.60837C4.75285 37.4396 3.9924 37.1015 3.42205 36.5217C2.85171 35.942 2.51901 35.1691 2.51901 34.2995V10.2415C2.51901 9.37198 2.85171 8.59903 3.42205 8.01932C3.9924 7.43961 4.75285 7.10145 5.60837 7.10145H14.7814C15.4943 7.10145 16.0646 6.52174 16.0646 5.7971V4.39613C16.0646 3.86473 16.2548 3.38164 16.5875 3.04348C16.9202 2.70531 17.3954 2.51208 17.9183 2.51208H32.1293C32.6521 2.51208 33.1274 2.70531 33.4601 3.04348C33.7928 3.38164 33.9829 3.86473 33.9829 4.39613V5.7971C33.9829 6.52174 34.5532 7.10145 35.2662 7.10145H44.4392C45.2947 7.10145 46.0551 7.43961 46.6255 8.01932C47.1958 8.59903 47.5285 9.37198 47.5285 10.2415V34.2995Z"/>
              <path d="M24.9996 10.3867C21.7677 10.3867 18.8209 11.7394 16.7297 13.865C14.5909 16.0389 13.3076 18.9858 13.3076 22.2708C13.3076 25.5558 14.6384 28.551 16.7297 30.6766C18.8685 32.8505 21.7677 34.1548 24.9996 34.1548C28.2316 34.1548 31.1783 32.8022 33.2696 30.6766C35.4084 28.5027 36.6917 25.5558 36.6917 22.2708C36.6917 18.9858 35.3609 15.9906 33.2696 13.865C31.1783 11.7394 28.2316 10.3867 24.9996 10.3867ZM31.4635 28.8891C29.8 30.5317 27.5186 31.5945 24.9996 31.5945C22.4806 31.5945 20.1993 30.5317 18.5358 28.8891C16.8723 27.1983 15.8742 24.8795 15.8742 22.3191C15.8742 19.7587 16.9198 17.4399 18.5358 15.749C20.1993 14.0582 22.4806 13.0437 24.9996 13.0437C27.5186 13.0437 29.8 14.1065 31.4635 15.749C33.127 17.4399 34.1251 19.7587 34.1251 22.3191C34.1726 24.8795 33.127 27.1983 31.4635 28.8891Z"/>
              <path d="M41.9207 15.0732C43.2069 15.0732 44.2496 14.0134 44.2496 12.706C44.2496 11.3987 43.2069 10.3389 41.9207 10.3389C40.6345 10.3389 39.5918 11.3987 39.5918 12.706C39.5918 14.0134 40.6345 15.0732 41.9207 15.0732Z"/>
            </svg>
          </div>
        </label>
        <div class="form-group form-group_center pet-form__name" :class="{ 'field--error wobble-error': $v.tempPet.name.$error }">
          <div class="form-group__content">
            <div class="input">
              <input type="text" class="input__control" v-model="tempPet.name"/>
            </div>
          </div>
          <div class="form-group__helper">
            <div class="form-group__errors">
              <div class="error" v-if="$v.tempPet.name.$dirty && !$v.tempPet.name.required">обязательное поле</div>
            </div>
          </div>
        </div>
      </div>
      <div class="pet-form__form-section">

        <div class="form-group">
          <label class="form-group__label">Порода</label>
          <div class="form-group__content">
            <div class="input">
              <input type="text" class="input__control" v-model="tempPet.breed"/>
              <div class="input__dropdown" v-if="brandsDog.length">
                <div v-for="(el, idx) in brandsDog" class="input__dropdown-option"
                  :key="idx"
                  @click="()=>{tempPet.breed = el}"
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

        <div :class="{ 'field--error wobble-error': $v.tempPet.gender.$error }" class="form-group">
          <label class="form-group__label">Твой пол</label>
          <div class="form-group__content">
            <div class="radio-group">
              <div class="radio-group__list">
                <label class="radio">
                  <input type="radio" class="radio__control" value="m" v-model="tempPet.gender"/>
                  <div class="radio__button">
                    <span class="radio__button-label">М</span>
                  </div>
                </label>
                <label class="radio">
                  <input type="radio" class="radio__control" value="w" v-model="tempPet.gender"/>
                  <div class="radio__button">
                    <span class="radio__button-label">Ж</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="form-group__helper">
            <div class="form-group__errors">
              <div class="form-group__errors">
                <div class="error" v-if="$v.tempPet.gender.$dirty && !$v.tempPet.gender.required">Выберите пол питомца</div>
              </div>
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
              v-model="tempPet.food_exceptions"
              placeholder="Укажи, на что у тебя аллергия"
            ></textarea>
          </div>
          <div class="form-group__helper">
            <div class="form-group__errors"></div>
          </div>
        </div>

      </div>

      <div class="pet-form__form-section">
      
        <div class="form-group pet-form__birthday-date"  :class="{ 'field--error wobble-error': $v.tempPet.birthday_years.$error }">
          <label class="form-group__label">Дата рождения</label>
          <div class="form-group__content">
            <div class="input input_type_date">
              <input type="date" class="input__control input__control_type_datetime" v-model="tempPet.birthday_date">
            </div>
          </div>
          <div class="form-group__helper">
            <div class="form-group__errors"></div>
          </div>
        </div>

        <div class="form-group"  :class="{ 'field--error wobble-error': $v.tempPet.birthday_years.$error }">
          <label class="form-group__label">Если ты не помнишь дату своего рождения, выбери примерный возраст</label>
          <div class="form-group__content">
            <div class="radio-group radio-group_dog-years">
              <div class="radio-group__list">
                <label class="radio radio_big">
                  <input type="radio" class="radio__control" value="0-1" v-model="tempPet.birthday_years"/>
                  <div class="radio__button">
                    <span class="radio__button-label radio__button-label_sub">до 1 года</span>
                  </div>
                </label>
                <label class="radio radio_big">
                  <input type="radio" class="radio__control" value="1-5" v-model="tempPet.birthday_years"/>
                  <div class="radio__button">
                    <span class="radio__button-label radio__button-label_sub">1-5 лет</span>
                  </div>
                </label>
                <label class="radio radio_big">
                  <input type="radio" class="radio__control" value="5+" v-model="tempPet.birthday_years"/>
                  <div class="radio__button">
                    <span class="radio__button-label radio__button-label_sub">старше 5 лет</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div class="form-group__helper">
            <div class="form-group__errors">
              <div class="error" v-if="$v.tempPet.birthday_years.$dirty && !$v.tempPet.birthday_years.required">Укажи дату рождения или примерный возраст</div>
            </div>
          </div>
        </div>


        <div :class="{ 'field--error wobble-error': $v.tempPet.size.$error }" class="form-group">
          <label class="form-group__label">Твой размер</label>
          <div class="form-group__content">
            <div class="radio-group radio-group_dog-size">
              <div class="radio-group__list">
                <label class="radio radio_big">
                  <input type="radio" class="radio__control" value="1" v-model="tempPet.size"/>
                  <div class="radio__image">
                    <img src="@/assets/small-dog.png" alt="">
                  </div>
                  <div class="radio__button">
                    <span class="radio__button-label">маленький</span>
                    <span class="radio__button-label radio__button-label_sub">до 10 кг</span>
                  </div>
                </label>
                <label class="radio radio_big">
                  <input type="radio" class="radio__control" value="2" v-model="tempPet.size"/>
                  <div class="radio__image">
                    <img src="@/assets/medium-dog.png" alt="">
                  </div>
                  <div class="radio__button">
                    <span class="radio__button-label">средний</span>
                    <span class="radio__button-label radio__button-label_sub">от 10 до 25 кг</span>
                  </div>
                </label>
                <label class="radio radio_big">
                  <input type="radio" class="radio__control" value="3" v-model="tempPet.size"/>
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
          <div class="form-group__helper">
            <div class="form-group__errors">
              <div class="error" v-if="$v.tempPet.size.$dirty && !$v.tempPet.size.required">Выберите размер питомца</div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="pet-form__buttons">
      <button class="pet-form__button"
        @click="onSave">
          Сохранить
      </button>
      <button class="pet-form__button pet-form__button_secondary"
        @click="$emit('close')"
        >
          Отменить
      </button>
    </div>
  </div>
</template>

<script>
import { helpers, withParams, required, requiredIf, minLength } from 'vuelidate/lib/validators'
// import Step2 from '@/components/onboarding/orderSteps/Step2'

const validateFileType = types => helpers.withParams(
  {
    types,
  },
  file => !helpers.req(file) || types.indexOf(file.type) !== -1
)

const validateFileSize = (limit, type, mul) => helpers.withParams(
  {
    limit,
    type,
  },
  file => !helpers.req(file) || (file.size < limit*mul)
)

export default {
  name: "PetForm",
  props: {
    pet: {
      type: Object,
      default: {},
    }
  },
  components: {
    // Step2
  },
  data() {
    return {
      tempPet: this.pet ? {
        id: null,
        name: null,
        breed: null,
        gender: null,
        birthday_date: null,
        birthday_years: null,
        food_exceptions: null,
        ...this.pet, 
      } : {},
      avatarFile: null,
      avatarDataURL: null,
      hasAllergy: this.pet && !!this.pet.food_exceptions,
    }
  },
  computed: {
    brandsDog () {
      const dogs = [
        'Метис', 'Двортерьер', 'Австралийская овчарка (Аусси)', 'Акита-ину', 'Алабай (Среднеазиатская овчарка)', 'Аляскинский кли-кай', 'Аляскинский маламут', 'Американская акита', 'Американский булли', 'Американский бульдог', 'Американский кокер-спаниель', 'Американский стаффордширский терьер', 'Английский бульдог', 'Английский кокер-спаниель', 'Английский мастиф', 'Английский сеттер', 'Аргентинский дог', 'Афганская борзая', 'Аффенпинчер', 'Басенджи', 'Бассет-хаунд', 'Бедлингтон-терьер', 'Белая швейцарская овчарка', 'Бельгийская овчарка', 'Бельгийский гриффон', 'Бернский зенненхунд', 'Бигль', 'Бишон фризе', 'Бладхаунд', 'Бобтейл', 'Боксер', 'Бордер-колли', 'Бордер-терьер', 'Бордоский дог', 'Босерон', 'Бостон-терьер', 'Бриар', 'Брюссельский гриффон', 'Бульмастиф', 'Бультерьер', 'Бурбуль', 'Веймаранер', 'Вельш-корги кардиган', 'Вельш-корги пемброк', 'Вельштерьер', 'Венгерская выжла', 'Вест-хайленд-уайт-терьер', 'Восточноевропейская овчарка', 'Грейхаунд', 'Далматин', 'Джек-рассел-терьер', 'Доберман', 'Дратхаар', 'Западно-сибирская лайка', 'Золотистый ретривер', 'Ирландский волкодав', 'Ирландский сеттер', 'Ирландский терьер', 'Испанский мастиф', 'Йоркширский терьер', 'Ка-де-бо', 'Кавалер-кинг-чарльз-спаниель', 'Кавказская овчарка', 'Канарский дог', 'Кане-корсо', 'Карело-финская лайка', 'Кеесхонд', 'Керн-терьер', 'Китайская хохлатая собака', 'Ксолоитцкуинтли', 'Курцхаар', 'Лабрадор-ретривер', 'Левретка', 'Леонбергер', 'Лхаса апсо', 'Мальтийская болонка', 'Мальтипу', 'Маремма-абруццкая овчарка', 'Миттельшнауцер', 'Мопс', 'Московская сторожевая собака', 'Неаполитанский мастиф', 'Немецкая овчарка', 'Немецкий дог', 'Немецкий ягдтерьер', 'Норвич-терьер', 'Ньюфаундленд', 'Папильон', 'Парсон-рассел-терьер', 'Пекинес', 'Пиренейская горная собака', 'Питбуль', 'Померанский шпиц', 'Помски', 'Пражский крысарик', 'Пти-брабансон', 'Пудель', 'Ризеншнауцер', 'Родезийский риджбек', 'Ротвейлер', 'Русская гончая', 'Русская пегая гончая', 'Русская псовая борзая', 'Русский охотничий спаниель', 'Русский той-терьер', 'Русский черный терьер', 'Салюки', 'Самоедская собака', 'Сенбернар', 'Сиба-ину', 'Сибирский хаски', 'Скотч-терьер', 'Стаффордширский бультерьер', 'Тайский риджбек', 'Такса', 'Тибетский мастиф', 'Тоса-ину', 'Уиппет', 'Фараонова собака', 'Фокстерьер', 'Французский бульдог', 'Цвергпинчер', 'Цвергшнауцер', 'Чау-чау', 'Чихуахуа', 'Шарпей', 'Шелти', 'Ши-тцу', 'Шипперке', 'Шотландская овчарка (колли)', 'Энтлебухер зенненхунд', 'Эрдельтерьер', 'Эстонская гончая', 'Японский хин', 'Японский шпиц',
      ]

      if (this.tempPet.breed && this.tempPet.breed.trim().length > 2) {
        const condidate = dogs.filter(el => el.toLowerCase().indexOf(this.tempPet.breed.toLowerCase()) !== -1)
        if (condidate.length === 1 && condidate[0] === this.tempPet.breed.trim()) {
          return []
        } else {
          return condidate
        }
      } else {
        return []
      }
    },
  },
  validations() {
    return {
      avatarFile: {
        type: validateFileType(['image/jpg','image/jpeg','image/png']),
        size: validateFileSize(10, 'Kb', 1000)
      },
      tempPet: {
        name: {
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
    }
  },
  methods: {
    onSave () {
      this.$v.$touch()
      let invalid = this.$v.$invalid
      if (!invalid) {
        let {id, name, breed, birthday_date, birthday_years, gender, size, food_exceptions} = this.tempPet
        this.$emit('save', {
          ...id && { id },
          name, breed, birthday_date, birthday_years, gender, size, food_exceptions
        })
      }
    },
    async onSelectAvatar (e) {
      let { target } = e
      if (target.files.length) {
        this.avatarFile = target.files[0]
        this.$v.avatarFile.$touch()
        if (!this.$v.avatarFile.$invalid) {
          let reader = new FileReader();
          reader.onload = e => {
            this.avatarDataURL = e.target.result
          }
          reader.readAsDataURL(this.avatarFile);
        } else {
          if (!this.$v.avatarFile.type) {
            this.$store.dispatch('clearSnackbar')
            this.$store.dispatch('setSnackbarType', 'error')
            await this.$store.dispatch('setSnackbarMsg', `Не поддерживаемый формат файла ${ this.avatarFile.type }`)
          }
          if (!this.$v.avatarFile.size) {
            this.$store.dispatch('clearSnackbar')
            this.$store.dispatch('setSnackbarType', 'error')
            await this.$store.dispatch('setSnackbarMsg', `Размер файла не должен превышать ${ this.$v.avatarFile.$params.size.limit } ${ this.$v.avatarFile.$params.size.type }`)
          }
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_forms.scss";

.pet-form {
  &__container {
    display: grid;
    margin: 0 auto;
    max-width: 1000px;
    grid-template-columns: 150px auto auto;
    grid-gap: 100px;
  }

  &__buttons {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 690px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  &__button {
    font-family: Montserrat, sans-serif;
    position: relative;
    min-width: 230px;
    padding: 15px 55px;
    background-color: #FFCC01;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);

    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #464451;

    &_secondary {
      color: #464451;
      background-color: #fff;
      border: 1px solid #464451;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: none;

      &:active {
        background-color: #464451;
        color: #fff;
        box-shadow: none;
      }
    }

    &__inner {
      position: relative;
      display: inline-block;
    }

    &__icon {
      position: absolute;
      left: 100%;
      fill: #fff;
      stroke: #C8A20F;
      stroke-width: 1px;
      height: 100%;
      margin-left: 10px;
    }

    &:hover {
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    &:active {
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    }

    &:active &__icon {
      fill: #2289B5;
    }
  }
}


.pet-form {
  &__birthday-date .form-group {
    &__helper {
      min-height: 20px;
    }
  }

  &__name .input {
    font-size: 24px;
    font-weight: 600;
  }
}

.form-group {
  &__helper {
    min-height: 40px;
  }
}

@media (max-width: 1440px) {
  .pet-form {
    &__container {
      grid-gap: 50px;
      grid-template-columns: 90px auto auto;
    }

    &__buttons {
      margin-top: 10px;
    }

    &__name .input {
      font-size: 18px;
    }
  }

  .form-group {
    &__helper {
      min-height: 15px;
    }
  }
}

</style>
