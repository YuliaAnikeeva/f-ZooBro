<template>
        <form @submit.prevent="submitHandler" class="form_contact form_small">
            {{showMap}}
            <div class="form-section">

                <div :class="{ 'field--error wobble-error': $v.user_name.$error }" class="form-group">
                    <label class="form-group__label">Ваше имя</label>
                    <div class="form-group__content">
                        <div class="input">
                            <input
                                    type="text"
                                    placeholder="Петя"
                                    v-model="user_name"
                                    class="input__control"
                            />
                        </div>
                    </div>
                    <div class="form-group__helper">
                        <div class="form-group__errors">
                            <div class="error" v-if="$v.user_name.$dirty && !$v.user_name.required">Введите ваше имя</div>
                        </div>
                    </div>
                </div>

                <div :class="{ 'field--error wobble-error': $v.email.$error }"  class="form-group">
                    <label class="form-group__label">E-mail</label>
                    <div class="form-group__content">
                        <div class="input">
                            <input
                                    type="text"
                                    placeholder="user@example.com"
                                    v-model="email"
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

                <div :class="{ 'field--error wobble-error': $v.phone.$error }" class="form-group">
                    <label class="form-group__label">Телефон</label>
                    <div class="form-group__content">
                        <div class="input">
                            <the-mask
                                    type="tel"
                                    placeholder="+7 (000) 000-00-00"
                                    v-model.trim.number="phone"
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

                <div :class="{ 'field--error wobble-error': $v.address.$error }"  class="form-group form-group_with_link">
                    <label class="form-group__label">Адрес доставки</label>
                    <div class="form-group__content">
                        <div class="input input_type_address">
                            <input
                                    type="text"
                                    placeholder="г. Москва ул. Ленина 35 кв.10"
                                    v-model="address"
                                    class="input__control"
                            />
                        </div>
                    </div>
                    <div class="form-group__helper">
                        <div class="form-group__errors">
                            <div class="error" v-if="$v.address.$dirty && !$v.address.required">Введите адрес</div>
                        </div>
                        <a class="form-group__link" href="#" @click="showMap = true">Зоны доставки</a>
                    </div>
                </div>

                <div :class="{ 'field--error wobble-error': ($v.date_delivery.$error || $v.time_delivery.$error) }"  class="form-group">
                    <label class="form-group__label">Желаемые дата и время доставки</label>
                    <div class="form-group__content">
                        <div class="input-group">
                            <div class="input input_type_date">
                                <input type="date" class="input__control input__control_type_datetime"
                                       v-model="date_delivery">
                            </div>
                            <div class="input input_type_time">
                                <input type="time" class="input__control input__control_type_datetime"
                                       v-model="time_delivery">
                            </div>
                        </div>
                    </div>
                    <div class="form-group__helper">
                        <div class="form-group__errors">
                            <div class="error" v-if="$v.date_delivery.$dirty && !$v.date_delivery.required">Введите желаемую дату доставки</div>
                            <div class="error" v-if="$v.time_delivery.$dirty && !$v.time_delivery.required">Введите желаемое время доставки</div>
                        </div>
                    </div>
                </div>

            </div>

            <vue-modaltor
                    :visible="showMap"
                    :resize-width='{1920:"940px",940:"90%"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="showMap = false">
                <YandexMap :updateAddress="updateAddress"/>
            </vue-modaltor>

        </form>
</template>

<script>
  import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
  import YandexMap from '../../YandexMap'

  export default {
    name: 'Step3',
    components: { YandexMap },
    props: ['order'],
    validations () {
      return {
        user_name: {
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
        date_delivery: {
          required,
        },
        time_delivery: {
          required,
        }
      }
    },
    data: () => ({
      showMap: false,
      address: null,
    }),
    computed: {
      ...(() => {
        let o = {}
        let f = ["user_name", "email", "phone", "date_delivery", "time_delivery"]
        f.forEach( n => o[[n]] = {
          get () {
            return this.order[n]
          },
          set (val) {
            this.$emit('update:order', { ...this.order, [n]: val })
          }
        })
        return o
      })(),
    },
    methods:{
      updateAddress(address){
        console.log('address', address)
        this.address = address
        this.showMap = false
      },
    },
  }
</script>

<style lang="scss" scoped>
    @import "@/assets/styles/_forms.scss";

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
        &:first-child {

        }
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
</style>
