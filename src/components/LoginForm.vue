<template>
<div class="border">
   <h1>Вход</h1>
    <div class="form-login">

        <form class="form" @submit.prevent="onSubmit">

            <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error}">
                <div class="input-block">
                    <input v-model="email" autocomplete="email" :disabled="disabled" required>
                    <label>Адрес электронной почты</label>
                </div>
                <div class="error_block">
                    <div class="error" v-if="($v.email.$dirty && !$v.email.required)">Введите e-mail</div>
                    <div class="error" v-if="($v.email.$dirty && !$v.email.email)">Введите корректный e-mail</div>
                </div>
            </div>

            <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
                <div class="input-block">
                    <input type="password" v-model="password" :disabled="disabled" v-show="!showPassword" required>
                    <input type="text" v-model="password" :disabled="disabled" v-show="showPassword" required>
                    <button class="buttonShowPassword" @click="showPassword=!showPassword">
                      <div class="iconPassowrdShow" v-show="!showPassword"></div>
                      <div class="iconPassowrdHide" v-show="showPassword"></div>
                    </button>

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

            <a class="link" @click="toggleRecoveryPasswordModal">Я не помню пароль</a>
            <a class="link" @click="toggleRegisterModal">Зарегистрироваться</a>

        </form>

    </div>
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
        showPassword: false,
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
            this.$router.push('/profile')
          }
          this.disabled = false
        }
      },
      toggleRegisterModal () {
        this.$root.toggleRegisterModal
      },

      toggleRecoveryPasswordModal(){
        this.$MainLayout.recoveryPasswordModal
      },
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss";
.iconPasswordHide{
    width: 24px;
  height: 24px;
   background-repeat: no-repeat;
// background-image: url(../assets/passHide.svg);
}

.iconPasswordHide{
    width: 24px;
  height: 24px;
   background-repeat: no-repeat;
background-image: url(../assets/passShow.svg);
}
.buttonShowPassword{
  width: 24px;
  height: 24px;
 background-image: url(../assets/passHide.svg);
  position: absolute;
background-repeat: no-repeat;
right: calc(100% - 300px);
top: 33%;
}

</style>
