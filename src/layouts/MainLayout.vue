<template>
    <div>

        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>

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
