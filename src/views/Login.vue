<template>
    <div class="container">
        <div class="border">
            <h1>Вход</h1>
            <LoginForm :onSuccess="onSuccess"/>
        </div>
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
    @import url('https://fonts.googleapis.com/css2?family=Montserrat');

    .container {
        background: #F6FBFE;
        padding: 85px 0;
    }

    .border {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 450px;
        padding: 50px 0;
        background: #FFFFFF;
        border-radius: 20px;
        margin: 0 auto;
    }

    h1 {
        justify-content: center;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: 0.1px;
        color: #1A1A22;
    }
</style>
