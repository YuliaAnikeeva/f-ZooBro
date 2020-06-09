<template>
<div class="border">
    <h1>Восстановление пароля</h1>
  <div class="form-recovery">
      <form  class="form" @submit.prevent="onSubmit" ref="form">
          <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error }">
              <div class="instruction" >Введите адрес электронной почты</div>
              <div class="input-block">
                <input v-model="email" :disabled="disabled" required>              
                <label >Адрес электронной почты</label>
              </div>
              <div class="error_block">
              <div class="error" v-if="!$v.email.required">Введите e-mail</div>
              <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
          </div>
          </div>
          <input class="button" :class="{ 'button-valid': $v.email.required}" type="submit" value="Далее" :disabled="disabled">
      <div class="instruction--blue">{{messages}}</div>
      </form>
       
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('auth')
import { RECOVERY_REQUEST } from '../store/auth'

export default {
  name: 'RecoveryPasswordForm',
  props: ['onSuccess', 'toggleLoginModal', 'toggleRegisterModal', 'toggleRegistrationSuccessModal', 'toggleRecoveryPasswordModal', 'toggleChangePasswordModal'],

  data () {
    return {
      email: '',
      messages: '',
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

      async onSubmit() {
      this.$v.$touch()
       if (this.$v.$invalid) {
          return
        }
        if(!this.$v.$invalid){
          this.messages = 'Проверьте почту. Если Вы зарегистрированы, Вам будет отправлено письмо.'
          const {email} = this
          // console.log('passwordRecovery')
          await this.$store.dispatch('user/passwordRecovery', {email}) 
        }

        
      }

    
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss";


.message_block{
  
  text-align: center;
}
</style>
