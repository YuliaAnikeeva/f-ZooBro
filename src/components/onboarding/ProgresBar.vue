<template>
  <div class="progressbar"
    :style="{
      gridTemplateColumns: `repeat(${steps.length - 1}, 1fr)`
    }"
  >
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
          <div class="step__label">{{ step.label }}</div>
          <div class="step__header">
            <div class="step__divider"></div>
            <div class="step__button"></div>
          </div>
          <div class="step__label">{{ info[idx] }}</div>
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
          { value: 'step-1', label: 'Формат заказа' },
          { value: 'step-2', label: 'Твои данные' },
          { value: 'step-3', label: 'Данные твоего человека'},
          { value: 'step-4', label: 'Результат', hidden: true },
        ]
      },
      info: {
        type: Array,
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
      font-family: Montserrat, sans-serif;
      display: flex;
      font-size: 12px;
      // margin-bottom: 40px;
      color: #464451;
    }

    .step {
      flex: 1;
      cursor: pointer;

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
        width: 30px;
        height: 30px;
        border: 2px solid #bdbdbd;
        border-radius: 100%;
        display: block;
        margin: 10px auto;
        background-color: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        &:after {
          display: block;
          height: 14px;
          width: 14px;
          background-color: #bdbdbd;
          border-radius: 50%;
        }
      }

      &__label {
        text-align: center;
        line-height: 25px;
        // margin: 10px 0;
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

      &_prev {
        color: #2289b5;
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

@media (max-width: 500px) {
  .progressbar {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 1fr 1fr;

    .step {
      display: contents;

      &_hidden {
        display: none;
      }

      &__label {
        &:first-child {
          align-self: flex-end;
        }
      }
    }
  }
}

@media (max-width: 414px) {
  .progressbar {
    // margin-bottom: 25px;

    .step {
      &__button {
        width: 20px;
        height: 20px;

        &::after {
          height: 10px;
          width: 10px;
        }
      }
      &__label {
        font-size: 11px;
        line-height: 13px;

        &:first-child {
          align-self: flex-end;
        }
      }
    }
  }
}
</style>
