<template>
    <div class="container onboarding">
        <template v-if="step !== 'step-4'">
            <h1 class="title onboarding__title">Оформление заказа</h1>

            <!--<div class="order-info" :class="{ 'order-info_invisible': step == 'step-1' }">-->
                <!--<div class="order-info__box">-->
                    <!--<img src="@/assets/box.png" alt="">-->
                <!--</div>-->
                <!--<div class="order-info__pricing-plan">-->
                    <!--{{ selectedPricingPlan.title }}-->
                <!--</div>-->
                <!--<div class="order-info__cost">-->
                    <!--<div class="order-info__cost-value">{{selectedPricingPlan.cost}}</div>-->
                    <!--<div class="order-info__cost-currency">-->
                        <!--<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">-->
                            <!--<path d="M1.22708 15.1361H4.09076V17.591C4.09076 17.7104 4.12898 17.8082 4.20586 17.8846C4.28254 17.9615 4.38056 18 4.49997 18H6.6348C6.74559 18 6.84146 17.9615 6.92244 17.8846C7.00342 17.8082 7.04379 17.7104 7.04379 17.591V15.1361H13.4997C13.6189 15.1361 13.717 15.0981 13.7938 15.0212C13.8707 14.9444 13.9089 14.8465 13.9089 14.7271V13.0906C13.9089 12.9719 13.8707 12.8734 13.7938 12.797C13.7172 12.7201 13.6189 12.6816 13.4997 12.6816H7.04358V11.173H11.3902C13.0946 11.173 14.4857 10.6537 15.5642 9.61345C16.6422 8.57434 17.1814 7.23205 17.1814 5.58651C17.1814 3.94208 16.6422 2.59975 15.5642 1.55958C14.486 0.520423 13.0946 0 11.3902 0H4.49975C4.38031 0 4.2825 0.0384257 4.20565 0.114889C4.12898 0.191776 4.09055 0.290222 4.09055 0.408992V8.45038H1.22708C1.10767 8.45038 1.00982 8.49078 0.932972 8.57172C0.856332 8.6527 0.817871 8.74857 0.817871 8.85933V10.764C0.817871 10.8834 0.856085 10.9813 0.932972 11.0581C1.00986 11.135 1.10746 11.173 1.22708 11.173H4.09076V12.6816H1.22708C1.10767 12.6816 1.00982 12.72 0.932972 12.797C0.856332 12.8734 0.817871 12.9717 0.817871 13.0906V14.727C0.817871 14.8465 0.856085 14.9443 0.932972 15.0212C1.00982 15.0981 1.10763 15.1361 1.22708 15.1361ZM7.04358 2.72329H11.1345C12.0378 2.72329 12.7664 2.9874 13.3205 3.5158C13.8744 4.04423 14.1515 4.7348 14.1515 5.58673C14.1515 6.43908 13.8744 7.12986 13.3205 7.65766C12.7664 8.18651 12.0378 8.45063 11.1345 8.45063H7.04358V2.72329Z" fill="#464451"/>-->
                        <!--</svg>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <ProgresBar v-model="step" :info="progresbarOrderInfo" />
        </template>

        <!--<p>-->
        <!--<span>{{step}}</span> из <span>{{steps.length}}</span>-->
        <!--</p>-->

        <!--<div>-->
        <!--<button @click="()=>updateE(-1)"> -</button>-->
        <!--<button @click="()=>updateE(1)"> +</button>-->
        <!--</div>-->

        <!--<div>-->
        <!--<br>-->
        <!--<label>-->
        <!--<input type="checkbox" v-model="enableValidation">-->
        <!--Validation: {{ enableValidation }}-->
        <!--</label>-->
        <!--<br>-->
        <!--<br>-->
        <!--</div>-->

        <div class="transition-box">
            <div :class="{ abs: step !== 'step-1' }">
                <transition name="translate">
                    <div v-if="step === 'step-1'">
                        <Step1 ref="form" :order.sync="order"/>
                    </div>
                </transition>
            </div>

            <div :class="{ abs: step !== 'step-2' }">
                <transition name="translate">
                    <div v-if="step === 'step-2'">
                        <Step2 ref="form" :order.sync="order"/>
                    </div>
                </transition>
            </div>

            <div :class="{ abs: step !== 'step-3' }">
                <transition name="translate">
                    <div v-if="step === 'step-3'">

                        <template v-if="loading">
                            <div class="overlay">
                                <Loader/>
                            </div>
                        </template>
                        <Step3 ref="form" :order.sync="order"/>
                    </div>
                </transition>
            </div>

            <div :class="{ abs: step !== 'step-4' }">
                <transition name="translate">
                    <div v-if="step === 'step-4'">
                        <SuccessOrder :order="order" :isUserLoggedIn="isUserLoggedIn" @new="resetOrderHandler" />
                    </div>
                </transition>
            </div>
        </div>

        <div  v-if="step !== 'step-4'" class="onboarding-buttons">

            <div v-if="step === 'step-1'"></div>
            <button v-else class="onboarding-button onboarding-button_secondary" @click="()=>updateE(-1)" :disabled="loading">
                <div class="onboarding-button__inner">
                    <span class="onboarding-button__label">Назад</span>
                </div>
            </button>

            <button class="onboarding-button" @click="submitHandler" :disabled="loading">
                <div class="onboarding-button__inner">
                    <span class="onboarding-button__label">{{ step=='step-3' ? 'Оформить' : 'Вперед' }}</span>
                    <svg class="onboarding-button__icon" v-bind:class="{hide_paw: step === 'step-3'}" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill:currentColor;height:1em">
                        <path d="M15.8942 3.56857C16.7585 1.10565 19.1353 -0.40999 21.224 0.158375C23.2407 0.726741 24.177 3.18966 23.3127 5.58943C22.4484 8.05235 20.0716 9.56799 17.9829 8.99962C15.9662 8.49441 15.0299 6.03149 15.8942 3.56857Z"/>
                        <path d="M27.8504 6.53479C25.9778 6.02958 23.817 7.48207 22.9527 9.81868C22.0884 12.1553 22.8807 14.4919 24.7533 14.9971C26.626 15.5023 28.7867 14.0499 29.651 11.7132C30.5153 9.37662 29.7231 7.04001 27.8504 6.53479Z"/>
                        <path d="M12.0768 9.18785C14.0214 8.68263 14.8137 6.21971 13.8774 3.69364C12.9411 1.16757 10.5642 -0.411225 8.61957 0.0939891C6.6749 0.662355 5.88263 3.12527 6.81895 5.58819C7.8273 8.11427 10.1321 9.75621 12.0768 9.18785Z"/>
                        <path d="M7.10742 9.81977C6.17109 7.42 3.93832 5.90436 2.06568 6.40957C0.193029 6.91479 -0.527219 9.2514 0.409104 11.588C1.34543 13.9878 3.5782 15.5034 5.45084 14.9982C7.32349 14.493 8.04374 12.1564 7.10742 9.81977Z"/>
                        <path d="M15.174 9.75586H14.7418C14.7418 9.75586 6.81909 10.8926 6.89111 18.9129C6.89111 23.5861 11.2846 21.5652 11.2846 21.5652C11.2846 21.5652 13.1573 19.9233 14.7418 19.9233L15.174 19.8601C16.7585 19.8601 18.6312 21.5021 18.6312 21.5021C18.6312 21.5021 23.0967 23.5861 23.0247 18.8497C23.0967 10.8926 15.174 9.75586 15.174 9.75586Z"/>
                    </svg>

                </div>
            </button>
        </div>

        <div class="terms" v-if="step == 'step-3'">
            Оформляя заказ, Вы соглашаетесь на обработку персональных данных
        </div>

    </div>
