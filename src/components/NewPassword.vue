<template>
<div class="border">
    <h1>Введите пароль</h1>
  <div class="form-new-password">
         <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
                
                <div class="input-block">

                    <input type="password" v-model="oldPassword" :disabled="disabled" v-show="!showPassword" required>
                    <input type="text" v-model="oldPassword" :disabled="disabled" v-show="showPassword" required>

                    <label>Старый пароль</label>
                     <div class="buttonShowPassword" @click="showPassword=!showPassword" >
                      <div class="iconPassowordShow" v-show="showPassword"></div>
                      <div class="iconPassowordHide" v-show="!showPassword"></div>
                    </div>
                </div>
                <div class="input-block">

                    <input type="password" v-model="password" :disabled="disabled" v-show="!showPassword" required>
                    <input type="text" v-model="password" :disabled="disabled" v-show="showPassword" required>

                    <label>Новый пароль</label>
                     <div class="buttonShowPassword" @click="showPassword=!showPassword" >
                      <div class="iconPassowordShow" v-show="showPassword"></div>
                      <div class="iconPassowordHide" v-show="!showPassword"></div>
                    </div>
                </div>
                <div class="input-block">

                    <input type="password" v-model="repeatPassword" :disabled="disabled" v-show="!showPassword" required>
                    <input type="text" v-model="repeatPassword" :disabled="disabled" v-show="showPassword" required>

                    <label>Подтвердить новый пароль</label>
                     <div class="buttonShowPassword" @click="showPassword=!showPassword" >
                      <div class="iconPassowordShow" v-show="showPassword"></div>
                      <div class="iconPassowordHide" v-show="!showPassword"></div>
                    </div>
                </div>
                <div class="error_block">
                    <div class="error" v-if="!$v.oldPassword.required">Введите пароль</div>
                    <div class="error" v-if="!$v.password.required">Введите пароль</div>
                    <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна
                        быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max
                        }} символов
                    </div>
                    <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Пароли должны совпадать </div>
                </div>
                <!-- <div class="instruction">Длина пароля должна  быть от 6 до 18</div> -->
            </div>
        <button :disabled="disabled" class="button" :class="{ 'button-valid': $v.password.betweenLength && $v.password.required && $v.repeatPassword.sameAsPassword && $v.oldPassword.required}" type="submit" @click="onSubmit">Готово</button>

       
<Loader v-if="disabled"/>
</div>
</div>
</template>

<script>
  import { required, email, sameAs, minLength, maxLength, and, helpers } from 'vuelidate/lib/validators'
  import Loader from './Loader'
 

  const betweenLength = (min, max) => helpers.withParams(
    {
      min,
      max
    },
    and(minLength(min), maxLength(max))
  )

  export default {
    name: 'NewPassword',
    props: ['toggleLoginModal', 'toggleChangePasswordModal', 'toggleNewPasswordModal'],
    components: { Loader },
    data () {
      return {
        password: '',
        token: '',
        disabled: false,
        showPassword: false,
        oldPassword: '',
        repeatPassword: '',
      }
    },
    validations: {
      password: {
        required,
        betweenLength: betweenLength(6, 18),
      },
      oldPassword: {
        required,
       
      },
      repeatPassword: {
      sameAsPassword: sameAs('password')
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
          const url = this.$route.query
          const token=url['reset-password']
          this.disabled = true
          const rez = await this.$store.dispatch('user/newPassword', {password, token})
          if (rez) {
            
            this.toggleNewPasswordModal();
            this.toggleLoginModal();
          }
        }
         this.disabled = false
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

.input-block{
  margin-bottom: 20px;
}

</style>
