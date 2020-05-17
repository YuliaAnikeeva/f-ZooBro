<template>
  <div class="landing-container">
    <!-- <img class="bg-content bg-content__ball" src="../assets/ball_bg.svg" alt="">
    <img class="bg-content bg-content__paw" src="../assets/paw_bg.svg" alt="">
    <img class="bg-content bg-content__box" src="../assets/box_bg.svg" alt="">
    <img class="bg-content bg-content__big-bone" src="../assets/big_bone_bg.svg" alt="">
    <img class="bg-content bg-content__small-bone" src="../assets/small_bone_bg.svg" alt="">
    <img class="bg-content bg-content__paws" src="../assets/paws_bg.svg" alt="">
    <img class="bg-content bg-content__big-box" src="../assets/big-box_bg.svg" alt=""> -->
    <main class="landing-container__main">
      <div class="order">
        <section class="order__container">
          <h1 class="order__head">Любовь и забота хозяина в одной коробочке специально для тебя</h1>
          <p class="order__text">
            Лучше и полезнее, чем обувь хозяина
          </p>
          <router-link class="order-button__text" to="/order">
            <div class="order__button">
              <span class="order__button-text">Заказать</span>
              <img class="paw paw_25" src="../assets/paw.svg" alt="">
            </div>
          </router-link>
        </section>
        <div class="order__images-content">
          <img class="order__images-content_yelow-bone" src="../assets/yelow-bone.svg" alt="">
          <img  class="order__images-content_dog" src="../assets/dog_PNG50331.png" alt="">
        </div>
      </div>
      <div class="how-work">
        <div class="block__head">
          <a name="how-work"></a>
          <h4 class="block__head-text">Как работает сервис</h4>
        </div>
        <div class="how-work__container">
          <section class="how-work__section">
            <div class="how-work__image-container">
              <img src="../assets/how-work-dog-1.png" alt/>
            </div>
            <h5 class="how-work__section-head">Закажи на сайте</h5>
            <p class="how-work__text">Расскажи нам о себе, чтобы мы подобрали то, что тебе точно понравится</p>
          </section>
          <div class="how-work__arrow-container">
            <img src="../assets/arrow_1.svg" alt="">
          </div>
          <section class="how-work__section">
            <div class="how-work__image-container">
              <img src="../assets/how-work-dog-2.png" alt />
            </div>
            <h5 class="how-work__section-head how-work__sectiontrue_margin-b-20">Договорись о доставке</h5>
            <p class="how-work__text">Расскажи как и когда тебе удобнее получить коробочку</p>
          </section>
          <div class="how-work__arrow-container">
              <img src="../assets/arrow_2.svg" alt="">
          </div>
          <section class="how-work__section">
            <div class="how-work__image-container">
              <img src="../assets/how-work-dog-3.png" alt />
            </div>
            <h5 class="how-work__section-head">Получи и оплати</h5>
            <p class="how-work__text">Коробка уже у тебя. Оплати и развлекайся с новыми игрушками!</p>
          </section>
        </div>
        <div class="order-button">
          <div class="order-button__container">
            <router-link class="order-button__text" to="/order">
              <div class="how-work__button">
                <span class="how-work__button-text">Заказать</span>
                <img class="paw paw_25" src="../assets/paw.svg" alt="">
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="what-in-box">
        <div class="block__head">
          <h4 class="block__head-text">Внутри коробки ты найдешь</h4>
        </div>
        <div class="what-in-box__container">
          <div class="what-in-box__content">
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Премиальные вкусняшки-лакомства</h5>
              <p class="what-in-box__content-text-text">Эту вкуснятину можно получить за выполнение команд или просто так, если хозяин тебя очень сильно любит</p>
            </div>
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Жевательные лакомства</h5>
              <p class="what-in-box__content-text-text">Это очень полезно пожевать после еды, вместо чистки зубов. С ними у тебя будет сильная челюсть и свежее дыхание - можно чаще целовать хозяина</p>
            </div>
          </div>
          <div class="what-in-box__content-image">
            <img src="../assets/what-in-box_content.png" alt="what-in-box image" />
          </div>
          <div class="what-in-box__content">
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Мягкие игрушки</h5>
              <p class="what-in-box__content-text-text">Круто пищат или хрустят, когда их жуешь. Они безопасные и долговечные. Их можно порвать и за это ничего не будет</p>
            </div>
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Мячик из ворса и резины</h5>
              <p class="what-in-box__content-text-text">Это вообще кайф. Его можно ощипать или побегать за ним. Принеси хозяину и тебе обязательно перепадет кусочек лакомства</p>
            </div>
          </div>
        </div>
        <div class="order-button">
          <div class="order-button__container">
            <router-link class="order-button__text" to="/order">
              <div class="how-work__button">
                <span class="how-work__button-text">Заказать</span>
                <img class="paw paw_25" src="../assets/paw.svg" alt="">
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="how-use">
        <div class="block__head">
          <h4 class="block__head-text">Как использовать коробку</h4>
        </div>
        <div class="how-use__container">
          <div class="how-use__content">
            <img class="how-use__content-image" src="../assets/how-use-1.png" alt="">
            <div class="how-use__content-text">Твой любимый хозяин берет новый мячик из коробки, кидает его тебе</div>
          </div>
          <div class="how-use__content">
            <div class="how-use__content-arrow how-use__content-arrow_rotate-left">
              <img src="../assets/arrow_1.svg" alt="">
            </div>
          </div>
          <div class="how-use__content">
            <img class="how-use__content-image" src="../assets/how-use-2.png" alt="">
            <div class="how-use__content-text">Ты приносишь его обратно</div>
          </div>
          <div class="how-use__content">
            <div class="how-use__content-arrow how-use__content-arrow_rotate-right">
              <img src="../assets/arrow_2.svg" alt="">
            </div>
          </div>
          <div class="how-use__content">
            <img class="how-use__content-image" src="../assets/how-use-3.png" alt="">
            <div class="how-use__content-text">Получаешь за это лакомство</div>
          </div>
        </div>
      </div>
      <div class="social-mission">
        <div class="block__head">
          <h4 class="block__head-text">Социальная миссия</h4>
        </div>
        <div class="social-mission__container">
          <div class="social-mission__content">
            <p class="social-mission__text-content">
              5% от стоимости твоей коробки мы передадим в виде помощи приютским и бездомным собакам.
              Это позволит им скрасить ожидание таких же любящих хозяев, как у тебя, а может даже и спасти жизнь.
            </p>
            <p class="social-mission__text-content">
              В нашем инстаграме сможешь увидеть, как именно ты помог, если подпишешься на нас.
            </p>
          </div>
          <div class="social-mission__content-image">
            <div class="social-mission__image social-mission__image_one">
              <img src="../assets/social-dogs-1.png" alt="">
            </div>
            <div class="social-mission__image social-mission__image_two">
              <img src="../assets/social-dogs-2.png" alt="">
              <img src="../assets/social-dogs-3.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="doubt">
        <div class="block__head">
          <h4 class="block__head-text">Еще сомневаешься?</h4>
        </div>
        <div class="doubt__container">
          <div class="doubt__image-container">
            <img class="doubt__image" src="../assets/doubt_image_1.png" alt="">
            <img class="doubt__image" src="../assets/doubt_image_2.png" alt="">
            <img class="doubt__image" src="../assets/doubt_image_3.png" alt="">
            <img class="doubt__image" src="../assets/doubt_image_4.png" alt="">
            <img class="doubt__image" src="../assets/doubt_image_5.png" alt="">
          </div>
          <p class="doubt__text">
            Еще сомневаешься, подходит тебе это или нет? <br>
            Попробуй стартовый набор за 3 клика. <br>
            Уверяем, твой хвост будет вилять как пропеллер, а хвост никогда не обманывает <br>
          </p>
          <div class="order-button">
            <div class="order-button__container">
              <router-link class="order-button__text" to="/order">
                <div class="how-work__button">
                  <span class="how-work__button-text">Заказать</span>
                  <img class="paw paw_25" src="../assets/paw.svg" alt="">
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="faq">
        <div class="faq__container">
          <div>
            <a name="faq"></a>
            <h5 class="faq__head">FAQ</h5>
          </div>
          <div class="faq__question" @click="answerFirst = !answerFirst">
            <span class="faq__question-text">А доставка бесплатная?</span>
            <div class="faq__plus-minus">
              <i :class="{rotate: !answerFirst}"></i>
            </div>
          </div>
          <div class="faq__answer" :class="{faq__answer_collapse: answerFirst}">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, delectus porro amet ipsam veniam debitis!
          </div>
          <div class="faq__question" @click="answerSecond = !answerSecond">
            <span class="faq__question-text">Моей собаке это точно понравится?</span>
            <div class="faq__plus-minus">
              <i :class="{rotate: !answerSecond}"></i>
            </div>
          </div>
            <div class="faq__answer" :class="{faq__answer_collapse: answerSecond}">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequatur fugit quis voluptate tempora cum.
            </div>
          <div class="faq__question" @click="answerThird = !answerThird">
            <span class="faq__question-text">А это подходит разным породам?</span>
            <div class="faq__plus-minus">
              <i :class="{rotate: !answerThird}"></i>
            </div>
          </div>
          <div class="faq__answer" :class="{faq__answer_collapse: answerThird}">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus mollitia deserunt magnam ea excepturi? Sit?
          </div>
          <div class="faq__question" @click="answerFourth = !answerFourth">
            <span class="faq__question-text">Когда оплачивать покупку?</span>
            <div class="faq__plus-minus">
              <i :class="{rotate: !answerFourth}"></i>
            </div>
          </div>
          <div class="faq__answer" :class="{faq__answer_collapse: answerFourth}">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas officiis facilis nam vitae odit facere?
          </div>
          <div class="faq_plus-minus"></div>
        </div>
        <div class="faq__image"></div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__container">
        <div class="social-icons">
          <a class="social-icons__element" href="">
            <img src="../assets/instagram.svg" alt="">
          </a>
          <a class="social-icons__element" href="">
            <img src="../assets/vk.svg" alt="">
          </a>
          <a class="social-icons__element" href="">
            <img src="../assets/tiktok.svg" alt="">
          </a>
        </div>
        <div class="footer__contacts">
          <div class="footer__contacts-row">
            Phone: +7 (925)-112-08-12
          </div>
          <div class="footer__contacts-row">
            E-mail: hello_bro@zoobro.ru
          </div>
        </div>
      </div>
      <div class="footer__image">
        <a name="contacts"></a>
        <img src="../assets/footer_pows.svg" alt="">
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: "Home",
  metaInfo: {
    title: "Home"
  },
  data: () => ({
    answerFirst: true,
    answerSecond: true,
    answerThird: true,
    answerFourth: true
  }),
  components: {}
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

