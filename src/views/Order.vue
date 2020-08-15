<template>
    <div class="container onboarding">
        <template v-if="!isSuccessStep">
            <h1 class="title onboarding__title">Оформление заказа</h1>
            <ProgresBar v-if="!fast" :currentStepIndex="currentStepIndex" :steps="steps" @select="goto" />
        </template>

        <div class="transition-box">
            <transition name="translate">
                <SuccessOrder v-if="isSuccessStep" :order="order" :isUserLoggedIn="isUserLoggedIn" @new="resetOrderHandler" />
                <component v-else :is="currentStep.component" ref="form" :order.sync="order" />
            </transition>
            <template v-if="loading">
                <div class="overlay">
                    <Loader/>
                </div>
            </template>
        </div>

        <div  v-if="!isSuccessStep" class="onboarding-buttons">

            <div v-if="isFirstStep"></div>
            <button v-else class="onboarding-button onboarding-button_secondary" @click="()=>updateE(-1)" :disabled="loading">
                <div class="onboarding-button__inner">
                    <span class="onboarding-button__label">Назад</span>
                </div>
            </button>

            <button class="onboarding-button" @click="submitHandler" :disabled="loading">
                <div class="onboarding-button__inner">
                    <span class="onboarding-button__label">{{ isLastStep ? 'Оформить' : 'Вперед' }}</span>
                    <svg class="onboarding-button__icon" v-bind:class="{hide_paw: isLastStep}" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg" style="fill:currentColor;height:1em">
                        <path d="M15.8942 3.56857C16.7585 1.10565 19.1353 -0.40999 21.224 0.158375C23.2407 0.726741 24.177 3.18966 23.3127 5.58943C22.4484 8.05235 20.0716 9.56799 17.9829 8.99962C15.9662 8.49441 15.0299 6.03149 15.8942 3.56857Z"/>
                        <path d="M27.8504 6.53479C25.9778 6.02958 23.817 7.48207 22.9527 9.81868C22.0884 12.1553 22.8807 14.4919 24.7533 14.9971C26.626 15.5023 28.7867 14.0499 29.651 11.7132C30.5153 9.37662 29.7231 7.04001 27.8504 6.53479Z"/>
                        <path d="M12.0768 9.18785C14.0214 8.68263 14.8137 6.21971 13.8774 3.69364C12.9411 1.16757 10.5642 -0.411225 8.61957 0.0939891C6.6749 0.662355 5.88263 3.12527 6.81895 5.58819C7.8273 8.11427 10.1321 9.75621 12.0768 9.18785Z"/>
                        <path d="M7.10742 9.81977C6.17109 7.42 3.93832 5.90436 2.06568 6.40957C0.193029 6.91479 -0.527219 9.2514 0.409104 11.588C1.34543 13.9878 3.5782 15.5034 5.45084 14.9982C7.32349 14.493 8.04374 12.1564 7.10742 9.81977Z"/>
                        <path d="M15.174 9.75586H14.7418C14.7418 9.75586 6.81909 10.8926 6.89111 18.9129C6.89111 23.5861 11.2846 21.5652 11.2846 21.5652C11.2846 21.5652 13.1573 19.9233 14.7418 19.9233L15.174 19.8601C16.7585 19.8601 18.6312 21.5021 18.6312 21.5021C18.6312 21.5021 23.0967 23.5861 23.0247 18.8497C23.0967 10.8926 15.174 9.75586 15.174 9.75586Z"/>
                    </svg>

                </div>
            </button>
        </div>

        <div class="terms" v-if="isLastStep">
            Оформляя заказ, Вы соглашаетесь на обработку персональных данных
        </div>

    </div>
</template>

