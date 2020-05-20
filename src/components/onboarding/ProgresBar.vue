<template>
  <div class="progressbar">
    <template v-for="(step, idx) in steps">
      <label
        :key="step.value"
        class="step"
        :class="{
          step_cur: idx === currentIndex,
          step_prev: idx < currentIndex,
          step_next: idx > currentIndex,
          step_hidden: step.hidden,
          step_error: step.error}"
        >
          <!--<input type="radio" class="step__control" v-model="val" :value="step.value">-->
          <div class="step__header">
            <div class="step__divider"></div>
            <div class="step__button"></div>
          </div>
          <div class="step__label">{{ step.label }}</div>
      </label>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'ProgresBar',
    props: {
      steps: {
        type: Array,
        default: () => [
          { value: 'step-1', label: 'Выберите формат заказа' },
          { value: 'step-2', label: 'Данные питомца', error: true },
          { value: 'step-3', label: 'Персональные данные'},
          { value: 'step-4', label: 'Результат', hidden: true },
        ]
      },
      value: {
        type: String,
        default: 'step-2'
      }
    },
    computed: {
      val: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        }
      },
      currentIndex() {
        return this.steps.findIndex( step => step.value === this.value )
      },
    }
  }
</script>

<style lang="scss" scoped>
    .progressbar {
        display: flex;
        font-size: 14px;
      margin-bottom: 50px;
    }

    .step {
      flex: 1;
      color: #bdbdbd;
      cursor: pointer;
      padding: 10px 0;

      &_hidden {
        display: none;
      }

      &__control {
        display: none;
      }

      &__header {
        position: relative;
      }

      &__divider {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #bdbdbd;
        top: 50%;
        left: -50%;
        z-index: -1;
      }

      &:first-child &__divider {
        display: none;
      }

      &__button {
        width: 14px;
        height: 14px;
        border: 2px solid #bdbdbd;
        border-radius: 100%;
        display: block;
        margin: 0 auto 10px auto;
        background-color: #fff;
        padding: 5px;
        position: relative;

        &:after {
          display: block;
          width: 50%;
          height: 50%;
          position: absolute;
          left: 50%;
          top: 50%;
          background-color: #bdbdbd;
          margin-top: -25%;
          margin-left: -25%;
          border-radius: 50%;
        }
      }

      &__label {
        color: #2c3e50;
        text-align: center;
        line-height: 25px;
      }

      &_cur &__divider,
      &_prev &__divider {
        background: #2289b5;
      }

      &_cur &__button,
      &_prev &__button {
        border-color: #2289b5;
      }

      &_cur &__button:after {
        content: '';
        background-color: #2289b5;
      }

      &_prev &__button {
        background-color: #2289b5;
      }

      &_error &__button {
       // border-color: red;
      }

      &:hover &__button:after {
        content: '';
        background-color: #ffcc01;
      }

      &:hover {
        background-color: rgba(#ffcc01, 0.2);
      }
    }
</style>
