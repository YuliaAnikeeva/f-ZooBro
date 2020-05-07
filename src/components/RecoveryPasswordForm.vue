<template>
  <div class="form-recovery">
    <div class="message_block">
    <div v-if="status=='success'">
      <p class="message message--success">{{ msg }}</p>
    </div>
    <div v-else>
      <p v-if="status=='error'" class="message message--error">{{ msg }}</p>
      </div>
      </div>
      <form  class="form" @submit.prevent="onSubmit" ref="form">
          <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error }">
              <div class="instruction" >Введите адрес электронной почты</div>
              <input v-model="email" :disabled="disabled" required>              <label >Адрес электронной почты</label>
              <div class="error_block">
              <div class="error" v-if="!$v.email.required">Введите e-mail</div>
              <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
          </div>
          </div>
          <input class="button" type="submit" value="Далее" :disabled="disabled">
      </form>
    
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')
import { RECOVERY_REQUEST } from '../store/auth'

export default {
  name: 'RecoveryPasswordForm',
  data () {
    return {
      email: '',
      messages: [],
    }
  },
  computed: {
    ...mapGetters({status: 'getRecoveryStatus'}),
    disabled: function () {
      return this.status === 'pending'
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    onSubmit: function () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.messages = []
        this.$store.dispatch('auth/'+RECOVERY_REQUEST, this.email)
          .then( () => {
            this.messages = ["Письмо с паролем отправленно на почту"]
          }).catch( (messages) => {
            this.messages = messages
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
 .form {
    margin: 5% auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 425px) {
      width: 400px;
    }
    @media (min-width: 350px) {
            width: 90%;
        }
  }
  
  .button {
    margin: 20px 0;
    padding: 15px 90px;
    align-self: center;
    background: $forms-btn-color;
    background-image: url(../assets/paw.svg);
    background-position: calc(100% - 30px) 50%;
    background-repeat: no-repeat;
    opacity: 0.8;
    border-radius: 10px;
    font-family: Montserrat, serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    color: $forms-btn-text-color;
    border: none;    
  }
  .button:hover {
    background-color: $forms-btn-hover-color;
  }

  .button:focus,
  .button:active {
    outline-color: transparent;
  }
  
  .error {
        margin-top: 5px;
        align-self: flex-start;
        display: none;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 11px;
        line-height: 13px;
        color: $forms-error-color;
    }

  .field--error input {
      border-color: $forms-error-color !important;
  }

  .field--error .error {
     display: block;
  }

  .error_block {
      height: 20px;
  }

  .message {
      &--success {
          color: $forms-success-color;
      }

      &--error {
          color: $forms-error-color;
      }
  }
  .group-field {
        position: relative;
    }

    .group-field input {
        font-size: 18px;
        padding: 30px 20px 10px 20px;
        display: block;
        box-sizing: border-box;
        width: 100%;
        border: 2px solid $forms-input-bckgr-color;
        background: $forms-input-bckgr-color;
        border-radius: 10px;
        color: #1A1A22;
        transition: 0.2s ease all;
    }

    .group-field input:focus {
        outline: none;
    }

    .group-field label {
        color: $forms-input-lable-color;
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 20px;
        top: 60px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    .group-field input:focus ~ label,
    .group-field input:valid ~ label {
        top: 47px;
        font-size: 14px;
    }

    .group-field input:focus,
    .group-field input:hover,
    .group-field input:valid {
        background: $forms-input-bckgr-color;
        border-color: $forms-btn-color;
    }
    .instruction{
    align-self: center;
    font-size: 0.8em;
    margin-bottom: 20px;
    height: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #1A1A22;
    }
    .wobble-error {
        animation: wobble-error 0.8s both;
    }
@keyframes wobble-error {
        0%,
        100% {
            transform: translateX(0%);
            transform-origin: 50% 50%;
        }
        15% {
            transform: translateX(-15px);
        }
        30% {
            transform: translateX(7.7px);
        }
        45% {
            transform: translateX(-7.5px);
        }
        60% {
            transform: translateX(4.5px);
        }
        75% {
            transform: translateX(-3px);
        }
    }
</style>
