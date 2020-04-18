<template>
  <div class="form-login">
    <div v-if="status == 'pending'">Pending...</div>
    <div class="message message--error" v-else-if="status == 'error'">{{ msg }}</div>
    <form class="form" @submit.prevent="onSubmit">
        <div class="field" :class="{ 'field--error': $v.email.$error }">
            <label class="label" for="email_field">Почта</label>
            <input class="input" id="email_field" type="email" v-model="$v.email.$model" :disabled="disabled">
            <div class="error" v-if="!$v.email.required">Введите e-mail</div>
            <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
        </div>
        <div class="field" :class="{ 'field--error': $v.password.$error }">
            <label class="label" for="password_field">Пароль</label>
            <input class="input" id="password_field" type="password" v-model="$v.password.$model" :disabled="disabled" >
            <div class="error" v-if="!$v.password.required">Введите пароль</div>
            <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max }} символов</div>
        </div>
        <a class="link" href="/recovery-password">Забыли пароль?</a>
        <input class="button" type="submit" value="Войти" :disabled="disabled">
    </form>
  </div>
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers } from 'vuelidate/lib/validators'

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
        msg: '',
        status: '',
      }
    },
    computed: {
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
        new Promise((resolve, reject) => {
          this.status = 'pending'
          setTimeout( () => {
            if (this.email === 'user@example.com') {
              resolve({token: "some-token"})
            }
            reject("Не верный email или пароль")
          },2000)
        }).then( (resp) => {
          localStorage.setItem('user-token', resp.token)
          this.status = 'success'
          this.onSuccess && this.onSuccess(resp)
        }).catch( msg => {
          localStorage.removeItem('user-token')
          this.status = 'error'
          this.msg = msg
        })
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
