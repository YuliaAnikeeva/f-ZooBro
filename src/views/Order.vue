<template>
    <div class="container">
        <h1>Оформление заявки</h1>

        <ProgresBar v-model="step"/>

      <div class="container">
          <div class="buttons">
              <div class="buttons__prev"><span>Назад</span></div>
              <div class="buttons__next">
                <span>Вперед</span>
                <svg width="42" height="35" viewBox="0 0 42 35" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.8233 8.64617L31.8223 8.6497C31.2506 10.5076 30.1844 11.9879 28.9431 12.8927C27.7025 13.7971 26.3144 14.1121 25.0483 13.7192L25.0484 13.7191L25.0375 13.716C23.8391 13.3736 22.9129 12.3546 22.4241 10.9C21.936 9.44715 21.9054 7.60491 22.478 5.74379C23.0497 3.88587 24.1159 2.40563 25.3572 1.50078C26.597 0.596967 27.9841 0.281764 29.2495 0.673526C30.4579 1.0629 31.3873 2.11359 31.8762 3.56849C32.3647 5.02244 32.3942 6.83859 31.8233 8.64617Z" stroke="#C8A20F"/>
                  <path d="M32.2759 15.6536C32.849 13.8866 33.8452 12.4767 34.9791 11.6089C36.1134 10.7408 37.3481 10.4372 38.4532 10.7772C39.5489 11.1143 40.3793 12.077 40.7967 13.4566C41.2135 14.8345 41.1973 16.5795 40.6247 18.3451C40.0516 20.1121 39.0553 21.522 37.9214 22.3898C36.7871 23.2579 35.5524 23.5615 34.4473 23.2214C33.3516 22.8843 32.5212 21.9217 32.1038 20.542C31.687 19.1642 31.7032 17.4192 32.2759 15.6536Z" stroke="#C8A20F"/>
                  <path d="M16.5581 14.0187L16.5501 14.021L16.5421 14.0237C15.4034 14.4032 14.1021 14.0651 12.8727 13.0933C11.6468 12.1242 10.5473 10.5601 9.87334 8.63639C9.2521 6.77047 9.21236 4.92545 9.63094 3.46041C10.0494 1.99569 10.9059 0.960017 12.0503 0.575067C13.1981 0.238442 14.5306 0.585361 15.7692 1.54353C17.0066 2.50072 18.1023 4.03774 18.7247 5.95259C19.3488 7.873 19.3881 9.74548 18.9694 11.2107C18.5502 12.678 17.6946 13.6819 16.5581 14.0187Z" stroke="#C8A20F"/>
                  <path d="M9.32705 15.6609L9.32703 15.6609L9.3284 15.6648C9.94964 17.4329 10.0122 19.1778 9.63082 20.5529C9.24934 21.9285 8.4441 22.8854 7.35309 23.2211C6.25468 23.5591 4.99602 23.2379 3.81824 22.3283C2.6432 21.4208 1.59582 19.9571 0.973215 18.1372L0.973231 18.1372L0.971863 18.1333C0.35063 16.3652 0.288103 14.6203 0.66945 13.2451C1.05093 11.8695 1.85617 10.9126 2.94718 10.5769C4.04558 10.2389 5.30425 10.5602 6.48202 11.4698C7.65707 12.3772 8.70444 13.8409 9.32705 15.6609Z" stroke="#C8A20F"/>
                  <path d="M10.0002 29.8984L10.0002 29.8945C9.95153 23.7173 12.5904 20.2377 15.2112 18.287C16.5308 17.3049 17.8556 16.704 18.8509 16.3491C19.348 16.1718 19.761 16.0566 20.0473 15.9861C20.1904 15.9508 20.3017 15.9268 20.3758 15.9118C20.4043 15.9061 20.4273 15.9016 20.4445 15.8984H20.9559C20.9731 15.9016 20.9962 15.9061 21.0248 15.9118C21.0989 15.9268 21.2102 15.9508 21.3534 15.986C21.6398 16.0563 22.0529 16.1712 22.5501 16.3477C23.5457 16.7013 24.8707 17.2992 26.1903 18.2754C28.8114 20.2143 31.4488 23.6689 31.4002 29.7945L31.4001 29.7945L31.4002 29.8051C31.4245 31.6219 31.0644 32.6943 30.5914 33.316C30.1308 33.9211 29.5133 34.1638 28.8512 34.2123C28.1751 34.2617 27.4743 34.1045 26.9247 33.9223C26.6536 33.8324 26.4275 33.7392 26.2702 33.669C26.1941 33.6351 26.1346 33.6067 26.0944 33.5869C26.076 33.5692 26.0535 33.5478 26.0272 33.523C25.9479 33.4482 25.8333 33.3425 25.6891 33.2162C25.4014 32.964 24.9934 32.6272 24.5127 32.2893C23.5763 31.6314 22.2659 30.8984 21.0002 30.8984H20.9588L20.918 30.9052L20.3571 30.9987C19.1048 31.015 17.8135 31.7388 16.8877 32.3893C16.407 32.7272 15.999 33.064 15.7113 33.3162C15.5671 33.4425 15.4525 33.5482 15.3732 33.6229C15.3474 33.6472 15.3254 33.6682 15.3073 33.6857C15.2679 33.7047 15.2105 33.7315 15.1375 33.7635C14.983 33.8311 14.7606 33.9209 14.4936 34.0069C13.9526 34.1814 13.2613 34.33 12.591 34.2751C11.9344 34.2213 11.316 33.9758 10.8491 33.371C10.3705 32.7512 10.0002 31.689 10.0002 29.8984Z" stroke="#C8A20F"/>
                </svg>
              </div>
            </div>
      </div>

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
                      <FirstLook/>
                    </div>
                </div>
            </transition>

            <transition name="translate">
              <div class="abs" v-if="step === 'step-2'">
                <div class="container">
                  <form @submit.prevent="submitHandler" class="form_small">
                    <div class="form-section">
                      <div class="form-group">
                        <label class="form-group__label">Имя питомца</label>
                        <div class="form-group__content">
                          <div class="input">
                            <input type="text" class="input__control" v-model="$v.dogName.$model" />
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors">
                            <div class="error" v-if="$v.dogName.$dirty && !$v.dogName.required">обязательное поле</div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-group__label">Порода</label>
                        <div class="form-group__content">
                          <div class="input">
                            <input type="text" class="input__control" v-model="breed" />
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
                            <input type="date" class="input__control input__control_type_datetime" v-model="dateOfBirth">
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors"></div>
                        </div>
                      </div>
                    </div>
                    <div class="form-section">
                      <div class="form-group">
                        <label class="form-group__label">Пол питомца</label>
                        <div class="form-group__content">
                          <div class="radio-group">
                            <div class="radio-group__list">
                              <label class="radio">
                                <input type="radio" class="radio__control" value="m" v-model="dogGender" />
                                <span class="radio__button">M</span>
                              </label>
                              <label class="radio">
                                <input type="radio" class="radio__control" value="w" v-model="dogGender" />
                                <span class="radio__button">Ж</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors"></div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-group__label">Размер питомца</label>
                        <div class="form-group__content">
                          <div class="radio-group">
                            <div class="radio-group__list radio-group__list_with-images">
                              <label class="radio">
                                <input type="radio" class="radio__control" value="1" v-model="weight" />
                                <img class="radio__image" src="../assets/small-dog.png" alt="">
                                <span class="radio__button">маленький</span>
                              </label>
                              <label class="radio">
                                <input type="radio" class="radio__control" value="2" v-model="weight" />
                                <img class="radio__image" src="../assets/medium-dog.png" alt="">
                                <span class="radio__button">средний</span>
                              </label>
                              <label class="radio">
                                <input type="radio" class="radio__control" value="3" v-model="weight" />
                                <img class="radio__image" src="../assets/large-dog.png" alt="">
                                <span class="radio__button">большой</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors"></div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-group__label">Аллергия</label>
                        <div class="form-group__content">
                          <div class="radio-group">
                            <div class="radio-group__list radio-group__list_with-images">
                              <label class="radio">
                                <input type="radio" class="radio__control" :value="true" v-model="hasAllergy" />
                                <span class="radio__button">Да</span>
                              </label>
                              <label class="radio">
                                <input type="radio" class="radio__control" :value="false" v-model="hasAllergy" />
                                <span class="radio__button">Нет</span>
                              </label>
                            </div>
                          </div>
                          <textarea
                              v-if="hasAllergy"
                              rows="2"
                              class="textarea"
                              v-model="allergies"
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
                </div>
              </div>
            </transition>

            <transition name="translate">
              <div class="abs" v-if="step === 'step-3'">
                <div class="container">
                  <form @submit.prevent="submitHandler" class="form_small">
                    <div class="form-section">
                      <div class="form-group">
                        <label class="form-group__label">Ваше имя</label>
                        <div class="form-group__content">
                          <div class="input">
                            <input
                                type="text"
                                placeholder="Петя"
                                v-model="$v.name.$model"
                                class="input__control"
                              />
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors">
                            <div class="error" v-if="$v.name.$dirty && !$v.name.required">Введите ваше имя</div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-group__label">E-mail</label>
                        <div class="form-group__content">
                          <div class="input">
                            <input
                                type="text"
                                placeholder="user@example.com"
                                v-model="$v.email.$model"
                                class="input__control"
                              />
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors">
                            <div class="error" v-if="$v.email.$dirty && !$v.email.required">Введите email</div>
                            <div class="error" v-if="$v.email.$dirty && !$v.email.email">Введите корректный email</div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-group__label">Телефон</label>
                        <div class="form-group__content">
                          <div class="input">
                            <the-mask
                                type="tel"
                                placeholder="+7 (000) 000-00-00"
                                v-model.trim="$v.phone.$model"
                                mask="+7 (###) ###-##-##"
                                class="input__control"
                              />
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors">
                            <div class="error" v-if="$v.phone.$dirty && !$v.phone.required">Введите телефон</div>
                            <div class="error" v-if="$v.phone.$dirty && !$v.phone.minLength">Введите корректный номер телефона</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-section">
                      <div class="form-group form-group_with_link">
                        <label class="form-group__label">Адрес доставки</label>
                        <div class="form-group__content">
                          <div class="input input_type_address">
                            <input
                                type="text"
                                placeholder="г. Москва ул. Ленина 35 кв.10"
                                v-model="$v.address.$model"
                                class="input__control"
                              />
                          </div>
                        </div>
                        <div class="form-group__helper">
                        <div class="form-group__errors">
                          <div class="error" v-if="$v.address.$dirty && !$v.address.required">Введите адрес</div>
                        </div>
                        <a class="form-group__link" href="#" @click="showMap = !showMap">Зоны доставки</a>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="form-group__label">Желаемые дата и время доставки</label>
                        <div class="form-group__content">
                          <div class="input-group">
                            <div class="input input_type_date">
                              <input type="date" class="input__control input__control_type_datetime" v-model="$v.date.$model">
                            </div>
                            <div class="input input_type_time">
                              <input type="time" class="input__control input__control_type_datetime" v-model="$v.time.$model">
                            </div>
                          </div>
                        </div>
                        <div class="form-group__helper">
                          <div class="form-group__errors">
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div v-if="showMap">
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
                <div class="abs" v-if="step === 'step-4'">
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
  import FirstLook from '../components/onboarding/FirstLook'
  import ProgresBar from '../components/onboarding/ProgresBar'

  export default {
    name: 'Order',
    components: { ProgresBar, FirstLook },
    metaInfo: {
      title: 'Order',
    },
    validations () {
      if (this.step === 'step-2') {
        return {
          dogName: {
            required,
            minLength: minLength(3),
          },
          dogGender: {
            required,
          },
          weight: {
            required,
          },
        }
      } else if (this.step === 'step-3') {
        return {
          name: {
            required,
          },
          email: {
            required,
            email,
          },
          phone: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(10),
          },
          address: {
            required,
          },
          date: {
            required,
          },
          time: {
            required,
          }
        }
      } else {
        return {}
      }

    },
    data: () => ({
      dogName: '',
      dogGender: '',
      breed: '',
      weight: '',
      dateOfBirth: '',
      age: '',
      hasAllergy: false,
      allergies: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      date: '',
      time: '',
      plan: '',
      showMap: false,

      step: 'step-1',
      steps: ['step-1', 'step-2', 'step-3', 'step-4'],
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

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

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
      font-style: normal;
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
      box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
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
