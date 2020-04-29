<template>
  <div class="landing-container">
    <header class="landing-container__header">
      <nav class="landing-header__nav-menu">NAV MENU</nav>
    </header>
    <main class="landing-container__main">
      <div class="main__first-block"></div>
      <div class="main__second-block"></div>
      <div class="main__third-block"></div>
      <div class="main__map"></div>
      <div class="main__image-gallery"></div>
    </main>
    <footer class="landing">FOOTER</footer>
  </div>

</template>

<script>

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {

  }
}
</script>

<style lang="scss">
//variables
$color-main: #214142;

@media screen and (max-width: 575px) {
  .landing-container {
    display: grid;
    grid-template-rows: 100px max-content 200px;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    &__header {
      background-color: #217121;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .landing-container {
    display: grid;
    grid-template-rows: 100px max-content 200px;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    &__header {
      background-color: #fafa;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (max-width: 921px) and (min-width: 768px) {
  .landing-container {
    display: grid;
    grid-template-rows: 100px max-content 200px;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    &__header {
      background-color: #aa222f;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (max-width: 1280px) and (min-width: 922px){
  .landing-container {
    display: grid;
    grid-template-rows: 100px max-content 200px;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    &__header {
      background-color: #f2222f;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .landing-container {
    display: grid;
    grid-template-rows: 100px max-content 200px;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    width: 100vw;
    height: 100vh;

    &__header {
      background-color: $color-main;
      width: 100%;
      height: 100px;
    }
  }
}

</style>