.router-link {
  text-decoration: none;
}
footer,
main {
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

@media screen and (max-width: 1280px) and (min-width: 922px) {
  .landing-container {
    &__header {
      background-color: #f2222f;
      width: 100%;
      height: 100px;
    }
  }
}
.paw {
  display: block;
  fill: #FAFAFA;

  &_25{
    width: 25px;
    height: 20px;
  }
}
// .arrow {
//     display: grid;
//     height: 100%;
//     align-items: center;

//   &__content {
//     position: relative;
//     margin-bottom: 100px;
//     display: block;
//     width: 160px;
//     height: 0px;
//     border-top: 1px solid #000000;
//     box-sizing: border-box;

//     &_rotate30 {
//       transform: rotate(30deg);
//     }
//     &_rotate-30 {
//       transform: rotate(-30deg);
//     }
//   }
//   &__content::after {
//     content: '';
//     position: absolute;
//     width: 22px;
//     height: 1px;
//     top: -8.5px;
//     right: -3px;
//     background-color: #000;
//     transform: rotate(45deg);
//   }
//   &__content::before {
//     content: '';
//     position: absolute;
//     width: 22px;
//     height: 1px;
//     top: 6.7px;
//     right: -3px;
//     background-color: #000;
//     transform: rotate(-45deg);
//   }

// }

.bg-content {
  position: fixed;
  z-index: 5;
  &__paw {
    left: 93vw;
    top:10vw;
  }
  &__box {
    left: 30vw;
    top: 75vh;
  }

  &__ball {
    left: 0;
    top: 20vh;
  }
  &__big-bone {
    top: 40vh;
    left: 85vw;
  }
  &__small-bone {
    left: 35vw;
    top: 65vh;
  }
  &__paws {
    left: 30vw;
  }
  &__big-box {
    left: 0;
    top: 70vh
  }
}

.order-button {
  display: grid;
  justify-content: center;

  &__container {
    display: grid;
    align-items: center;
    background: $buy-btn-color;
    border-radius: 15px;
    border: none;
    z-index: 6;
  }
  &__text {
    display: grid;
    align-items: center;
    text-decoration: none;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: $default-text-color;
    width: max-content;
  }
}
.block {
  &__head {
    display: grid;
    justify-content: center;
    margin-bottom: 70px;
  }
  &__head-text {
    width: max-content;
    height: 40px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: $default-text-color;
  }
}
.landing-container {
  background: #f6f6fa;

  &__main {
    display: grid;
    grid-template-columns: 100%;
    overflow: hidden;
    position: relative;
  }

  &__footer {
    display: block;
  }
}
.main {
}

.order {
  width: 100%;
  height: 787px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(163.79deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);

  &__container {
    display: grid;
    grid-template-rows: repeat(3, max-content);
    width: 50%;
    padding-top: 161px;
    padding-left: 240px;
  }

  &__head {
    margin-bottom: 70px;
    width: 700px;
    height: 177px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 59px;
    color: #FFFFFF;
    text-align: left;
  }

  &__text {
    width: 620px;
    height: 34px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 1px;
    color: #FFFFFF;
    text-align: left;
    margin-bottom: 100px;
  }

  &__button {
    display: grid;
    grid-template-columns: 5fr 1fr;
    background: $buy-btn-color;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    margin: 0 506px 0 0;
    padding: 16px 18px 17px 62px;
    cursor: pointer;
  }
  &__button:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  &__button-text {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    text-align: left;
    letter-spacing: 0.2px;
    color: #464451;
  }
  &__images-content {
    overflow:initial;
    width: 100%;
    position: relative;
    &_yelow-bone {
      width: max-content;
      position: absolute;
      left: -16vh;
      top: 5vh;
      z-index: 100;
    }
    &_dog {
      position: absolute;
      width: max-content;
      left: -9vh;
      top: 35vh;
      z-index: 101;
    }
  }
}

.how-work {
  padding: 301px 365px 150px;
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: 100%;
  align-items: center;
  background: #fff;
  row-gap: 80px;
  &__arrow-container {
    display: grid;
    height: 100%;
    align-items: center;
  }
  &__container {
    display: grid;
    width: max-content;
    grid-template-columns: repeat(5, 190px);
    justify-content: center;
    column-gap: 60px;
    z-index: 6;
  }
  &__text {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #464451;
  }
  &__section {
    display: grid;
    grid-template-rows: max-content max-content max-content;
    row-gap: 20px;
  }
  &__section-head {
    width: 190px;
    height: 24px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #464451;
    &_margin-b-20 {
      margin-bottom: 20px;
    }
  }
  &__image-container {
    width: max-content;
  }
  &__button {
    padding: 14px 25px 15px 64px;
    cursor: pointer;
    display: grid;
    grid-template-columns: 5fr 1fr;
    align-items: center;
    background: #FFCC01;
    border-radius: 15px;
    border: none;
  }
  &__button:hover {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  &__button-text {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #464451;
    margin-right: 15px;
  }
}

.what-in-box {
  display: grid;
  grid-template-rows: max-content max-content;
  width: 100%;
  background: url('../assets/what-in-box_bg.svg');
  box-sizing: border-box;
  padding: 120px 240px 93px;

  &__head {
    display: grid;
    justify-content: center;
    margin-top: 125px;
    margin-bottom: 70px;
  }
  &__head-text {
    width: 275px;
    height: 40px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: $default-text-color;
  }
  &__container {
    display: grid;
    grid-template-columns: 22% 50% 22%;
    column-gap: 2em;
    margin-bottom: 70px;
    z-index: 6;
    justify-content: center;
  }
  &__content {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    row-gap: 320px;
  }
  &__content-text {
    display: grid;
    justify-items: center;
    align-content: flex-start;
  }
  &__content-text:last-child {
    align-content: flex-end;
  }
  &__content-image {
    display: grid;
    align-items: center;
  }
  &__content-head {
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #464451;
    margin-bottom: 20px;
  }
  &__content-text-text {
    width: 100%;
    height: 80px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #464451;
  }
}
.how-use {
  padding: 150px 0;
  display: grid;
  width: 100%;
  grid-template-columns: max-content;
  justify-content: center;
  background: #fff;
  z-index: 6;

  &__container {
    display: grid;
    grid-template-columns: repeat(5, max-content);
    column-gap: 60px;
  }
  &__content {
    display: grid;
  }

  &__content-image {
    width: max-content;
  }
  &__content-text {
    width: 190px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #464451;
  }
  &__content-arrow {
    display: grid;
    justify-content: center;
    align-items: center;
    z-index: 6;
    &_rotate-right {
      transform: rotate(20deg);
    }
    &_rotate-left {
      transform: rotate(-20deg);
    }
  }
}
.social-mission {
  display: grid;
  justify-content: center;
  grid-template-columns: 100%;
  padding: 120px 0 120px;
  background: linear-gradient(176.37deg, #157DA9 12.91%, rgba(50, 157, 202, 0.82) 58.13%, #1489BB 92.45%);
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  &__container {
    display: grid;
    grid-template-columns: 29% 37%;
    justify-content: center;
    column-gap: 60px;
    z-index: 6;
  }
  &__content {
    display: grid;
    height: 100%;
    align-content: start;
    text-align: left;

  }
  &__text-content {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    color: #FFFFFF;
  }

  &__content-image {
    display: grid;
    grid-template-columns: max-content max-content;
  }
  &__image {
    display: grid;

    &_one {

    }
  }
}
.doubt {
  display: grid;
  justify-content: center;
  grid-template-rows: max-content max-content;
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  padding-top: 150px;
  &__container {
    display: grid;
    grid-template-rows: max-content max-content max-content ;
    z-index: 6;
  }
  &__image-container {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 2fr 1fr;
    column-gap: 10px;
    align-items: center;
    justify-items: center;
  }
  &__text {
    margin: 80px auto 60px auto;
    width: 40%;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #464451;
  }
}
.faq {
  background: #fff;
  padding: 170px 0 35px 0;
  display: grid;
  grid-template-rows: 3fr 318px;
  z-index: 6;
  grid-template-columns: 100%;
  row-gap: 153px;

  &__image {
    background: url(/img/faq_dog.a8a2bd2e.png) no-repeat;
    background-size: contain;
    width: 50%;
    justify-self: right;
  }
  &__container {
    width: 49%;
    background: #FBFBFB;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 80px;
    padding: 100px 124px 100px;
    display: grid;
    grid-template-rows: 4em repeat(4, 4em max-content);
    row-gap: .8em;
    z-index: 6;
    justify-self: center;
  }
  &__head {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #464451;
  }
  &__question {
    display: grid;
    grid-template-columns: 4fr 1fr;;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    background: #2289B5;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    padding: 0 20px;
    text-align: left;
    margin: 0 0 10px 0;
  }
  &__answer {
    overflow: hidden;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: #464451;
    height: 100%;
    opacity: 1;
    transition: height 300ms ease-out, opacity 300ms ease-out;
    &_collapse {
      opacity: 0;
      height: 0;
      // animation: collapse .3s .3s linear;
      // animation-iteration-count: 1;
    }
  }
  &__plus-minus {
    display: grid;
    align-items: center;
    justify-items: end;
    padding-right: 10px;

    & i {
      position: relative;
      display: block;
    }
    & i::before {
      position: absolute;
      display: block;
      content: '';
      width: 22px;
      height: 4px;
      background-color: #fff;
      transform: rotate(90deg);
      transition-duration: .3s;
      overflow: hidden;

    }
    & i::after {
      position: absolute;
      content: '';
      width: 22px;
      height: 4px;
      background-color: #fff;
    }
    & .rotate::before {
      transform: rotate(0deg);
      transition-duration: .3s;
    }
  }
}
.footer {
  position: relative;
  padding: 32px 0 33px 253px;
  z-index: 1000;
  background: #464451;
  display: grid;
  grid-template-columns: 80% 20%;
  justify-content: space-between;
  &__container {
    display: grid;
    grid-template-columns: 20% 20%;
    justify-content: space-between;
  }
  &__contacts {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    text-align: left;
  }
  &__contacts-row {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

  }
  &__image {
    position: absolute;
    left: 93vw;
    bottom: 1px;
  }
}

.social-icons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
}
@keyframes collapse {
  from {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
