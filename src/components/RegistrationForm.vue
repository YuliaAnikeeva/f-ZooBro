<template>
  <div class="form-registration">
      <!-- <div class="message_block">
    <div v-if="status=='success'">
      <p class="message message--success">{{ msg }}</p>
    </div>
    <div v-else>
      <p v-if="status=='error'" class="message message--error">{{ msg }}</p>
      </div>
      </div> -->
    <form class="form" @submit.prevent="onSubmit">
        <div class="group-field" :class="{ 'field--error wobble-error': $v.email.$error }">
            <div class="instruction">Введите адрес электронной почты</div>
              <div class="input-block">
                <input v-model="email" :disabled="disabled" required> 
                <label >Адрес электронной почты</label>
              </div>
            <div class="error_block">
            <div class="error" v-if="($v.email.$dirty && !$v.email.required)">Введите e-mail</div>
            <div class="error" v-if="($v.email.$dirty && !$v.email.email)">Введите корректный e-mail</div>
        </div>
        </div>
          <div class="group-field" :class="{ 'field--error wobble-error': $v.password.$error }">
                <div class="input-block">
                    <input type="password" v-model="password" :disabled="disabled" required>
                    <label>Пароль</label>
                </div>
                <div class="error_block">
                    <div class="error" v-if="!$v.password.required">Введите пароль</div>
                    <div class="error" v-if="!$v.password.betweenLength">{{ $v.password.between }}Длина пароля должна
                        быть от {{ $v.password.$params.betweenLength.min }} до {{ $v.password.$params.betweenLength.max
                        }} символов
                    </div>
                </div>
            </div>
        <button :disabled="disabled" class="button" type="submit">Далее</button>
      <Loader v-if="disabled"/>
    </form>
  </div>
</template>

<script>
  import { required, email, minLength, maxLength, and, helpers, sameAs } from 'vuelidate/lib/validators'
  import Loader from './Loader'

  const betweenLength = (min, max) => helpers.withParams(
    { min, max },
    and(minLength(min), maxLength(max))
  )

   export default {
    name: 'RegistrationForm',
    components: { Loader },
    props: ['onSuccess'],
    data () {
      return {
        email: '',
        password: '',
        disabled: false,
        messages: [],
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
      async onSubmit() {
      this.$v.$touch()
       if (this.$v.$invalid) {
          return
        }
        if(!this.$v.$invalid){
          const {email, password} = this
          console.log('userRegister')
          await this.$store.dispatch('userRegister', {email, password})
          // this.disabled = true
          this.$router.push('/login')
        }
      }
      //     const rez  = await this.$store.dispatch('userRegister', {email, password})
       
      //  }
      //  if (rez) {
      //       this.onSuccess()
      //       this.$router.push('/login')
      //     }
      //     this.disabled = false
      //   },

  

        // created() {
        //   this.$emit('ready')
        // }
    }
   }
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss"
</style>
