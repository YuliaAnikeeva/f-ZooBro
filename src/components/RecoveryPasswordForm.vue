<template>
<div class="border">
    <h1>Восстановление пароля</h1>
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
              <div class="input-block">
                <input v-model="email" :disabled="disabled" required>              
                <label >Адрес электронной почты</label>
              </div>
              <div class="error_block">
              <div class="error" v-if="!$v.email.required">Введите e-mail</div>
              <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
          </div>
          </div>
          <input class="button" type="submit" value="Далее" :disabled="disabled">
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

      async onSubmit() {
      this.$v.$touch()
       if (this.$v.$invalid) {
          return
        }
        if(!this.$v.$invalid){
          this.messages = []
          const {email} = this
          console.log('passwordRecovery')
          await this.$store.dispatch('passwordRecovery', {email})
          this.messages = ["Письмо с паролем отправленно на почту"]
          this.$router.push('/login')
        }
      }

    // onSubmit: function () {
    //   this.$v.$touch()
    //   if (!this.$v.$invalid) {
    //     this.messages = []
    //     this.$store.dispatch('auth/'+RECOVERY_REQUEST, this.email)
    //       .then( () => {
    //         this.messages = ["Письмо с паролем отправленно на почту"]
    //         this.$router.push('/login')
    //       }).catch( (messages) => {
    //         this.messages = messages
    //       })
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss"
</style>
