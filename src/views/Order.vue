<template>
    <div>
        <p>
            <span>{{step}}</span> из <span>{{steps.length}}</span>
        </p>

        <div>
            <button @click="()=>updateE(-1)"> -</button>
            <button @click="()=>updateE(1)"> +</button>
        </div>

        <div class="transition-box">
            <transition name="translate">
                <div class="abs" v-if="step === 'step-1'">
                    <div class="container">
                        <form @submit.prevent="submitHandler">
                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.dogName.$error }">
                                <label for="dogName" class="form__label">*Кличка питомца</label>
                                <input
                                        id="dogName"
                                        type="text"
                                        v-model.trim="dogName"
                                        class="form__input"
                                >
                                <br>
                                <small
                                        v-if="($v.dogName.$dirty && !$v.dogName.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                                <small
                                        v-else-if="($v.dogName.$dirty && !$v.dogName.minLength)"
                                        class="helper-text invalid"
                                > минимум {{$v.dogName.$params.minLength.min}} символов |
                                    ({{dogName.length}}/{{$v.dogName.$params.minLength.min}})
                                </small>
                            </div>

                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.dogGender.$error }">
                                <label class="form__label">*Пол питомца</label>
                                <input type="radio" id="genderM" value="кабель" v-model="dogGender">
                                <label for="genderM">кабель</label>
                                <input type="radio" id="genderW" value="сука" v-model="dogGender">
                                <label for="genderW">сука</label>
                                <br>
                                <small
                                        v-if="($v.dogGender.$dirty && !$v.dogGender.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                            </div>

                            <div class="form-group">
                                <label for="breed" class="form__label">Порода питомца</label>
                                <input
                                        id="breed"
                                        type="text"
                                        v-model.trim="breed"
                                        class="form__input"
                                >

                                <ul>
                                    <li v-for="(el, idx)  in brandsDog"
                                        :key="idx"
                                        @click="()=>{breed = el}"
                                    >
                                        {{el}}
                                    </li>
                                </ul>

                            </div>

                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.weigh.$error }">
                                <label class="form__label">*вес</label>
                                <input type="radio" id="weighV1" value="1" v-model="weigh">
                                <label for="weighV1">1</label>
                                <input type="radio" id="weighV2" value="2" v-model="weigh">
                                <label for="weighV2">2</label>
                                <input type="radio" id="weighV3" value="3" v-model="weigh">
                                <label for="weighV3">3</label>
                                <br>
                                <small
                                        v-if="($v.weigh.$dirty && !$v.weigh.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                            </div>

                            <div class="form-group">
                                <label for="dateOfBirth" class="form__label">дата рождения</label>
                                <input
                                        id="dateOfBirth"
                                        type="date"
                                        v-model="dateOfBirth"
                                        class="form__input"
                                >
                            </div>

                            <div class="form-group">
                                <label class="form__label">возраст (варианты)</label>
                                <input type="radio" id="ageV1" value="1" v-model="age">
                                <label for="ageV1">1</label>
                                <input type="radio" id="ageV2" value="2" v-model="age">
                                <label for="ageV2">2</label>
                                <input type="radio" id="ageV3" value="3" v-model="age">
                                <label for="ageV3">3</label>
                            </div>

                            <div class="form-group">
                                <label for="allergies" class="form__label">Пищевые особенности</label>
                                <input
                                        id="allergies"
                                        type="text"
                                        v-model.trim="allergies"
                                        class="form__input"
                                >
                            </div>

                            <div class="card-action">
                                <div>
                                    <button type="submit">
                                        далее
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </transition>

            <transition name="translate">
                <div class="abs" v-if="step === 'step-2'">
                    <div class="container">
                        <form @submit.prevent="submitHandler">
                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.email.$error }">
                                <label for="email" class="form__label">*email</label>
                                <input
                                        id="email"
                                        type="email"
                                        v-model.trim="email"
                                        class="form__input"
                                >
                                <small
                                        v-if="($v.email.$dirty && !$v.email.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                                <small
                                        v-if="($v.email.$dirty && !$v.email.email)"
                                        class="helper-text invalid"
                                > некорректный email
                                </small>
                            </div>

                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.phone.$error }">
                                <label for="phone" class="form__label">*телефон</label>
                                <the-mask
                                        id="phone"
                                        type="tel"
                                        placeholder="+7 (000) 000-00-00"
                                        v-model.trim="phone"
                                        mask="+7 (###) ###-##-##"
                                        class="form__input"
                                />
                                <small
                                        v-if="($v.phone.$dirty && !$v.phone.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                                <small
                                        v-if="($v.phone.$dirty && !$v.phone.numeric)"
                                        class="helper-text invalid"
                                > numeric
                                </small>
                                <small
                                        v-if="($v.phone.$dirty && !$v.phone.minLength)"
                                        class="helper-text invalid"
                                > некорретный номер
                                </small>
                            </div>

                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.plan.$error }">
                                <label class="form__label">*вариант покупки</label>
                                <input type="radio" id="planV1" value="1" v-model="plan">
                                <label for="planV1">1</label>
                                <input type="radio" id="planV2" value="2" v-model="plan">
                                <label for="planV2">2</label>
                                <br>
                                <small
                                        v-if="($v.plan.$dirty && !$v.plan.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                            </div>

                            <div class="form-group" :class="{ 'form-group--error wobble-error': $v.email.$error }">
                                <label for="address" class="form__label">*Адрес доставки</label>
                                <input
                                        id="address"
                                        type="text"
                                        v-model.trim="address"
                                        class="form__input"
                                >
                                <small
                                        v-if="($v.address.$dirty && !$v.address.required)"
                                        class="helper-text invalid"
                                > обязательное поле
                                </small>
                            </div>

                            <div class="card-action">
                                <div>
                                    <button type="submit">
                                        далее
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div>
                        <p>зона доставки</p>
                        <div style="position:relative;overflow:hidden;"><a
                                href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                                style="color:#eee;font-size:12px;position:absolute;top:0px;">Москва</a><a
                                href="https://yandex.ru/maps/213/moscow/?ll=37.604136%2C55.760765&mode=usermaps&source=constructorLink&um=constructor%3A6909fae852e9144b06470b26df6895bb7a9ef26ccbd40dfa7a516aec82082422&utm_medium=mapframe&utm_source=maps&z=10"
                                style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс.Карты — поиск мест
                            и адресов, городской транспорт</a>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CSAn4XnI" width="100%" height="400"
                                    frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
                        </div>
                    </div>

                </div>
            </transition>

            <transition name="translate">
                <div class="abs" v-if="step === 'step-3'">
                    <div class="container">
                        <p>данные отправлены...</p>
                    </div>
                </div>
            </transition>

        </div>

    </div>
