<template>
    <div class="fastorder">
            <h2 class="fastorder__head-title">Выбери размер</h2>
        <div class="fastorder__box">
            <div class="fastorder-card" :class="{choosen: val == '1'}" @click="val = '1'">
                <h2>Маленький</h2>
            <img class="fastorder-card__img-small" src="../assets/small-dog.png" alt="">
                <span>до 5кг</span>
    </div>
            <div class="fastorder-card" :class="{choosen: val == '2'}" @click="val = '2'">
                 <h2>Средний</h2>
            <img class="fastorder-card__img-medium" src="../assets/medium-dog.png" alt="">
                <span>от 5 до 20кг</span>
    </div>
        <div class="fastorder-card" :class="{choosen: val == '3'}" @click="val = '3'">

        <h2>Большой</h2>
            <img class="fastorder-card__img-large" src="../assets/large-dog.png" alt="">
        <span>от 20кг</span>

        </div>
    </div>
    <h3 class="charity">5% от суммы заказа отправляем на благотворительность</h3>
</div>

</template>

<script>
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'FastOrder',
    props: ['order'],
    computed: {
      price_id: {
        get () {
          return this.order.price_id
        },
        set (val) {
          this.$emit('update:order', {
            ...this.order,
            price_id: val
          })
        }
      },
    },
    validations: {
      price_id: {
        required,
      }
    }
  }
</script>

<style lang="scss" scoped>

.fastorder {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;

&__box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(251px, 1fr));
    grid-gap: 50px;
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
    min-width: 251px;
    min-height: 333px;
    cursor: pointer;
    padding: 20px;
    padding-top: 90px;
    padding-bottom: 90px;


svg {
    fill: #2289b5;
}

h2 {
    line-height: 22px;
    font-size: 18px;
    margin: 5px 0 38px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    }

&:hover {
    border-color: #ffcc01;
    box-shadow: 0 0 10px 0 rgba(0,0,0, .7);
}

&__img-small {
    max-width:83px;
    max-height:70px;
    margin: auto;
    padding-bottom: 20px;
}

&__img-medium {
    max-width:120px;
    max-height:93px;
    margin: auto;
    padding-bottom: 20px;
}

&__img-large {
    max-width:119px;
    max-height:108px;
    margin: auto;
    padding-bottom: 20px;
}
    }

.charity {
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 40px;
            margin-top: 30px;
        }

.choosen {
    background-color: #2289b5;
    color: white;
}

.fastorder__head-title {
    margin-bottom: 50px;
}

}
</style>