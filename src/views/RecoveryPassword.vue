<template>
  <div class="container">
      <div class="border">
    <h1>Восстановление пароля</h1>
    <RecoveryPasswordForm />
  </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat');
.container {
  background: #F6FBFE;
  padding: 85px 0;
}
.border{
/* Rectangle 98 */
display: flex;
flex-direction: column;
width: 450px;
height: 550px;
background: #FFFFFF;
border-radius: 20px;
margin: 0px auto;
}

h1{
/* width: 223px;
height: 39px; */
margin: 45px 15px 20px 15px;
justify-content: center;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
/* identical to box height */
letter-spacing: 0.1px;
color: #1A1A22;

}
</style>
