<template>
  <div class="form-registration">
    <form class="form" @submit.prevent="register">
        <div class="field" :class="{ 'field--error': $v.form.email.$error }">
            <label class="label" for="email_field">Почта</label>
            <input class="input" id="email_field" type="email" v-model="$v.form.email.$model">
            <div class="error" v-if="!$v.form.email.required">Введите e-mail</div>
            <div class="error" v-if="!$v.form.email.email">Введите корректный e-mail</div>
        </div>
        <div class="field" :class="{ 'field--error': $v.form.password.$error }">
            <label class="label" for="password_field">Пароль</label>
            <input class="input" id="password_field" type="password" v-model="$v.form.password.$model">
            <div class="error" v-if="!$v.form.password.required">Введите пароль</div>
            <div class="error" v-if="!$v.form.password.betweenLength">{{ $v.form.password.between }}Длина пароля должна быть от {{ $v.form.password.$params.betweenLength.min }} до {{ $v.form.password.$params.betweenLength.max }} символов</div>
        </div>
         <div class="field" :class="{ 'field--error': $v.form.repeatPassword.$error }">
            <label class="label" for="passwordRepeat_field">Repeat password</label>
            <input class="input" id="passwordRepeat_field" type="password" v-model.trim="$v.form.repeatPassword.$model"/>
            <div class="error" v-if="!$v.form.repeatPassword.sameAsPassword">Passwords must be identical.</div>

         </div>
        <input class="button" type="submit" value="Register" >
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
        email: '',
        password: '',
        repeatPassword: ''
      }
      }
    },

    validations: {
      form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        betweenLength: betweenLength(4, 18),
      },
      repeatPassword: {
      sameAsPassword: sameAs('password')
    }
      }
    },
    methods: {
     register() {
       console.log(this.form)
      // this.$store.dispatch('createUser', this.form)
      // .then(() => this.$router.push('/'))
      // .catch(err => console.log(err))
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
    align-self: flex-start;
    text-transform: uppercase;
    font-size: 0.8em;
    margin-bottom: 5px;
  }
  .input {
    padding: 10px 5px;
    border-radius: 5px;
    border: 1px solid #333;
  }
  .link {
    margin: 15px 0;
  }
  .button {
    padding: 15px;
    align-self: flex-end;
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
