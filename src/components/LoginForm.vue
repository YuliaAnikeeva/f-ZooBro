<template>
    <div class="form-login">

        <div class="message_block">
            <div v-if="status == 'pending'">Pending...</div>
            <div class="message message--error" v-else-if="status == 'error'">{{ msg }}</div>
        </div>

        <form class="form" @submit.prevent="onSubmit">

            <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error}">
                <input v-model="email" :disabled="disabled" required>
                <label>Адрес электронной почты</label>

                <div class="error_block">
                    <div class="error" v-if="($v.email.$dirty && !$v.email.required)">Введите e-mail</div>
                    <div class="error" v-if="($v.email.$dirty && !$v.email.email)">Введите корректный e-mail</div>
                </div>
            </div>

            <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
                <input type="password" v-model="password" :disabled="disabled" required>
                <label>Пароль</label>

                <div class="error_block">
                    <div class="error" v-if="!$v.password.required">Введите пароль</div>
                    <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна
                        быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max
                        }} символов
                    </div>
                </div>
            </div>

            <button class="button" type="submit">Войти</button>

            <router-link class="link" to="/recovery-password">Я не помню пароль</router-link>
            <router-link class="link" to="/recovery-password">Зарегистрироваться</router-link>

        </form>

    </div>
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers } from 'vuelidate/lib/validators'
  import { createNamespacedHelpers } from 'vuex'

  const { mapGetters } = createNamespacedHelpers('auth')
  import { AUTH_REQUEST } from '../store/auth'
  const betweenLength = (min, max) => helpers.withParams(
    {
      min,
      max
    },
    and(minLength(min), maxLength(max))
  )

  export default {
    name: 'LoginForm',
    props: ['onSuccess'],
    data () {
      return {
        email: '',
        password: '',
        messages: [],
      }
    },
    computed: {
      ...mapGetters({ status: 'getStatus' }),
      disabled: function () {
        return this.status == 'pending'
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
      onSubmit () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return
        }
        if (!this.$v.$invalid) {
          this.messages = []
          const { email, password } = this
          this.$store.dispatch('auth/' + AUTH_REQUEST, {
            email,
            password
          })
            .then((resp) => {
              this.onSuccess && this.onSuccess(resp)
            })
            .catch((messages) => {
              this.messages = messages
            })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .message_block {
        height: 30px;
    }

    .form {
        margin: 0 auto;
        display: flex;
        flex-direction: column;

        @media (min-width: 425px) {
            width: 400px;
        }
    }

    .link {
        margin: 10px 0;
        width: 155px;
        height: 20px;
        text-decoration: none;
        border-bottom: 0.3px solid #1A1A22;
        color: #1A1A22;
        align-self: center;
    }

    .button {
        margin: 20px 0;
        padding: 15px 90px;
        align-self: center;
        background: #2289B5;
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
        color: #F2F2F2;
        border: none;
    }

    .button:hover {
        background-color: #4D99BA;
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
        color: #F63535;
    }

    .field--error input {
        border-color: #F63535 !important;
    }

    .field--error .error {
        display: block;
    }

    .error_block {
        height: 20px;
    }

    .message {
        &--success {
            color: green;
        }

        &--error {
            color: #F63535;
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
        border: 2px solid #FAFAFA;
        background: #FAFAFA;
        border-radius: 10px;
        color: #1A1A22;
        transition: 0.2s ease all;
    }

    .group-field input:focus {
        outline: none;
    }

    .group-field label {
        color: #B5B6B6;
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
        background: #FFFFFF;
        border-color: #2289B5;
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
