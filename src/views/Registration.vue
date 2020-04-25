<template>
  <div>
    <h1>Registration</h1>
    <RegistrationForm :onSuccess="onSuccess"/>
  </div>
</template>

<script>
  import RegistrationForm from '../components/RegistrationForm'

  export default {
    name: 'Registration',
    metaInfo: {
      title: 'Registration',
    },
    components: { RegistrationForm },
    methods: {
      onSuccess () {
        this.$router.push('/profile')
      }
    }
  }
</script>

<style scoped>

</style>