</template>

<script>
  import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
  import ProgresBar from '../components/onboarding/ProgresBar'
  import Step1 from '../components/onboarding/orderSteps/Step1'
  import Step2 from '../components/onboarding/orderSteps/Step2'
  import Step3 from '../components/onboarding/orderSteps/Step3'
  import SuccessOrder from '../components/onboarding/orderSteps/SuccessOrder'
  import Loader from '../components/Loader'

  export default {
    name: 'Order',
    props: {
      pet_id: {
        type: Number,
      }
    },
    components: {
      Step1,
      Step2,
      Step3,
      SuccessOrder,
      ProgresBar,
      Loader,
    },
    metaInfo: {
      title: 'Order',
    },
    data: () => ({
      step: 'step-1',
      steps: ['step-1', 'step-2', 'step-3', 'step-4'],
      order: {},
      loading: false,
      enableValidation: true,
    }),
    computed: {
        selectedPricingPlan () {
            return {
                '1': {
                    title: 'Разовая покупка',
                    cost: 1500
                },
                '2': {
                    title: 'Подписка на 6 месяцев',
                    cost: 7800
                },
                '3': {
                    title: 'Подписка на 3 месяца',
                    cost: 4200
                }
            }[this.order.price_id] || {}
        },
        progresbarOrderInfo () {
            return [
                this.order.price_id && `${this.selectedPricingPlan.title}, ${this.selectedPricingPlan.cost} руб`,
                this.order.pet_name
            ]
        },
        isUserLoggedIn () {
            return this.$store.getters["isUserLoggedIn"];
        },
    },
    methods: {
      resetOrderHandler() {
        this.order = {}
        this.step = this.steps[0]
      },
      onClick (e) {
        this.coords = e.get('coords')
      },
      updateE (val = 1) {
        const idx = this.steps.indexOf(this.step)
        const len = this.steps.length
        if (idx !== -1 && idx + val <= len - 1 && idx + val >= 0) {
          this.step = this.steps[idx + val]
        }
      },
      submitHandler () {
        if (this.loading) return
        const v = this.$refs.form && this.$refs.form.$v
        if (this.enableValidation && v) {
          v.$touch()
          if (v.$invalid) {
            return
          }
        }
        if (this.step === 'step-3') {
          this.loading = true
          this.$store.dispatch('order/createOrder', this.order)
            .then(resp => {
              this.loading = false
              if (resp) {
                this.order = {
                  ...this.order,
                  id: resp.id
                }
                this.updateE(1)
              }
            })
        } else {
          this.updateE(1)
        }
      },
    },
    async mounted () {
      const isUserLoggedIn = this.$store.getters['isUserLoggedIn']

      if (isUserLoggedIn) {
        await this.$store.dispatch("user/fetchUserInfo")
        await this.$store.dispatch("pet/fetchPet")
        const  user = await this.$store.getters['user/userInfo']
        const {name, email, phone, address} = user
        this.order['user_name'] = name
        this.order['email'] = email
        this.order['phone'] = phone
        this.order['address'] = address
      }

    }
  }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');

    button {
        outline-color: transparent;
    }

    .overlay {
        position: absolute;
        background-color: rgba(255, 255, 255, 0.7);
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 555;
    }

    .onboarding {
        padding: 0 12px;

        &-buttons {
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            max-width: 690px;
            margin: 0 auto;
            margin-top: 30px;
            margin-bottom: 50px;
        }

        &-button {
            font-family: Montserrat, sans-serif;
            position: relative;
            width: 100%;
            max-width: 230px;
            padding: 15px;
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
                color: #2289B5;
                background-color: #fff;
                border: 1px solid #2289B5;
                box-sizing: border-box;
                border-radius: 10px;
                box-shadow: none;

                &:hover {
                    background-color: lighten(#2289B5, 50);
                    box-shadow: none;
                }

                &:active {
                    background-color: lighten(#2289B5, 40);
                    box-shadow: none;
                }
            }

            &__inner {
                position: relative;
                display: inline-flex;
                align-items: center;
            }

            &__icon {
                position: absolute;
                left: 100%;
                margin-left: 17px;
                font-size: 22px;
                color: #fff;
            }

            &:hover {
                box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
                cursor: pointer;
            }

            &:active {
                box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
            }

            &:active &__icon {
                color: #2289B5;
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
        max-width: 940px;
        margin: 0 auto;
    }

    .transition-box {
        position: relative;
        overflow: hidden;
        margin: 60px -12px 0;
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

    .title{
        padding: 85px 10px 50px 10px;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
    }

    .order-info {
        margin-bottom: 30px;
        display: flex;
        transition: opacity .3s linear;
        padding: 0 20px;
        align-items: center;
        justify-content: center;

        &_invisible {
            opacity: 0;
        }

        &__box {
            margin-right: 25px;
        }
        &__pricing-plan {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 22px;
            color: #464451;
            margin: 0 25px;
        }
        &__cost {
            font-size: 18px;
            display: flex;
            align-items: flex-end;
            line-height: 22px;

            &-value {
                display: inline;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                color: #464451;
            }
            &-currency {
                display: inline;
                margin-left: 5px;

                & svg {
                    display: block;
                    height: 1em;
                    width: 1em;
                }
            }
        }
    }

    .terms {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        margin-top: 80px;
        margin-bottom: 160px;
    }

@media (max-width: 1440px) {
    .transition-box {
      margin: 40px -12px 0;
    }
}

@media (max-width: 414px) {

    .hide_paw {
    display: none
    }

    .transition-box {
      margin: 25px -12px 0;
    }
    .onboarding {
        &-button {
            max-width: 180px;

            &__icon {
               margin-left: 9px;
            }
        }

        &__title {
            font-size: 22px;
            line-height: 27px;
            padding: 32px 0 10px;
        }
    }
}

@media (max-width: 375px) {
    .transition-box {
        margin: 25px -10px 0;
    }
    .onboarding {
        padding: 0 10px;

        &-button {
            max-width: 162px;

            &__icon {
                margin-left: 4px;
            }
        }
    }
}
</style>
