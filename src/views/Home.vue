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
        <div class="block__head">
          <h4 class="block__head-text">Как это работает</h4>
        </div>
        <div class="how-work__container">
          <section class="how-work__section">
            <div class="how-work__image-container">
              <img src="https://via.placeholder.com/190" alt />
            </div>
            <p class="how-work__text">1 шаг : заказать (заполните анкету для индивидуального подбора состава коробки)</p>
          </section>
          <div class="how-work__arrow-container">
            <div class="arrow">
              <span class="arrow__content"></span>
            </div>
          </div>
          <section class="how-work__section">
            <div class="how-work__image-container">
              <img src="https://via.placeholder.com/190" alt />
            </div>
            <p class="how-work__text">2 шаг: Договориться с курьером о дате доставки(чаще всего доставка происходит на следующий день)</p>
          </section>
          <div class="how-work__arrow-container">
            <div class="arrow">
              <span class="arrow__content"></span>
            </div>
          </div>
          <section class="how-work__section">
            <div class="how-work__image-container">
              <img src="https://via.placeholder.com/190" alt />
            </div>
            <p class="how-work__text">3 Шаг: Получить и оплатить (Ура, теперь вы можете побаловать своего питомца новыми игрушками и лакомствами)</p>
          </section>
        </div>
        <div class="order-button">
          <div class="order-button__container">
            <router-link class="order-button__text" to="/order">
              <span>Заказать</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="what-in-box">
        <div class="block__head">
          <h4 class="block__head-text">Что в коробке?</h4>
        </div>
        <div class="what-in-box__container">
          <div class="what-in-box__content">
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">2 мягкие игрушки</h5>
              <p class="what-in-box__content-text-text">Безопасные для игр и долговечные</p>
            </div>
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">2 жевательных лакомства</h5>
              <p
                class="what-in-box__content-text-text"
              >Помогает гигиене полости рта, убирает налет и неприятный запах</p>
            </div>
          </div>
          <div class="what-in-box__content-image">
            <img src="https://via.placeholder.com/690x380" alt="what-in-box image" />
          </div>
          <div class="what-in-box__content">
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">2 упаковки лакомства из мраморной говядины</h5>
              <p
                class="what-in-box__content-text-text"
              >2 упаковки лакомства из мраморной говядины (можно использовать в дрессуре, к тому же они очень вкусные)</p>
            </div>
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Мячик из ворса и резины</h5>
              <p
                class="what-in-box__content-text-text"
              >Мячик из ворса и резины (прослужит долго и поможет увеличить активность собаки на прогулке)</p>
            </div>
          </div>
        </div>
        <div class="order-button">
          <div class="order-button__container">
            <router-link class="order-button__text" to="/order">
              <span>Заказать</span>
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
            <div class="how-use__content-number">1</div>
            <div class="how-use__content-text">Берешь вкусняху</div>
          </div>
          <div class="how-use__content">
            <div class="how-use__content-arrow">
              <div class="arrow">
                <span class="arrow__content arrow__content_rotate30"></span>
              </div>
            </div>
          </div>
          <div class="how-use__content">
            <div class="how-use__content-number">2</div>
            <div class="how-use__content-text">Кидаешь палку</div>
          </div>
          <div class="how-use__content">
            <div class="how-use__content-arrow">
              <div class="arrow">
                <span class="arrow__content arrow__content_rotate-30"></span>
              </div>
            </div>
          </div>
          <div class="how-use__content">
            <div class="how-use__content-number">3</div>
            <div class="how-use__content-text">Кормишь</div>
          </div>
        </div>
      </div>
      <div class="social-mission">
        <div class="block__head">
          <h4 class="block__head-text">Социальная миссия</h4>
        </div>
        <div class="social-mission__container">
          <div class="social-mission__content-image">
            <div class="social-mission__image">
              <img src="https://via.placeholder.com/190x300" alt="">
              <img src="https://via.placeholder.com/190x300" alt="">
            </div>
            <div class="social-mission__image">
              <img src="https://via.placeholder.com/440x250" alt="">
              <img src="https://via.placeholder.com/440x250" alt="">
            </div>
          </div>
          <div class="social-mission__content">
            <p class="social-mission__text-content">
              Не всем пёселям везет жить с хозяевами, получать ласку и заботу. Поэтому с каждой продажи мы перечисляем 5% в пользу приюта ЮЗАО, а так же являемся волонтерами.
            </p>
            <p class="social-mission__text-content">
              Благодаря вашим покупкам, песики получают шанс дожить до счастливой встречи со своим человеком. Все наши отчеты мы публикуем на инстаграм странице проекта, подписывайтесь(ссылка)
            </p>
          </div>
        </div>
      </div>
      <div class="doubt">
        <div class="block__head">
          <h4 class="block__head-text">Социальная миссия</h4>
        </div>
        <section class="doubt__content">
          <div class="doubt__content-image">
            <img src="https://via.placeholder.com/440x250" alt="">
          </div>
          <div class="doubt__content-text">
            <p class="doubt__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure eveniet ab mollitia iste sint quaerat dicta eum quisquam labore ipsum, nisi repellat in nemo cupiditate natus consequuntur quis ipsam! Beatae rem totam esse. Voluptates veritatis mollitia error laudantium impedit reprehenderit, iusto soluta, sunt repellendus facere laborum neque cumque, vel delectus.</p>
            <div class="order-button">
              <div class="order-button__container">
                <router-link class="order-button__text" to="/order">
                  <span>Заказать</span>
                </router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="faq">
        <div class="faq__image"></div>
        <div class="faq__container">
          <h5 class="faq__head">FAQ</h5>
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
      </div>
    </main>
    <footer class="footer">
      <div class="social-icons">
        <div class="social-icons__element"></div>
        <div class="social-icons__element"></div>
        <div class="social-icons__element"></div>
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
    answerFirst: false,
    answerSecond: false,
    answerThird: false,
    answerFourth: false
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
.arrow {
    display: grid;
    height: 100%;
    align-items: center;

  &__content {
    position: relative;
    margin-bottom: 100px;
    display: block;
    width: 160px;
    height: 0px;
    border-top: 1px solid #000000;
    box-sizing: border-box;

    &_rotate30 {
      transform: rotate(30deg);
    }
    &_rotate-30 {
      transform: rotate(-30deg);
    }
  }
  &__content::after {
    content: '';
    position: absolute;
    width: 22px;
    height: 1px;
    top: -8.5px;
    right: -3px;
    background-color: #000;
    transform: rotate(45deg);
  }
  &__content::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 1px;
    top: 6.7px;
    right: -3px;
    background-color: #000;
    transform: rotate(-45deg);
  }

}
.order-button {
  display: grid;
  justify-content: center;

  &__container {
    display: grid;
    align-items: center;
    width: 190px;
    height: 60px;
    background: $buy-btn-color;
    border-radius: 15px;
    border: none;
  }
  &__text {
    display: grid;
    align-items: center;
    width: 190px;
    height: 60px;
    text-decoration: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: $default-text-color;
  }
}
.block {
  &__head {
    display: grid;
    justify-content: center;
    margin-top: 125px;
    margin-bottom: 70px;
  }
  &__head-text {
    width: max-content;
    height: 40px;
    font-family: Montserrat Alternates;
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
    width: 100%;
  }

  &__footer {
    display: block;
  }
}
.main {
}

