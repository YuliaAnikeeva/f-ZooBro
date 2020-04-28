<template>
  <div class="landing-container">
    <main class="landing-container__main">
      <div class="order">
        <section class="order__container">
          <h1 class="order__head">Персональная коробка счастья для вашей собаки</h1>
          <p class="order__text">
            Станьте еще ближе друг другу.
            Яркие эмоции гарантированы для всех
          </p>
          <div class="order__button">
            <span class="order__button-text">Заказать</span>
          </div>
        </section>
      </div>
      <div class="how-work">
        <div class="how-work__head">
          <h4 class="how-work__head-text">Как это работает</h4>
        </div>
        <div class="how-work__container">
          <section class="how-work__section">
            <div class="how-work__image-container"><img src="https://via.placeholder.com/190" alt=""></div>
            <p class="how-work__text">1 шаг : заказать (заполните анкету для индивидуального подбора состава коробки)</p>
          </section>
          <div class="how-work__arrow-container">
            <span class="how-work__arrow"></span>
          </div>
          <section class="how-work__section">
            <div class="how-work__image-container"><img src="https://via.placeholder.com/190" alt=""></div>
            <p class="how-work__text">2 шаг: Договориться с курьером о дате доставки(чаще всего доставка происходит на следующий день)</p>
          </section>
          <div class="how-work__arrow-container">
            <span class="how-work__arrow"></span>
          </div>
          <section class="how-work__section">
            <div class="how-work__image-container"><img src="https://via.placeholder.com/190" alt=""></div>
            <p class="how-work__text">3 Шаг: Получить и оплатить (Ура, теперь вы можете побаловать своего питомца новыми игрушками и лакомствами)</p>
          </section>
        </div>
        <div class="how-work__order-button-container">
          <div class="how-work__order-button">
            <router-link class="how-work__order-button-text" to="/order">Заказать</router-link>
          </div>
        </div>
      </div>
      <div class="main__third-block"></div>
      <div class="main__"></div>
      <div class="main__image-gallery"></div>
    </main>
    <footer class="landing-container__footer">FOOTER</footer>
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

<style scoped lang="scss">
.router-link {
  text-decoration: none;
}
//variables
$color-main: #214142;
footer,main {
  display: block;
}
@media screen and (max-width: 575px) {
  .landing-container {

    &__header {
      background-color: #217121;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (min-width: 576px) and (max-width: 767px) {
  .landing-container {

    &__header {
      background-color: #fafa;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (max-width: 921px) and (min-width: 768px) {
  .landing-container {

    &__header {
      background-color: #aa222f;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (max-width: 1280px) and (min-width: 922px){
  .landing-container {
    &__header {
      background-color: #f2222f;
      width: 100%;
      height: 100px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .landing-container {
    background: #F6F6FA;

    &__main {
      width: 100%;
    }

    &__footer {
      display: block;
    }
  }
  .main{
  }

  .order {
    width: 100%;
    height: 989px;
    display: grid;
    border-bottom: 1px #000 solid;

    &__container {
      display: grid;
      grid-template-rows: repeat(3, max-content);
      width: 50%;
      padding-top: 199px;
      padding-left: 240px;
    }

    &__head {
      margin-bottom: 88px;
      width: 756px;
      height: 118px;
      font-family: Montserrat Alternates;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 59px;
      color: #464451;
      text-align: left;
    }

    &__text {
      width: 556px;
      height: 72px;
      font-family: Montserrat Alternates;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 1px;
      color: #464451;
      text-align: left;
      margin-bottom: 186px;
    }

    &__button {
      display: grid;
      width: 315px;
      height: 85px;
      background: #FFCC01;
      border-radius: 15px;
      justify-content: center;
      align-items: center;
      margin-left: 125px;
    }
    &__button-text {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 28px;
      line-height: 34px;
    }
  }

  .how-work {
    width: 100%;
    height: 929px;
    display: grid;
    grid-template-rows: max-content max-content max-content;
    row-gap: 125px;
    align-items: center;
    border-bottom: 1px #000 solid;

    &__head {
      margin: 125px auto 0;
    }
    &__head-text {
      width: 349px;
      height: 39px;
      font-family: Montserrat Alternates;
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
      color: #464451;
    }
    &__container {
      display: grid;
      grid-template-columns: 255px 160px 255px 160px 255px;
      justify-content: center;
      column-gap: 71px;
    }
    &__arrow-container {
      display: grid;
      height: 100%;
      align-items: center;
    }
    &__arrow {
      margin-bottom: 100px;
      display: block;
      width: 160px;
      height: 0px;
      border: 1px solid #000000;
      box-sizing: border-box;
    }
    &__text{
      margin-top: 30px;
      width: 282px;
      height: 80px;
      font-family: Montserrat Alternates;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #464451;
      text-align: left;
    }
    &__order-button {
      width: 190px;
      height: 60px;
      background: #FFCC01;
      border-radius: 15px;
      border: none;
    }
    &__order-button-text {
      width: 190px;
      height: 60px;
      text-decoration: none;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #464451;
    }
  }
}

</style>