<script>
  import { email, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
  import ProgresBar from '../components/onboarding/ProgresBar'
  import FastOrder from '../components/FastOrder'
  import Step1 from '../components/onboarding/orderSteps/Step1'
  import Step2 from '../components/onboarding/orderSteps/Step2'
  import Step3 from '../components/onboarding/orderSteps/Step3'
  import SuccessOrder from '../components/onboarding/orderSteps/SuccessOrder'
  import Loader from '../components/Loader'

  const stepsEntities = {
    'step-0': {
      id: 'step-0',
      label: 'Выбери свой размер',
      component: 'FastOrder',
    },
    'step-1': {
      id: 'step-1',
      label: 'Формат заказа',
      component: 'Step1',
    },
    'step-2': {
      id: 'step-2',
      label: 'Твои данные',
      component: 'Step2',
    },
    'step-3': {
      id: 'step-3',
      label: 'Данные твоего человека',
      component: 'Step3',
    },
    'step-4': {
      id: 'step-4',
      label: 'Результат',
      component: 'SuccessOrder',
      hidden: true,
    },
  }

  export default {
    name: 'Order',
    props: {
      pet_id: {
        type: Number,
      },
      fast: {
        type: Boolean,
        default: false,
      }
    },
    components: {
      Step1,
      Step2,
      Step3,
      FastOrder,
      SuccessOrder,
      ProgresBar,
      Loader,
    },
    metaInfo: {
      title: 'Order',
    },
    data: () => ({
      currentStepIndex: 0,
      inputtedOrder: {},
      loading: false,
      stepsValid: {}
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
        stepsInfo () {
          return {
            'step-1': this.order.price_id && `${this.selectedPricingPlan.title}, ${this.selectedPricingPlan.cost} руб`,
            'step-2': this.order.pet_name
          }
        },
        stepsIds () {
          return this.fast ? ['step-0', 'step-3', 'step-4'] : ['step-1', 'step-2', 'step-3', 'step-4']
        },
        steps () {
          return this.stepsIds.map( stepId => ({
            ...stepsEntities[stepId],
            valid: this.stepsValid[stepId],
            info: this.stepsInfo[stepId],
          }))
        },
        currentStep() {
          return this.steps[this.currentStepIndex]
        },
        isLastStep() {
          return this.currentStepIndex === this.steps.length - 2
        },
        isFirstStep() {
          return this.currentStepIndex <= 0
        },
        isSuccessStep() {
          return this.currentStepIndex === this.steps.length - 1
        },
        isUserLoggedIn () {
            return this.$store.getters["isUserLoggedIn"];
        },
        defaultOrder () {
            const pets = this.$store.getters['pet/petList']
            const {
              id: pet_id,
              name: pet_name,
              size,
              gender,
              breed,
              birthday_date,
              birthday_years,
              food_exceptions
            } = pets.filter( ({id}) => id === this.pet_id )[0] || {}

            const user = this.$store.getters['user/userInfo']
            const {
              name: user_name,
              address,
              email,
              phone,
            } = user
            const price_id = this.fast ? '1' : null
            return {
              price_id,
              pet_id, pet_name, size, gender, breed, birthday_date, birthday_years, food_exceptions,
              user_name, email, phone, address
            }
        },
        order: {
          get () {
            return {
              ...this.defaultOrder,
              ...this.inputtedOrder
            }
          },
          set (val) {
            this.inputtedOrder = val
          }
        }
    },
    methods: {
      async resetOrderHandler() {
        if (this.isUserLoggedIn) {
          await this.$store.dispatch("user/fetchUserInfo")
          await this.$store.dispatch("pet/fetchPet")
        }
        this.order = {}
        this.currentStepIndex = 0
      },
      updateE (val = 1) {
        this.currentStepIndex += val
      },
      validateCurrentStep () {
        const v = this.$refs.form && this.$refs.form.$v
        if (v) {
          v.$touch()
          if (v.$invalid) {
            this.stepsValid[this.currentStep.id] = false
            return false
          }
        }
        this.stepsValid[this.currentStep.id] = true
        return true
      },
      goto (idx) {
        this.validateCurrentStep()
        if (idx > this.currentStepIndex) {
          if (!this.stepsValid[this.stepsIds[idx-1]]) {
            this.goto(idx-1)
            return
          }
        }
        this.currentStepIndex = idx
      },
      submitHandler () {
        if (this.loading || !this.validateCurrentStep()) return
        if (this.isLastStep) {
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
                    background-color: #2289B5;
                    color: #fff;
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
        position: absolute;
        right: 0;
        left: 0;
        transform: translateX(-31px);
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
      padding: 0 8px;
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
        padding: 0;
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

@media (max-height: 1600px) {
  .title {
    
    padding: 30px 10px 20px 10px;
  }

  .transition-box{
    margin: 10px -12px 0;
  }
  .onboarding-buttons{
      margin-top: 0px;
      margin-bottom: 0px;
  }
}
</style>
