<template>
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
          <div class="field" :class="{ 'field--error': $v.email.$error }">
              <label class="label" for="email_field">Введите адрес электронной почты</label>
              <input class="input" :disabled="disabled" id="email-field" type="email" v-model="$v.email.$model" placeholder="user@example.com">
              <div class="error" v-if="!$v.email.required">Введите e-mail</div>
              <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
          </div>
          <input class="button" type="submit" value="Восстановить пароль" :disabled="disabled">
      </form>
    
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
 .message_block{
  height: 40px;
 
}
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
    margin: 10px 79px 20px 78px;
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
    margin: 20px 0 0 0;
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

  .input:enabled {
    background: #FFFFFF;
  }
  .hint_container{
    position: relative;
  }
  .hint{
    display: none;
    position: absolute;
    left: 20px;
    top: 20px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #B5B6B6;
  }
  .input:enabled +.hint{
    display: block;
    left: 460px;
    top: 299px;
    }
  .link {
    margin: 10px 0;
    width: 155px;
    height: 20px;
    text-decoration: none;
    border-bottom: 0.3px solid #1A1A22;
    color:  #1A1A22;
    align-self: center;
  }
  
  .button {
    margin: 20px 0;
    padding: 15px;
    align-self: center;
    /* Rectangle 8 */
    width: 400px;
    height: 55px;
    background: #4D99BA;
    background-image:  url(../assets/paw.svg);
    background-position: 95% 50%;
    background-repeat: no-repeat;
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
  
  .agree_check {
    /* Даю согласие на обработку моих персональных данных */
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #1A1A22;

  }
  .agree_check a{
    color:#1A1A22;
    text-decoration: none;
    border-bottom: 0.3px solid #1A1A22;
  }
   .error {
    margin-top: 5px;
    align-self: flex-start;
    display: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    color: #F63535;
  }
  .field--error .input {
    border-color: #F63535;
  }
  .field--error .error {
    display: block;
  }
  .error_block{
    height: 20px;
  }
  .message {
    margin: 0;
    &--success {
      color: green;
    }
    &--error {
      color:  #F63535;
    }
  }
  
</style>