</template>

<script>
  import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

  export default {
    name: 'Order',
    metaInfo: {
      title: 'Order',
    },
    validations () {
      if (this.step === 'step-1') {
        return {
          dogName: {
            required,
            minLength: minLength(3),
          },
          dogGender: {
            required,
          },
          weigh: {
            required,
          },
        }
      } else if (this.step === 'step-2') {
        return {
          email: {
            required,
            email,
          },
          phone: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(10),
            numeric,
          },
          plan: {
            required,
          },
          address: {
            required,
          },
        }
      } else {
        return {}
      }

    },
    data: () => ({
      dogName: '',
      dogGender: '',
      breed: '',
      weigh: '',
      dateOfBirth: '',
      age: '',
      allergies: '',
      email: '',
      phone: '',
      plan: '',
      address: '',

      step: 'step-1',
      steps: ['step-1', 'step-2', 'step-3'],
    }),
    methods: {
      onClick (e) {
        this.coords = e.get('coords')
      },
      updateE (val = 1) {
        console.log('this.$v', this.$v)
        const idx = this.steps.indexOf(this.step)
        const len = this.steps.length
        if (idx !== -1 && idx + val <= len - 1 && idx + val >= 0) {
          this.step = this.steps[idx + val]
        }
      },
      submitHandler () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        this.updateE(1)
      },
    },
    computed: {
      brandsDog () {
        const dogs = [
          'Австралийская овчарка (Аусси)', 'Акита-ину', 'Алабай (Среднеазиатская овчарка)', 'Аляскинский кли-кай', 'Аляскинский маламут', 'Американская акита', 'Американский булли', 'Американский бульдог', 'Американский кокер-спаниель', 'Американский стаффордширский терьер', 'Английский бульдог', 'Английский кокер-спаниель', 'Английский мастиф', 'Английский сеттер', 'Аргентинский дог', 'Афганская борзая', 'Аффенпинчер', 'Басенджи', 'Бассет-хаунд', 'Бедлингтон-терьер', 'Белая швейцарская овчарка', 'Бельгийская овчарка', 'Бельгийский гриффон', 'Бернский зенненхунд', 'Бигль', 'Бишон фризе', 'Бладхаунд', 'Бобтейл', 'Боксер', 'Бордер-колли', 'Бордер-терьер', 'Бордоский дог', 'Босерон', 'Бостон-терьер', 'Бриар', 'Брюссельский гриффон', 'Бульмастиф', 'Бультерьер', 'Бурбуль', 'Веймаранер', 'Вельш-корги кардиган', 'Вельш-корги пемброк', 'Вельштерьер', 'Венгерская выжла', 'Вест-хайленд-уайт-терьер', 'Восточноевропейская овчарка', 'Грейхаунд', 'Далматин', 'Джек-рассел-терьер', 'Доберман', 'Дратхаар', 'Западно-сибирская лайка', 'Золотистый ретривер', 'Ирландский волкодав', 'Ирландский сеттер', 'Ирландский терьер', 'Испанский мастиф', 'Йоркширский терьер', 'Ка-де-бо', 'Кавалер-кинг-чарльз-спаниель', 'Кавказская овчарка', 'Канарский дог', 'Кане-корсо', 'Карело-финская лайка', 'Кеесхонд', 'Керн-терьер', 'Китайская хохлатая собака', 'Ксолоитцкуинтли', 'Курцхаар', 'Лабрадор-ретривер', 'Левретка', 'Леонбергер', 'Лхаса апсо', 'Мальтийская болонка', 'Мальтипу', 'Маремма-абруццкая овчарка', 'Миттельшнауцер', 'Мопс', 'Московская сторожевая собака', 'Неаполитанский мастиф', 'Немецкая овчарка', 'Немецкий дог', 'Немецкий ягдтерьер', 'Норвич-терьер', 'Ньюфаундленд', 'Папильон', 'Парсон-рассел-терьер', 'Пекинес', 'Пиренейская горная собака', 'Питбуль', 'Померанский шпиц', 'Помски', 'Пражский крысарик', 'Пти-брабансон', 'Пудель', 'Ризеншнауцер', 'Родезийский риджбек', 'Ротвейлер', 'Русская гончая', 'Русская пегая гончая', 'Русская псовая борзая', 'Русский охотничий спаниель', 'Русский той-терьер', 'Русский черный терьер', 'Салюки', 'Самоедская собака', 'Сенбернар', 'Сиба-ину', 'Сибирский хаски', 'Скотч-терьер', 'Стаффордширский бультерьер', 'Тайский риджбек', 'Такса', 'Тибетский мастиф', 'Тоса-ину', 'Уиппет', 'Фараонова собака', 'Фокстерьер', 'Французский бульдог', 'Цвергпинчер', 'Цвергшнауцер', 'Чау-чау', 'Чихуахуа', 'Шарпей', 'Шелти', 'Ши-тцу', 'Шипперке', 'Шотландская овчарка (колли)', 'Энтлебухер зенненхунд', 'Эрдельтерьер', 'Эстонская гончая', 'Японский хин', 'Японский шпиц',
        ]

        if (this.breed.trim().length > 2) {
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
    },
  }
</script>

<style>
    .invalid {
        color: #f04124;
    }

    .form-group {
        margin-bottom: 2rem;
    }

    .form-group--error .form__label {
        color: #f04124;
    }

    .form__label {
        font-size: 0.8125rem;
        color: #4b6372;
        margin-bottom: 0.3125rem;
        margin-left: 0.875rem;
        display: block;
        font-family: "Lato", sans-serif;
    }

    .form-group--error input,
    .form-group--error textarea,
    .form-group--error input:focus,
    .form-group--error input:hover {
        border-color: #f79483;
    }

    .input-field input[type="text"],
    .input-field input[type="date"],
    .form__input {
        font-family: "Lato", sans-serif;
        font-size: 0.875rem;
        font-weight: 300;
        color: #374853;
        line-height: 2.375rem;
        min-height: 2.375rem;
        position: relative;
        border: 1px solid #E8E8E8;
        border-radius: 5px;
        background: #fff;
        padding: 0 0.8125rem;
        width: 100%;
        transition: border .1s ease;
        box-sizing: border-box;
    }

    .wobble-error {
        animation: wobble-error 0.8s both;
    }

    @keyframes wobble-error {
        0%,
        100% {
            transform: translateX(0%);
            transform-origin: 50% 50%;
        }
        15% {
            transform: translateX(-15px);
        }
        30% {
            transform: translateX(7.7px);
        }
        45% {
            transform: translateX(-7.5px);
        }
        60% {
            transform: translateX(4.5px);
        }
        75% {
            transform: translateX(-3px);
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
        width: 350px;
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

</style>
