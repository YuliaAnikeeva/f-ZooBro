<template>
    <div class="abs">
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
                                <div class="error" v-if="$v.email.$dirty && !$v.email.email">Введите корректный email
                                </div>
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
                                <div class="error" v-if="$v.phone.$dirty && !$v.phone.minLength">Введите корректный
                                    номер телефона
                                </div>
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
                                    <input type="date" class="input__control input__control_type_datetime"
                                           v-model="$v.date.$model">
                                </div>
                                <div class="input input_type_time">
                                    <input type="time" class="input__control input__control_type_datetime"
                                           v-model="$v.time.$model">
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
</template>

<script>
  import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'

  export default {
    name: 'Step3',
    validations () {

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

