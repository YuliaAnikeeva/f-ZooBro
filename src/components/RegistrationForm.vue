<template>
  <div class="form-registration">
      <div class="message_block">
    <div v-if="status=='success'">
      <p class="message message--success">{{ msg }}</p>
    </div>
    <div v-else>
      <p v-if="status=='error'" class="message message--error">{{ msg }}</p>
      </div>
      </div>
    <form class="form" @submit.prevent="register">
        <div class="group-field" :class="{ 'field--error wobble-error': $v.form.email.$error }">
            <div class="instruction">Введите адрес электронной почты</div>
              <div class="input-block">
                <input v-model="email" :disabled="disabled" required>
                <label >Адрес электронной почты</label>
              </div>
            <div class="error_block">
            <div class="error" v-if="!$v.form.email.required">Введите e-mail</div>
            <div class="error" v-if="!$v.form.email.email">Введите корректный e-mail</div>
        </div>
        </div>
        <input class="button" type="submit" value="Далее" :disabled="$v.$invalid" v-on:click="next">
    </form>
  </div>
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers, sameAs } from 'vuelidate/lib/validators'

  const betweenLength = (min, max) => helpers.withParams(
    { min, max },
    and(minLength(min), maxLength(max))
  )

   export default {
     name: 'RegistrationForm',
    props: ['onSuccess'],
    data () {
      return {
        form:{
        email: ''
      }
      }
    },

    validations: {
      form: {
      email: {
        required,
        email,
          }
      }
    },
    methods: {
      tologin(event){
this.$router.push('/login')
      },
     register() {
       console.log(this.form)
      // this.$store.dispatch('createUser', this.form)
      // .then(() => this.$router.push('/'))
      // .catch(err => console.log(err))
     },
     onSubmit() {
       if(!this.$v.$invalid){
         const user= {
           email: form.email,
          
         }
       }
     },

    next(){
      // this.onSubmit(),
      this.tologin(event)
    }

    },

    created() {
      this.$emit('ready')
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss"
</style>
