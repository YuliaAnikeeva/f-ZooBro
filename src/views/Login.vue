<template>
  <div>
    <h1>Вход</h1>
    <LoginForm :onSuccess="onSuccess"/>
  </div>
</template>

<script>
  import LoginForm from '../components/LoginForm'

  export default {
    name: 'Login',
    metaInfo: {
      title: 'Login',
    },
    components: { LoginForm },
    methods: {
      onSuccess () {
        this.$router.push('/profile')
      }
    }
  }
</script>

<style scoped>

</style>
