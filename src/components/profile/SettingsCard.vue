<template>
  <div id="settings">
    <h2>Settings</h2>
    <div id="settings-form">
      <label>
        <h3>Email:</h3>
        <input type="email" v-model="profile.email">
      </label>
      <label>
        <h3>Phone number:</h3>
        <input type="email" v-model="profile.phone">
      </label>
      <label>
        <h3>Address:</h3>
        <input type="email" v-model="profile.address">
      </label>
      <label>
        <h3>Password:</h3>
        <input type="password" v-model="pass">
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
  data() {
    return {
      pass: 'qwerty123Ytrewq'
    }
  },
  mounted() {
    document.querySelectorAll('input').forEach(el => {
      el.disabled = true
    })
  }
}
</script>

<style lang="scss" scoped>
  #settings-form {
    background: #f3f4f7;
    margin-left: 30%;
    margin-right: 30%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  
  input {
    width: 60%;
  }
</style>