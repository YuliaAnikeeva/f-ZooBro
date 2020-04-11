<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to GB ZooBro"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home',
  },
  components: {
    HelloWorld
  }
}
</script>
