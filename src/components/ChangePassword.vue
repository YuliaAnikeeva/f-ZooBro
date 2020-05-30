<template>
<div class="border">
    <h1>Введите пароль</h1>
  <div class="form-new-password">
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
                <div class="instruction">Длина пароля должна  быть от 6 до 18</div>
            </div>
        <button :disabled="disabled" class="button" :class="{ 'button-valid': $v.password.betweenLength && $v.password.required}" type="submit" @click="onSubmit">Далее</button>

       

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
const token="x0841AKQUUyaB93Ihe9a5N4zHFGn8jv3_1590826274"

  export default {
    name: 'ChangePassword',
    props: ['onSuccess', 'toggleLoginModal', 'toggleRegisterModal', 'toggleRegistrationSuccessModal', 'toggleRecoveryPasswordModal','toggleChangePasswordModal'],
    components: { Loader },
    data () {
      return {
        password: '',
        token: '',
        disabled: false,
        showPassword: false,
      }
    },
    validations: {
      password: {
        required,
        betweenLength: betweenLength(6, 18),
      }
    },
    methods: {
      async onSubmit () {
        this.$v.$touch()
        
        if (this.$v.$invalid) {
          return
         
        }
        if (!this.$v.$invalid) {
          const { password } = this
          this.disabled = true
          const rez = await this.$store.dispatch('user/newPassword', {
            password, token})
          if (rez) {
            this.onSuccess()
            this.toggleLoginModal()
          }
          this.disabled = false
        }
      },
     
toggleLogin2 () {
        this.toggleRegisterModal()
        this.toggleLoginModal()
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
right: 5%;
top: 33%;
}

</style>
