<template>
  <div class="form-recovery">
    <div v-if="status=='success'">
      <p class="message message--success">{{ msg }}</p>
    </div>
    <div v-else>
      <p v-if="status=='error'" class="message message--error">{{ msg }}</p>
      <form  class="form" @submit.prevent="onSubmit" ref="form">
          <div class="field" :class="{ 'field--error': $v.email.$error }">
              <label class="label" for="email-field">Email</label>
              <input class="input" :disabled="disabled" id="email-field" type="email" v-model="$v.email.$model" placeholder="user@example.com">
              <div class="error" v-if="!$v.email.required">Введите e-mail</div>
              <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
          </div>
          <input class="button" type="submit" value="Восстановить пароль" :disabled="disabled">
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'RecoveryPasswordForm',
  data () {
    return {
      email: '',
      status: '',
      msg: '',
    }
  },
  computed: {
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
    onSubmit: function () {
      new Promise((resolve, reject) => {
        this.status = 'pending'
        setTimeout( () => {
          if (this.email === 'user@example.com') {
            resolve("Письмо c паролем отправленно на почту")
          }
          reject("Пользователь с таким email не зарегистрирован")
        },2000)
      }).then( msg => {
        this.status = 'success'
        this.msg = msg
      }).catch( msg => {
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
