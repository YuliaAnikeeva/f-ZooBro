<template>
  <div class="form-registration">
    <form class="form" @submit.prevent="register">
        <div class="field" :class="{ 'field--error': $v.form.email.$error }">
            <label class="label" for="email_field">Введите адрес электронной почты</label>
            <input class="input" id="email_field" type="email" value="Адрес электронной почты" v-model="$v.form.email.$model">
            <div class="error" v-if="!$v.form.email.required">Введите e-mail</div>
            <div class="error" v-if="!$v.form.email.email">Введите корректный e-mail</div>
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
      this.tologin(event),
      this.onSubmit()
    }

    },

    created() {
      this.$emit('ready')
    }
  }
</script>

<style lang="scss" scoped>
 .form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media (min-width: 425px) {
      width: 400px;
    }
  }
  .field {
    display: flex;
    flex-direction: column;
    margin: 15px 0;
  }
  .label {
    margin: 20px 79px;
    align-self: center;
    // text-transform: uppercase;
    font-size: 0.8em;
    margin-bottom: 5px;

    /* Введите адрес электронной почты */
    width: 293px;
    height: 20px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;

    /* Text color test */
    color: #1A1A22;

  }
  .input {
    margin: 20px 0;
    // border-radius: 5px;
    // border: 1px solid #333;

    /* Rectangle 7 */
    width: 360px;
    height: 22px;
    background: #FAFAFA;
    border-radius: 10px;
    /* ZooBro@test.ru */

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    padding: 30px 20px 8px 20px;
    letter-spacing: 0.2px;

    color: #1A1A22;


  }
  .link {
    margin: 15px 0;
  }
  .button {
    margin: 20px 0;
    padding: 15px;
    align-self: center;
    /* Rectangle 8 */
    width: 255px;
    height: 55px;
    background: #4D99BA;
    opacity: 0.8;
    border-radius: 10px;
    /* Далее */

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    /* identical to box height */
    
    letter-spacing: 0.2px;

    /* Gray 6 */
    color: #F2F2F2;

  }

  
  .error {
    color: red;
    align-self: flex-start;
    margin: 5px 0;
    font-size: 0.8em;
    display: none;
  }
  .field--error .input {
    border-color: red;
  }
  .field--error .error {
    display: block;
  }
  .message {
    &--success {
      color: green;
    }
    &--error {
      color: red;
    }
  }
</style>
