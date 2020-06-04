<template>
 <!-- <div class="container"> -->
  <div class="border">
    <h1>Регистрация</h1>
  <div class="form-registration">
    <form class="form" @submit.prevent="onSubmit">
        <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error }">
            <div class="instruction">Введите адрес электронной почты</div>
              <div class="input-block">
                <input v-model="email" :disabled="disabled" required>
                <label >Адрес электронной почты</label>
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

                    <label>Пароль</label>
                     <div class="buttonShowPassword" @click="showPassword=!showPassword" >
                      <div class="iconPassowordShow" v-show="showPassword"></div>
                      <div class="iconPassowordHide" v-show="!showPassword"></div>
                    </div>
                </div>
                <div class="error_block">
                    <div class="error" v-if="!$v.password.required">Введите пароль</div>
                    <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна
                        быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max
                        }} символов
                    </div>
                </div>
            </div>
        <button :disabled="disabled" class="button" :class="{ 'button-valid': $v.email.required && $v.password.required && $v.check.required}" type="submit">Далее</button>
                 <p class="link_noacc"> Уже есть аккаунт?<a class="link_reg" @click="()=>{toggleLogin()}"> Войти </a></p>

      <div class="check-block">
      <input type="checkbox" id="check" v-model="check" required>
      <label for="check" class="check-label">Даю согласие на обработку моих персональных данных</label>
    </div>
      <Loader v-if="disabled"/>
    </form>

  </div>
    </div>
  <!-- </div> -->
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers, sameAs } from 'vuelidate/lib/validators'
  import Loader from './Loader'

  const betweenLength = (min, max) => helpers.withParams(
    { min, max },
    and(minLength(min), maxLength(max))
  )

   export default {
    name: 'RegistrationForm',
    components: { Loader },
    props: ['onSuccess', 'toggleLoginModal', 'toggleRegisterModal', 'toggleRegistrationSuccessModal', 'toggleRecoveryPasswordModal'],
    data () {
      return {
        email: '',
        password: '',
        disabled: false,
        messages: [],
         showPassword: false,
         check: false,
      }
    },

    validations: {

      email: {
        required,
        email,
          },

      password: {
        required,
        betweenLength: betweenLength(6, 18),
      },
      check:{
        required,
      }
    },

    methods: {
      async onSubmit() {
      this.$v.$touch()
       if (this.$v.$invalid) {
          return
        }
        if(!this.$v.$invalid){
          const {email, password} = this
          console.log('userRegister')
          const rez = await this.$store.dispatch('user/userRegister', {email, password})
          if (rez){
            this.onSuccess();
           this.toggleRegistrationSuccessModal();
          }
          
        }
        this.disabled = false
       
      },
      //  toggleLogin () {
      //   this.toggleRegisterModal()
      //   this.toggleLoginModal()
      // },


    }
   }
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss";

.buttonShowPassword{
  width: 24px;
  height: 24px;
 background: transparent;
  position: absolute;
  background-repeat: no-repeat;
  //right: calc(100% - 375px);
  top: 33%;
  border: none;
  padding: 0;
}
</style>
