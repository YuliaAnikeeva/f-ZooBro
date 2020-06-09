<template>
    <div class="fastorder">
            <h2 class="fastorder__head-title">Выбери свой размер</h2>
        <div :class="{ 'field--error wobble-error': $v.size.$error }" class="errors fastorder__errors">
            <div class="error" v-if="$v.size.$dirty && !$v.size.required">Выбери размер</div>
        </div>
        <Slider class="fastorder__box"
          :options="sliderOptions"
        >
            <div class="fastorder-card" :class="{choosen: size == '1'}" @click="size = '1'">
                <h2>Маленький</h2>
            <img class="fastorder-card__img-small" src="../assets/small-dog.png" alt="">
                <span>до 10кг</span>
    </div>
            <div class="fastorder-card" :class="{choosen: size == '2'}" @click="size = '2'">
                 <h2>Средний</h2>
            <img class="fastorder-card__img-medium" src="../assets/medium-dog.png" alt="">
                <span>от 10 до 25кг</span>
    </div>
        <div class="fastorder-card" :class="{choosen: size == '3'}" @click="size = '3'">

        <h2>Большой</h2>
            <img class="fastorder-card__img-large" src="../assets/large-dog.png" alt="">
        <span>от 25кг</span>

        </div>
    </Slider>
    <div class="cost">Стоимость 1500 руб</div>
    <h3 class="charity">Не забывай, 5% от суммы твоего заказа идет на благотворительность</h3>
</div>

</template>

<script>
  import { required } from 'vuelidate/lib/validators'
  import Slider from '@/components/onboarding/orderSteps/Slider'

  export default {
    name: 'FastOrder',
    props: ['order'],
    components: { Slider },
    computed: {
      size: {
        get () {
          return this.order.size
        },
        set (val) {
          this.$emit('update:order', {
            ...this.order,
            size: val
          })
        }
      },
      sliderOptions () {
        return {
              itemsToShow: 1.5,
              centerMode: true,
              initialSlide: 1,
              shortDrag: false,
              breakpoints: {
                768: {
                  itemsToShow: 3,
                  trimWhiteSpace: true,
                  initialSlide: 0,
                },
                375: {
                  itemsToShow: 2,
                }
              }
        }
      }
    },
    validations: {
      size: {
        required,
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_forms.scss";

.fastorder {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

&__box {
    // display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(251px, 1fr));
    // grid-gap: 50px;
    height: auto;
    outline: none;

    /deep/ .hooper-slide {
      height: auto;
    }
}

.cost {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #464451;
  margin-top: 60px;
}

&-card {
    display: flex;
    flex-direction: column;
    align-items:center;
    box-sizing: border-box;
    transition: 0.3s linear all;
    border: 2px solid #2289b5;
    border-radius: 25px;
    text-align: center;
    max-width: 250px;
    // min-height: 333px;
    cursor: pointer;
    padding: 70px 10px 80px;
    height: 100%;
    margin: 0 auto;

img {
    margin-top: auto;
    padding-bottom: 20px;
    flex-shrink: 0;
    object-fit: contain;
}

svg {
    fill: #2289b5;
}

h2 {
    line-height: 22px;
    font-size: 18px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    }


&:hover {
    box-shadow: 0 3px 5px rgba(#2289B5,.6), inset 0 3px 5px rgba(#2289B5,.6);
}

&__img-small {
    width:83px;
    height:70px;
}

&__img-medium {
    width:96px;
    height:80px;
}

&__img-large {
    width:130px;
    height:97px;
}
    }

.charity {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            // margin-bottom: 40px;
            margin-top: 20px;
        }

.choosen {
    background-color: #2289b5;
    color: white;
}

.fastorder__head-title {
    margin-bottom: 50px;
}

}

@media (max-width: 1440px) {
  .fastorder {
    max-width: 730px;
    margin: 0 auto;
    &-card {
      padding: 20px;
      max-width: 190px;
    }
  }
}

@media (max-width: 414px) {
  .fastorder {
    .cost {
      margin-top: 40px;
      font-size: 16px;
    }
    .charity {
      margin-top: 10px;
    }
    &__head-title {
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #464451;
    }
  }
}
</style>
