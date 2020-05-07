<template>
    <div class="form-login">

        <form class="form" @submit.prevent="onSubmit">

            <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error}">
                <input v-model="email" required>
                <label>Адрес электронной почты</label>

                <div class="error_block">
                    <div class="error" v-if="($v.email.$dirty && !$v.email.required)">Введите e-mail</div>
                    <div class="error" v-if="($v.email.$dirty && !$v.email.email)">Введите корректный e-mail</div>
                </div>
            </div>

            <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
                <input type="password" v-model="password" required>
                <label>Пароль</label>

                <div class="error_block">
                    <div class="error" v-if="!$v.password.required">Введите пароль</div>
                    <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна
                        быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max
                        }} символов
                    </div>
                </div>
            </div>

            <button :disabled="disabled" class="button" type="submit">Войти</button>

            <Loader v-if="disabled"/>

            <router-link class="link" to="/recovery-password">Я не помню пароль</router-link>
            <router-link class="link" to="/recovery-password">Зарегистрироваться</router-link>

        </form>

    </div>
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers } from 'vuelidate/lib/validators'
  import Loader from './Loader'

  const betweenLength = (min, max) => helpers.withParams(
    {
      min,
      max
    },
    and(minLength(min), maxLength(max))
  )

  export default {
    name: 'LoginForm',
    components: { Loader },
    props: ['onSuccess'],
    data () {
      return {
        email: '',
        password: '',
        messages: [],
        disabled: false,
      }
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
        betweenLength: betweenLength(4, 18),
      }
    },
    methods: {
      async onSubmit () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        if (!this.$v.$invalid) {
          const { email, password } = this
          console.log('loginUser')

          this.disabled = true
          const rez = await this.$store.dispatch('loginUser', {
            email,
            password
          })
          if (rez) {
            this.onSuccess()
          }
          this.disabled = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
    .message_block {
        height: 30px;
    }

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

    .link {
        margin: 10px 0;
        width: 155px;
        height: 20px;
        text-decoration: none;
        border-bottom: 0.3px solid $forms-text-color;
        color: $forms-text-color;
        align-self: center;
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
        top: 23px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    .group-field input:focus ~ label,
    .group-field input:valid ~ label {
        top: 10px;
        font-size: 14px;
    }

    .group-field input:focus,
    .group-field input:hover,
    .group-field input:valid {
        background: $forms-input-bckgr-hover-color;
        border-color: $forms-btn-color;
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
