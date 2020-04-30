<template>
    <div id="app">

        <component :is="layout">
            <router-view/>
        </component>

    </div>
</template>

<script>
  import MainLayout from "./layouts/MainLayout";

  export default {
    name: "App",
    components: {MainLayout},
    computed: {
      layout() {
        return (this.$route.meta.layout || 'main') + '-layout';
      },
    },
  }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    h1,h2,h3,h4,h5 {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }

</style>
