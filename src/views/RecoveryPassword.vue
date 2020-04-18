<template>
  <div>
    <h1>Восстановление пароля</h1>
    <RecoveryPasswordForm />
  </div>
</template>

<script>
  import RecoveryPasswordForm from '../components/RecoveryPasswordForm'

  export default {
    name: 'RecoveryPassword',
    metaInfo: {
      title: 'RecoveryPassword',
    },
    components: { RecoveryPasswordForm }
  }
</script>

<style scoped>

</style>