.order {
  width: 100%;
  height: 989px;
  display: grid;
  border-bottom: 1px #000 solid;
  background: rgba(196, 196, 196, 0.5);

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
    color: $default-text-color;
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
    color: $default-text-color;
    text-align: left;
    margin-bottom: 186px;
  }

  &__button {
    display: grid;
    width: 315px;
    height: 85px;
    background: $buy-btn-color;
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
  align-items: center;
  border-bottom: 1px #000 solid;
  background: rgba(196, 196, 196, 0.5);
  &__arrow-container {
    display: grid;
    height: 100%;
    align-items: center;
  }
  &__container {
    display: grid;
    grid-template-columns: 255px 160px 255px 160px 255px;
    justify-content: center;
    column-gap: 71px;
    margin-bottom: 125px;
  }
  &__text {
    margin-top: 30px;
    width: 282px;
    height: 80px;
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    color: $default-text-color;
    text-align: left;
  }
}

.what-in-box {
  display: grid;
  grid-template-rows: max-content max-content;
  width: 100%;
  height: 810px;
  background: rgba(196, 196, 196, 0.5);
  border-bottom: 1px solid #000000;
  box-sizing: border-box;

  &__head {
    display: grid;
    justify-content: center;
    margin-top: 125px;
    margin-bottom: 70px;
  }
  &__head-text {
    width: 275px;
    height: 40px;
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: $default-text-color;
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2em;
    margin-bottom: 70px;
  }
  &__content {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }
  &__content-text {
    display: grid;
    justify-items: center;
    align-content: flex-start;
  }
  &__content-text:last-child {
    align-content: flex-end;
  }
  &__content-head {
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: 600;
    font-size: 1.143em;
    line-height: 20px;
    color: $default-text-color;
    margin-bottom: 15px;
    width: 15em;
  }
  &__content-text-text {
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: normal;
    font-size: $font-16px;
    line-height: 20px;
    color: $default-text-color;
    text-align: center;
    width: 21.429em;
  }
}
.how-use {
  display: grid;
  grid-template-columns: max-content;
  justify-content: center;
  grid-template-rows: max-content max-content;
  width: 100%;
  height: 800px;
  background: rgba(196, 196, 196, 0.5);
  border-bottom: 1px solid #000000;
  box-sizing: border-box;

  &__container {
    display: grid;
    grid-template-columns: repeat(5, 215px);
    grid-template-rows: repeat(8, 50px);
  }
  &__content {
    display: grid;
    width: 215px;
    &:nth-child(odd) {
      align-self: flex-start;
      grid-row: 1 / 5;
    }
    &:nth-child(even) {
      align-self: flex-end;
      grid-row: 1 / 7;
    }
     &:nth-child(3) {
      align-self: flex-end;
      grid-row: 3 / last;
    }
  }

  &__content-number {
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: 800;
    font-size: 160px;
    line-height: 195px;
  }
  &__content-text {
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }
  &__content-arrow {
    display: grid;
    justify-content: center;
  }
}
.social-mission {
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  width: 100%;
  height: 944px;
  background: rgba(196, 196, 196, 0.5);
  border-bottom: 1px solid #000000;
  box-sizing: border-box;
  &__container {
    display: grid;
    grid-template-columns: 1fr 540px;
    justify-content: center;
    column-gap: 60px;
  }
  &__content {
    display: grid;
    height: 100%;
    font-family: Montserrat Alternates;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #464451;
    align-content: center;
    row-gap: 10px;
    text-align: left;

    &:first-child {
      align-self: flex-end;
    }
    &:last-child {
      align-self: flex-start;
    }
  }
  &__text-content {
    height:50%;
  }

  &__content-image {
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 60px;
  }
  &__image {
    display: grid;
    grid-template-rows: max-content max-content;
    row-gap: 60px;
  }
}
.doubt {
  display: grid;
  justify-content: center;
  grid-template-rows: max-content max-content;
  width: 100%;
  background: rgba(196, 196, 196, 0.5);
  border-bottom: 1px solid #000000;
  box-sizing: border-box;
  padding-bottom: 120px;
  &__content {
    display: grid;
    grid-template-columns: repeat(2, 25%);
    justify-content: center;
  }
  &__content-text {
    width: 70%;
    justify-self: center;
  }
  &__text {
    margin-bottom: 60px;
  }
}
.faq {
  background: #fff;
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(2, 40%);
  justify-content: center;

  &__image {
    background: url('../assets/faq_dog.png') no-repeat;
    background-size: contain;
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }
  &__container {
    background: #FBFBFB;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 80px;
    padding: 100px 124px 100px;
    display: grid;
    grid-template-rows: 4em repeat(4, 4em max-content);
    row-gap: .8em;
    height: 820px;
  }
  &__head {
    font-family: Montserrat;
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
    font-family: Montserrat;
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
    font-family: Montserrat;
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
  width: 100%;
  height: 110px;
  background: #464451;
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
