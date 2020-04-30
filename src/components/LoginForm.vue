<template>
  <div class="form-login">
    <div class="message_block">
    <div v-if="status == 'pending'">Pending...</div>
    <div class="message message--error" v-else-if="status == 'error'">{{ msg }}</div>
    </div>
    <form class="form" @submit.prevent="onSubmit">
        <div class="field" :class="{ 'field--error': $v.email.$error }">
            <input class="input" id="email_field" type="email" placeholder="Адрес электронной почты" v-model="$v.email.$model" :disabled="disabled">
            <!-- <label class="label" for="email_field">Почта</label> -->
            <div class="hint_container"><p class="hint">Адрес электронной почты</p></div>
            <div class="error_block">
            <div class="error" v-if="!$v.email.required">Введите e-mail</div>
            <div class="error" v-if="!$v.email.email">Введите корректный e-mail</div>
        </div>
        </div>
        <div class="field" :class="{ 'field--error': $v.password.$error }">
          <div class="hint_container"><p class="hint">Введите пароль</p></div>
            <!-- <label class="label" for="password_field">Пароль</label> -->
            <input class="input" id="password_field" type="password" placeholder="Пароль" v-model="$v.password.$model" :disabled="disabled" >
           <div class="error_block">
            <div class="error" v-if="!$v.password.required">Введите пароль</div>
            <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max }} символов</div>
        </div>
        </div>
        <input class="button" type="submit" value="Войти" :disabled="disabled">
        <a class="link" href="/recovery-password">Я не помню пароль</a>
        <a class="link" href="/recovery-password">Зарегистрироваться</a>
        <div>
          <input type="checkbox" name="agree">
          <label for="agree" class="agree_check">Даю согласие на обработку моих <a href="#"> персональных данных</a></label>
        </div>
        
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
.message_block{
  height: 30px;
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
  // .label {
  //   margin: 20px 79px;
  //   align-self: center;
  //   // text-transform: uppercase;
  //   font-size: 0.8em;
  //   margin-bottom: 5px;

  //   /* Введите адрес электронной почты */
  //   width: 293px;
  //   height: 20px;

  //   font-family: Montserrat;
  //   font-style: normal;
  //   font-weight: normal;
  //   font-size: 16px;
  //   line-height: 20px;

  //   /* Text color test */
  //   color: #1A1A22;

  // }
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
    width: 255px;
    height: 55px;
    background: #4D99BA;
    background-image:  url(../assets/paw.svg);
    background-position: 80% 50%;
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
    &--success {
      color: green;
    }
    &--error {
      color:  #F63535;
    }
  }
  
</style>
