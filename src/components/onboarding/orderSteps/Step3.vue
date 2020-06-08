<template>
        <form @submit.prevent="submitHandler" class="form_contact form_small">
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
                                    @click="showMap = true"
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
                                <!-- <input type="date" class="input__control input__control_type_datetime"
                                       v-model="date_delivery"> -->

                                       <date-picker v-model="date_delivery" valueType="format" format="DD.MM.YYYY" class="date-picker" placeholder="ДД.ММ.ГГГГ" :disabled-date="notBeforeToday" :lang="lang"></date-picker>
                            </div>
                            <div class="input input_type_date">
                                <date-picker v-model="time_delivery" valueType="format" class="date-picker-time" format="HH:mm" value-type="format" placeholder="ЧЧ.ММ"  :minute-step="30" type="time"  :disabled-time="notBeforeTime" :default-value="new Date().setHours(9, 0, 0)"></date-picker>
                            </div>
                            </div>
                            <!-- <div class="input input_type_time">
                                <input type="time" class="input__control input__control_type_datetime"
                                       v-model="time_delivery">
                            </div> -->
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
  import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
  import YandexMap from '../../YandexMap'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  import 'vue2-datepicker/locale/ru';

  const today = new Date();
  const tomorrow = new Date();
today.setHours(0, 0, 0, 0);

  export default {
    name: 'Step3',
    components: { YandexMap, DatePicker },
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
        let f = ["user_name", "email", "phone", "date_delivery", "time_delivery", "address"]
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
      notBeforeToday(date_delivery) {
      return date_delivery < tomorrow;

    },
    notBeforeTime(time_delivery) {
      return time_delivery.getHours() < 9;
    },
    },
  }
</script>
<style lang="scss" scoped>
    @import "@/assets/styles/_forms.scss";

    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 12px;
        color: #464451;
    }

    .form_small {
        max-width: 690px;
        margin: 0 auto;
    }

    .form_contact {
        .form-group__helper {
            height: 40px;
        }
    }

    .form-section {
        display: flex;
        flex-direction: column;
        flex: 1 0;
        margin-left: 55px;
        &:first-child {
            margin-left: 0;
        }
    }
    .date-picker-time{
        max-width: 125px;
        margin-left: 30px;
    }
    .date-picker{
        max-width: 170px;
    }

@media (max-width: 414px) {
    form {
      flex-direction: column;
    }

    @media (max-width: 414px) {
        .form_contact {
            display: flex;
            flex-direction: column;
            margin: 20px;
        }

        .form-section {
        margin: 0;
        }

        .form-group__content {
            width: 315px;
        }
    }

    .form-section {
        margin: 0;
        padding-right: 65px;
    }
}

</style>
