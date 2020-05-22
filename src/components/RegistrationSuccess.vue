<template>
<div class="border">
    <h1>Вы успешно зарегистрировались!</h1>
  <div class="form-success-registration">
<div class="round"></div>
<div class="button-link1" @click="toMain">На главную</div>
<div class="button-link2" @click="toProfile">Личный кабинет</div>

</div>
</div>
</template>

<script>


export default {
  name: 'RegistrationSuccess',
    props: ['onSuccess', 'toggleLoginModal', 'toggleRegisterModal', 'toggleRegistrationSuccessModal', 'toggleRecoveryPasswordModal'],
  methods: {
toProfile(){
  this.toggleRegistrationSuccessModal();
  this.$router.push('/profile');
},
toMain(){
  this.toggleRegistrationSuccessModal();
  this.$router.push('/')
},
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_forms.scss";

</style>
