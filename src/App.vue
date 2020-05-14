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
    data() {
    return {
      showModal: this.$route.meta.showModal
    }
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
      z-index: 6;
    }
    a {
      text-decoration: none;
    }
    div {
      display: block;
    }

    .toastify {
        font-family: Montserrat, serif;
        font-style: normal;
        font-size: 16px;
    }

</style>
