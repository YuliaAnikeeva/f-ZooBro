<template>
  <div class="form-login">
    <div v-if="status == 'pending'">Pending...</div>
    <div v-for="msg in messages" class="message" :class="`message--${status}`" :key="msg">{{ msg }}</div>
    <form class="form" @submit.prevent="onSubmit">
        <div class="field" :class="{ 'field--error': $v.email.$error }">
            <!-- <label class="label" for="email_field">Почта</label> -->
            <input class="input" id="email_field" type="email" v-model="$v.email.$model" :disabled="disabled">
            <div class="error" v-if="!$v.email.required">Введите e-mail</div>
            <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
        </div>
        <div class="field" :class="{ 'field--error': $v.password.$error }">
            <!-- <label class="label" for="password_field">Пароль</label> -->
            <input class="input" id="password_field" type="password" v-model="$v.password.$model" :disabled="disabled" >
            <div class="error" v-if="!$v.password.required">Введите пароль</div>
            <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max }} символов</div>
        </div>
        
        <input class="button" type="submit" value="Войти" :disabled="disabled">
        <a class="link" href="/recovery-password">Я не помню пароль</a>
        <a class="link" href="/recovery-password">Зарегистрироваться</a>
    </form>
  </div>
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers } from 'vuelidate/lib/validators'
  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('auth')
  import { AUTH_REQUEST } from '../store/auth'

  const betweenLength = (min, max) => helpers.withParams(
    { min, max },
    and(minLength(min), maxLength(max))
  )

  export default {
    name: 'LoginForm',
    props: ['onSuccess'],
    data () {
      return {
        email: '',
        password: '',
        messages: [],
      }
    },
    computed: {
      ...mapGetters({ status: 'getStatus' }),
      disabled: function () {
        return this.status == 'pending'
      }
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
        betweenLength: betweenLength(4, 18),
      }
    },
    methods: {
      onSubmit: function () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.messages = []
          const { email, password } = this
          this.$store.dispatch('auth/'+AUTH_REQUEST, { email, password })
            .then( (resp) => {
              this.onSuccess && this.onSuccess(resp)
            })
            .catch( (messages) => {
              this.messages = messages
            })
        }
      }
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
    margin: 10px 0;
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
