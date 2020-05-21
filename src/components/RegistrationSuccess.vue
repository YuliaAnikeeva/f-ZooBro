<template>
<div class="border">
    <h1>Вы успешно зарегистрировались!</h1>
  <div class="form-success-registration">
<div class="round"></div>
<router-link class="router-link" to="/">1111</router-link>
<!-- <a href="" class="link-main"></a> -->
    </div>
  </div>
</template>

<script>
// import { required, email } from 'vuelidate/lib/validators'
// import { createNamespacedHelpers } from 'vuex'
// const { mapGetters } = createNamespacedHelpers('auth')
// import { RECOVERY_REQUEST } from '../store/auth'

export default {
  name: 'RegistrationSuccess',
//   data () {
//     return {
//       email: '',
//       messages: [],
//     }
//   },
//   computed: {
//     ...mapGetters({status: 'getRecoveryStatus'}),
//     disabled: function () {
//       return this.status === 'pending'
//     }
//   },
//   validations: {
//     email: {
//       required,
//       email
//     }
//   },
  methods: {

    //   async onSubmit() {
    //   this.$v.$touch()
    //    if (this.$v.$invalid) {
    //       return
    //     }
    //     if(!this.$v.$invalid){
    //       this.messages = []
    //       const {email} = this
    //       console.log('passwordRecovery')
    //       await this.$store.dispatch('passwordRecovery', {email})
    //       this.messages = ["Письмо с паролем отправленно на почту"]
    //       this.$router.push('/login')
    //     }
    //   }

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
@import "../assets/styles/_forms.scss";

</style>
