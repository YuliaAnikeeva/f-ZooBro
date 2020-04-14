<template>
    <div>

        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/login">login</router-link>
            |
            <router-link to="/recovery-password">recovery-password</router-link>
            |
            <router-link to="/profile">profile</router-link>
            |
            <router-link to="/admin">admin</router-link>
            |
            <router-link to="/order">order</router-link>
        </div>
        <hr>

        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
  export default {
    name: 'MainLayout',
  }
</script>

<style scoped>
</style>
