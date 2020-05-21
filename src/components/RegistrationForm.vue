<template>
 <!-- <div class="container"> -->
  <div class="border">
    <h1>Регистрация</h1>
  <div class="form-registration">
    <form class="form" @submit.prevent="onSubmit">
        <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error }">
            <div class="instruction">Введите адрес электронной почты</div>
              <div class="input-block">
                <input v-model="email" autocomplete="on" :disabled="disabled" required>
                <label >Адрес электронной почты</label>
              </div>
            <div class="error_block">
            <div class="error" v-if="($v.email.$dirty && !$v.email.required)">Введите e-mail</div>
            <div class="error" v-if="($v.email.$dirty && !$v.email.email)">Введите корректный e-mail</div>
        </div>
        </div>
          <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
            <!-- <div class="instruction-reg">На Вашу электронную почту отправлен пароль. <br>
Пожалуйста, введите его в поле ниже.</div> -->
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
                <!-- <div class="instruction-reg2">Не получили пароль? Проверье папку Спам 
или отправьте<a class="link_reg" @click="onSubmit"> Создать </a></div> -->
                
            </div>
        <button :disabled="disabled" class="button" type="submit">Далее</button>
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
    props: ['onSuccess'],
    data () {
      return {
        email: '',
        password: '',
        disabled: false,
        messages: [],
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
        betweenLength: betweenLength(6, 18),
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
          const rez = await this.$store.dispatch('userRegister', {email, password})
          if (rez){
            this.onSuccess()
          }
        }
        this.disabled = false
      }


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
