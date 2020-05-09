<template>
    <div class="form-login">

        <form class="form" @submit.prevent="onSubmit">

            <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error}">
                <div class="input-block">
                    <input v-model="email">
                    <label>Адрес электронной почты</label>
                </div>
                <div class="error_block">
                    <div class="error" v-if="($v.email.$dirty && !$v.email.required)">Введите e-mail</div>
                    <div class="error" v-if="($v.email.$dirty && !$v.email.email)">Введите корректный e-mail</div>
                </div>
            </div>

            <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
                <div class="input-block">
                    <input type="password" v-model="password">
                    <label>Пароль</label>
                </div>
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
@import "../assets/styles/_forms.scss"
</style>
