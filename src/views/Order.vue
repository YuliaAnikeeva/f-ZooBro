<template>
    <div class="container container_onboarding">
        <template v-if="step !== 'step-4'">
            <h1 class="title onboarding__title">Оформление заказа</h1>

            <div class="order-info" :class="{ 'order-info_invisible': step == 'step-1' }">
                <div class="order-info__box">
                    <img src="@/assets/box.png" alt="">
                </div>
                <div class="order-info__pricing-plan">
                    {{ selectedPricingPlan.title }}
                </div>
                <div class="order-info__cost">
                    <div class="order-info__cost-value">{{selectedPricingPlan.cost}}</div>
                    <div class="order-info__cost-currency">
                        <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.22708 15.1361H4.09076V17.591C4.09076 17.7104 4.12898 17.8082 4.20586 17.8846C4.28254 17.9615 4.38056 18 4.49997 18H6.6348C6.74559 18 6.84146 17.9615 6.92244 17.8846C7.00342 17.8082 7.04379 17.7104 7.04379 17.591V15.1361H13.4997C13.6189 15.1361 13.717 15.0981 13.7938 15.0212C13.8707 14.9444 13.9089 14.8465 13.9089 14.7271V13.0906C13.9089 12.9719 13.8707 12.8734 13.7938 12.797C13.7172 12.7201 13.6189 12.6816 13.4997 12.6816H7.04358V11.173H11.3902C13.0946 11.173 14.4857 10.6537 15.5642 9.61345C16.6422 8.57434 17.1814 7.23205 17.1814 5.58651C17.1814 3.94208 16.6422 2.59975 15.5642 1.55958C14.486 0.520423 13.0946 0 11.3902 0H4.49975C4.38031 0 4.2825 0.0384257 4.20565 0.114889C4.12898 0.191776 4.09055 0.290222 4.09055 0.408992V8.45038H1.22708C1.10767 8.45038 1.00982 8.49078 0.932972 8.57172C0.856332 8.6527 0.817871 8.74857 0.817871 8.85933V10.764C0.817871 10.8834 0.856085 10.9813 0.932972 11.0581C1.00986 11.135 1.10746 11.173 1.22708 11.173H4.09076V12.6816H1.22708C1.10767 12.6816 1.00982 12.72 0.932972 12.797C0.856332 12.8734 0.817871 12.9717 0.817871 13.0906V14.727C0.817871 14.8465 0.856085 14.9443 0.932972 15.0212C1.00982 15.0981 1.10763 15.1361 1.22708 15.1361ZM7.04358 2.72329H11.1345C12.0378 2.72329 12.7664 2.9874 13.3205 3.5158C13.8744 4.04423 14.1515 4.7348 14.1515 5.58673C14.1515 6.43908 13.8744 7.12986 13.3205 7.65766C12.7664 8.18651 12.0378 8.45063 11.1345 8.45063H7.04358V2.72329Z" fill="#464451"/>
                        </svg>
                    </div>
                </div>
            </div>
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
                    <svg class="onboarding-button__icon" viewBox="0 0 42 35" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.8233 8.64617L31.8223 8.6497C31.2506 10.5076 30.1844 11.9879 28.9431 12.8927C27.7025 13.7971 26.3144 14.1121 25.0483 13.7192L25.0484 13.7191L25.0375 13.716C23.8391 13.3736 22.9129 12.3546 22.4241 10.9C21.936 9.44715 21.9054 7.60491 22.478 5.74379C23.0497 3.88587 24.1159 2.40563 25.3572 1.50078C26.597 0.596967 27.9841 0.281764 29.2495 0.673526C30.4579 1.0629 31.3873 2.11359 31.8762 3.56849C32.3647 5.02244 32.3942 6.83859 31.8233 8.64617Z"/>
                        <path d="M32.2759 15.6536C32.849 13.8866 33.8452 12.4767 34.9791 11.6089C36.1134 10.7408 37.3481 10.4372 38.4532 10.7772C39.5489 11.1143 40.3793 12.077 40.7967 13.4566C41.2135 14.8345 41.1973 16.5795 40.6247 18.3451C40.0516 20.1121 39.0553 21.522 37.9214 22.3898C36.7871 23.2579 35.5524 23.5615 34.4473 23.2214C33.3516 22.8843 32.5212 21.9217 32.1038 20.542C31.687 19.1642 31.7032 17.4192 32.2759 15.6536Z"/>
                        <path d="M16.5581 14.0187L16.5501 14.021L16.5421 14.0237C15.4034 14.4032 14.1021 14.0651 12.8727 13.0933C11.6468 12.1242 10.5473 10.5601 9.87334 8.63639C9.2521 6.77047 9.21236 4.92545 9.63094 3.46041C10.0494 1.99569 10.9059 0.960017 12.0503 0.575067C13.1981 0.238442 14.5306 0.585361 15.7692 1.54353C17.0066 2.50072 18.1023 4.03774 18.7247 5.95259C19.3488 7.873 19.3881 9.74548 18.9694 11.2107C18.5502 12.678 17.6946 13.6819 16.5581 14.0187Z"/>
                        <path d="M9.32705 15.6609L9.32703 15.6609L9.3284 15.6648C9.94964 17.4329 10.0122 19.1778 9.63082 20.5529C9.24934 21.9285 8.4441 22.8854 7.35309 23.2211C6.25468 23.5591 4.99602 23.2379 3.81824 22.3283C2.6432 21.4208 1.59582 19.9571 0.973215 18.1372L0.973231 18.1372L0.971863 18.1333C0.35063 16.3652 0.288103 14.6203 0.66945 13.2451C1.05093 11.8695 1.85617 10.9126 2.94718 10.5769C4.04558 10.2389 5.30425 10.5602 6.48202 11.4698C7.65707 12.3772 8.70444 13.8409 9.32705 15.6609Z"/>
                        <path d="M10.0002 29.8984L10.0002 29.8945C9.95153 23.7173 12.5904 20.2377 15.2112 18.287C16.5308 17.3049 17.8556 16.704 18.8509 16.3491C19.348 16.1718 19.761 16.0566 20.0473 15.9861C20.1904 15.9508 20.3017 15.9268 20.3758 15.9118C20.4043 15.9061 20.4273 15.9016 20.4445 15.8984H20.9559C20.9731 15.9016 20.9962 15.9061 21.0248 15.9118C21.0989 15.9268 21.2102 15.9508 21.3534 15.986C21.6398 16.0563 22.0529 16.1712 22.5501 16.3477C23.5457 16.7013 24.8707 17.2992 26.1903 18.2754C28.8114 20.2143 31.4488 23.6689 31.4002 29.7945L31.4001 29.7945L31.4002 29.8051C31.4245 31.6219 31.0644 32.6943 30.5914 33.316C30.1308 33.9211 29.5133 34.1638 28.8512 34.2123C28.1751 34.2617 27.4743 34.1045 26.9247 33.9223C26.6536 33.8324 26.4275 33.7392 26.2702 33.669C26.1941 33.6351 26.1346 33.6067 26.0944 33.5869C26.076 33.5692 26.0535 33.5478 26.0272 33.523C25.9479 33.4482 25.8333 33.3425 25.6891 33.2162C25.4014 32.964 24.9934 32.6272 24.5127 32.2893C23.5763 31.6314 22.2659 30.8984 21.0002 30.8984H20.9588L20.918 30.9052L20.3571 30.9987C19.1048 31.015 17.8135 31.7388 16.8877 32.3893C16.407 32.7272 15.999 33.064 15.7113 33.3162C15.5671 33.4425 15.4525 33.5482 15.3732 33.6229C15.3474 33.6472 15.3254 33.6682 15.3073 33.6857C15.2679 33.7047 15.2105 33.7315 15.1375 33.7635C14.983 33.8311 14.7606 33.9209 14.4936 34.0069C13.9526 34.1814 13.2613 34.33 12.591 34.2751C11.9344 34.2213 11.316 33.9758 10.8491 33.371C10.3705 32.7512 10.0002 31.689 10.0002 29.8984Z"/>
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
        }
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
                display: inline-block;
            }

            &__icon {
                position: absolute;
                left: 100%;
                fill: #fff;
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
</style>
