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
          <img  class="order__images-content_dog-mobile" src="../assets/dog_mobile.png" alt="">
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
            <h5 class="how-work__section-head">Договорись о доставке</h5>
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
          <h4 class="block__head-text block__head-text_white">Внутри коробки ты найдешь</h4>
        </div>
        <div class="what-in-box__container">
          <div class="what-in-box__content">
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Премиальные вкусняшки-лакомства</h5>
              <img class="what-in-box__content-image_mobile" src="../assets/what-in-box-1.png" alt="">
              <p class="what-in-box__content-text-text">Эту вкуснятину можно получить за выполнение команд или просто так, если хозяин тебя очень сильно любит</p>
            </div>
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Жевательные лакомства</h5>
              <img class="what-in-box__content-image_mobile" src="../assets/what-in-box-2.png" alt="">
              <p class="what-in-box__content-text-text">Это очень полезно пожевать после еды, вместо чистки зубов. С ними у тебя будет сильная челюсть и свежее дыхание - можно чаще целовать хозяина</p>
            </div>
          </div>
          <div class="what-in-box__content-image-container">
            <div class="what-in-box__content-image"></div>
          </div>
          <div class="what-in-box__content">
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Мягкие игрушки</h5>
              <img class="what-in-box__content-image_mobile" src="../assets/what-in-box-3.png" alt="">
              <p class="what-in-box__content-text-text">Круто пищат или хрустят, когда их жуешь. Они безопасные и долговечные. Их можно порвать и за это ничего не будет</p>
            </div>
            <div class="what-in-box__content-text">
              <h5 class="what-in-box__content-head">Мячик из ворса и резины</h5>
              <img class="what-in-box__content-image_mobile" src="../assets/what-in-box-4.png" alt="">
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
        <div class="how-use__head">
          <h4 class="how-use__head-text">Как использовать коробку</h4>
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
          <h4 class="block__head-text block__head-text_white">Социальная миссия</h4>
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
            <div class="social-mission__image">
              <img class="social-mission__image_one" src="../assets/social-dogs-1.png" alt="">
            </div>
            <div class="social-mission__image">
              <img class="social-mission__image_two" src="../assets/social-dogs-2.png" alt="">
              <img class="social-mission__image_two" src="../assets/social-dogs-3.png" alt="">
            </div>
            <Swiper class="social-mission__image-carousel" :options="socialMissionSliderOptions">
              <SwiperSlide>
                <img class="social-mission__image_one" src="../assets/social-dogs-1.png" alt="">
              </SwiperSlide>
              <SwiperSlide>
                <img class="social-mission__image_two" src="../assets/social-dogs-2.png" alt="">
              </SwiperSlide>
              <SwiperSlide>
                <img class="social-mission__image_two" src="../assets/social-dogs-3.png" alt="">
              </SwiperSlide>
              <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
          </div>
        </div>
      </div>

      <div class="doubt">
        <div class="block__head">
          <h4 class="block__head-text">Еще сомневаешься?</h4>
        </div>
        <div class="doubt__container">
          <div class="doubt__image-container">
            <Swiper class="doubt__slider" :options="doubtSliderOptions">
              <SwiperSlide class="doubt__slide">
                <img class="doubt__image" src="../assets/doubt_image_1.png" alt="">
              </SwiperSlide>
              <SwiperSlide class="doubt__slide">
                <img class="doubt__image" src="../assets/doubt_image_2.png" alt="">
              </SwiperSlide>
              <SwiperSlide class="doubt__slide">
                <img class="doubt__image" src="../assets/doubt_image_3.png" alt="">
              </SwiperSlide>
              <SwiperSlide class="doubt__slide">
                <img class="doubt__image" src="../assets/doubt_image_4.png" alt="">
              </SwiperSlide>
              <SwiperSlide class="doubt__slide">
                <img class="doubt__image" src="../assets/doubt_image_5.png" alt="">
              </SwiperSlide>
            </Swiper>
          </div>
          <p class="doubt__text">
            Закажи коробочку за 2 минуты, введя минимум данных
          </p>
          <div class="order-button">
            <div class="order-button__container">
              <router-link class="order-button__text" to="/fast-order">
                <div class="how-work__button">
                  <span class="how-work__button-text">Быстрый заказ</span>
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
            Да, доставка бесплатная для Москвы в пределах МКАД, а также в Северном и Южном Бутово. В другие районы, которые не вошли в этот список, доставка по согласованию с менеджером.
          </div>
          <div class="faq__question" @click="answerSecond = !answerSecond">
            <span class="faq__question-text">Моей собаке это точно понравится?</span>
            <div class="faq__plus-minus">
              <i :class="{rotate: !answerSecond}"></i>
            </div>
          </div>
            <div class="faq__answer" :class="{faq__answer_collapse: answerSecond}">
              Мы гарантируем, что содержимое коробочки обязательно понравится вашему четвероногому другу, это подтверждается не только нашими собственными собаками, но и нашими любимыми покупателями.
              Если не понравится - звоните.
            </div>
          <div class="faq__question" @click="answerThird = !answerThird">
            <span class="faq__question-text">Когда оплачивать покупку?</span>
            <div class="faq__plus-minus">
              <i :class="{rotate: !answerThird}"></i>
            </div>
          </div>
          <div class="faq__answer" :class="{faq__answer_collapse: answerThird}">
            Вы оплачиваете коробочку только после того, как получили её от курьера. Вы ничем не рискуете.
          </div>
          <div class="faq_plus-minus"></div>
        </div>
        <div class="faq__image"></div>
      </div>
    </main>
    <footer class="footer">
      <div class="footer__container">
        <div class="social-icons">
          <a class="social-icons__element" href="https://instagram.com/zoobro.ru" target="_blank">
            <img src="../assets/instagram.svg" alt="">
          </a>
          <a class="social-icons__element" href="https://vk.com/zoobro" target="_blank">
            <img src="../assets/vk.svg" alt="">
          </a>
          <a class="social-icons__element" href="https://vm.tiktok.com/EE6cxM/" target="_blank">
            <img src="../assets/tiktok.svg" alt="">
          </a>
        </div>
        <div class="footer__contacts">
          <div class="footer__contacts-row">
            Phone: <a href="tel:+79251120812">+7 (925)-112-08-12</a>
          </div>
          <div class="footer__contacts-row">
            E-mail: <a href="mailto:hello_bro@zoobro.ru">hello_bro@zoobro.ru</a>
          </div>
        </div>
      </div>
      <div class="footer__image">
        <a name="contacts"></a>
        <img src="../assets/footer_pows.svg" alt="">
      </div>
    </footer>
    <vue-modaltor
                    :visible="loginModal"
                    :resize-width='{1920:"440px",1440:"440px", 414:"390px", 375:"355px", 360:"340px", 320:"310px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="loginModal = false">
                <LoginForm

                        :toggleLoginModal="toggleLoginModal"

                />
                 <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>
   <vue-modaltor
                    :visible="changePasswordModal"
                    :resize-width='{1920:"440px", 1440:"440px", 414:"390px", 375:"355px", 360:"340px", 320:"310px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="changePasswordModal = false">
                <ChangePassword
                        :toggleLoginModal="toggleLoginModal"
                        :toggleChangePasswordModal="toggleChangePasswordModal"                />
                <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>
               <vue-modaltor
                    :visible="newPasswordModal"
                    :resize-width='{1920:"440px", 1440:"440px", 414:"390px", 375:"355px", 360:"340px", 320:"310px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="newPasswordModal = false">
                <NewPassword
                        :toggleLoginModal="toggleLoginModal"
                        :toggleNewPasswordModal="toggleNewPasswordModal"
                        :toggleChangePasswordModal="toggleChangePasswordModal"                />
                <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>
             <vue-modaltor
                    :visible="registrationSuccessModal"
                    :resize-width='{1920:"440px", 1440:"440px", 414:"390px", 375:"355px", 360:"340px", 320:"310px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="registrationSuccessModal = false">
                <RegistrationSuccess
                        :onSuccess="toggleRegistrationSuccessModal"
                        :toggleLoginModal="toggleLoginModal"
                        :toggleNewPasswordModal="toggleNewPasswordModal"
                        :toggleRegistrationSuccessModal="toggleRegistrationSuccessModal"

                />
                <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>
  </div>


</template>


<script>
import ChangePassword from '../components/ChangePassword'
import LoginForm from '../components/LoginForm'
import NewPassword from '../components/NewPassword'
import RegistrationSuccess from '../components/RegistrationSuccess'

import '../swiperZoomEffect'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Лакомства и игрушки для собак'
  },
  data: () => ({
    answerFirst: true,
    answerSecond: true,
    answerThird: true,
    changePasswordModal:false,
    loginModal:false,
    registrationSuccessModal: false,
    newPasswordModal:false,
    socialMissionSliderOptions: {
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    },
    doubtSliderOptions: {
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
      },
      slidesPerView: 'auto',
      speed: 1000,
      effect: 'zoom',
      // spaceBetween: 20,
      zoomEffect: {
        scale: 0.8,
        space: 20,
      },
    },
  }),
  components: {ChangePassword, LoginForm, NewPassword, RegistrationSuccess, Swiper, SwiperSlide},
  mounted() {
    const url = this.$route.query
    if (url['reset-password']){
      this.changePasswordModal=true
      const resetPassword = url['reset-password']
    }
  },
  methods:{
    toggleChangePasswordModal(){
        this.changePasswordModal = !this.changePasswordModal
      },
       toggleLoginModal(){
        this.loginModal = !this.loginModal
      },
      toggleNewPasswordModal(){
        this.newPasswordModal = !this.newPasswordModal
      },
      toggleRegistrationSuccessModal(){
        this.registrationSuccessModal = !this.registrationSuccessModal
      },
  }

}
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

  .paw {
  display: block;
  fill: #FAFAFA;

  &_25{
    width: 25px;
    height: 20px;
  }
  }

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

    &_white {
      color: #fff;
    }
  }
}
.landing-container {
  background: #fff;
  background-image: url('../assets/back-land-1920.svg');
  background-position: center 1200px;
  // animation: animatedBackground 60s linear infinite;
	// -moz-animation: animatedBackground 60s linear infinite;
	// -webkit-animation: animatedBackground 60s linear infinite;
 	// -o-animation: animatedBackground 60s linear infinite;
  //  @keyframes animatedBackground {
  //   0 {
  //       background-position: 0 0
  //   }
  //   100% {
  //       background-position: -600px 600px /* анимируем свойство background-position */
  //   }
  //  }
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
  background: url('../assets/back-order-1920.svg') no-repeat, linear-gradient(163.79deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);

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
      position: absolute;
      width: max-content;
      right: 0;
      top: 30px;
      z-index: 100;
    }
    &_dog {
      position: absolute;
      width: max-content;
      right: 50px;
      top: 280px;
      z-index: 101;
    }
    &_dog-mobile {
      position: absolute;
      display: none;
    }
  }
}

.how-work {
  padding: 301px 0 150px;
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: 100%;
  align-items: center;
  justify-items: center ;
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
    background: $buy-btn-color;
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
  grid-template-columns: 77%;
  justify-content: center;
  grid-template-rows: max-content max-content;
  width: 100%;
  background:url('../assets/back-inside-1920.svg') no-repeat bottom, linear-gradient(158.25deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);
  box-sizing: border-box;
  padding: 120px 0 93px;
  color: #fff;

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
  }
  &__container {
    display: grid;
    grid-template-columns: 314px 774px 314px;
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
  &__content-image-container {
    display: grid;
  }
  &__content-image {
    display: grid;
    width: 828.18px;
    height: 709.89px;
    display: grid;
    background: url('../assets/what-in-box_content.svg') no-repeat;
    background-size: contain;
    &_mobile {
      display: none;
    }
  }
  &__content-head {
    width: 100%;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
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
  }
}
.how-use {
  padding: 150px 0;
  display: grid;
  width: 100%;
  justify-content: center;
  // background: #fff;
  z-index: 6;
  // background-image: url('../assets/back-howuse.svg');
//  background-repeat: no-repeat;
//    background-position: bottom left;
// background-size: cover;
  &__head {
  display: grid;
  justify-content: center;
  margin-bottom: 120px;
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
  &__container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 190px);
    column-gap: 60px;
  }
  &__content {
    display: grid;
    &:first-child  {
      .how-use__content-text {
        margin-top: 40px;
      }
    }
  }

  &__content-image {
    width: max-content;
  }
  &__content-text {
    width: 100%;
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
    height: 70%;
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
  background: url('../assets/back-social-1920.svg') no-repeat right bottom, linear-gradient(176.37deg, #157DA9 12.91%, rgba(50, 157, 202, 0.82) 58.13%, #1489BB 92.45%);
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  &__container {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-template-rows: max-content;
    justify-content: center;
    column-gap: 60px;
    z-index: 6;
  }
  &__content {
    display: grid;
    height: 100%;
    width: 565px;
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
    margin: 0;
  }

  &__content-image {
    display: grid;
    grid-template-columns: 442px 238px;
    column-gap: 10px;
    height: 340px;
  }
  &__image-carousel {
    display: none;
    overflow: hidden;
    width: 100%;

    /deep/ .swiper-pagination {
      position: static;
      padding: 15px 0 20px;
      font-size: 15px;
      line-height: 1em;
    }

    /deep/ .swiper-pagination-bullet {
      width: 1em;
      height: 1em;
      background: #fff;
      opacity: 0.5;
      margin: 0 12.5px;
    }
    /deep/ .swiper-pagination-bullet-active {
      opacity: 1;
    }
  }
  &__image {
    display: grid;

    &_one {
      width: 100%;
    }
    &_two {
      width: 100%;
    }
  }
}
.doubt {
  display: grid;
  justify-content: center;
  grid-template-rows: max-content max-content;
  width: 100%;
  // background: #fff;
  box-sizing: border-box;
  padding-top: 150px;
  &__container {
    display: grid;
    grid-template-rows: max-content max-content max-content ;
    z-index: 6;
  }
  &__image-container {
    overflow: hidden;
  }
  &__slider {
    height: 341px;
  }
  &__slide {
    width: 500px;
    transition: opacity, transform;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__text {
    margin: 80px auto 60px auto;
    // width: 40%;
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
  // background: #fff;
  padding: 170px 0 35px 0;
  display: grid;
  grid-template-rows: 3fr 318px;
  grid-template-columns: 100%;

  &__image {
    background: url('../assets/dog_faq.png') no-repeat;
    background-size: contain;
    width: 60%;
    justify-self: right;
  }
  &__container {
    width: 49%;
    background: #FBFBFB;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
    border-radius: 80px;
    padding: 100px  0 100px;
    display: grid;
    grid-template-rows: 4em repeat(3, 1fr max-content);
    grid-template-columns: 70%;
    row-gap: .8em;
    z-index: 6;
    justify-content: center;
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
    grid-template-columns: 1fr max-content;;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    background: $forms-btn-color;
    border-radius: 10px;
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #FFFFFF;
    padding: 12px 20px;
    text-align: left;
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
    text-align: justify;
    padding: 0 10px;
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
    padding: 12px 20px;


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
  padding: 32px 0 33px;
  z-index: 1000;
  background: #464451;
  display: grid;
  grid-template-columns: 70% 30%;
  justify-content: space-between;
  overflow: hidden;
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  &__contacts {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    text-align: left;
    justify-self: end;
  }
  &__contacts-row {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;

    a {
      font: inherit;
      color: inherit;
    }

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
  justify-self: center;
  column-gap: 55px;
}

@media screen and (max-width: 1440px) {
.landing-container{
  background-image: url('../assets/back-img-1440.svg');
  background-position-y: 1200px;
  background-repeat: no-repeat;
}
  .order {
      background: url('../assets/back-head-1440.svg') no-repeat left 77px , linear-gradient(163.79deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);

    &__container {
      padding-top: 161px;
      padding-left: 172px;
    }
    &__text {
      width: 605px;
    }

    &__images-content {
      &_yelow-bone {
        width: calc(956px + 1%);
        left: -190px;
        top: 100px;
      }
      &_dog {
        width: calc(725px + 1%);
        left: -150px;
        top: 380px;
      }
    }
  }

  .what-in-box {
    background: url('../assets/back-inside-1440.svg') no-repeat left bottom, linear-gradient(158.25deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);

    &__container {
    display: grid;
    grid-template-columns: 314px 471px 314px;
    margin-bottom: 70px;
    z-index: 6;
    justify-content: center;
  }
    &__content-image {
      margin-left: -120px;
      background: url('../assets/what-in-box_content-1440.svg') no-repeat;
      width: 712.18px;
      height: 652.26px;
    }
    &__content-text-text {
      margin: 0;
    }
  }
  .how-use {
    &__container {
      column-gap: 40px;
    }
  }
  .social-mission {
    background: url('../assets/back-social-1440.svg') no-repeat right bottom, linear-gradient(176.37deg, #157DA9 12.91%, rgba(50, 157, 202, 0.82) 58.13%, #1489BB 92.45%);

    &__container {
      grid-template-columns: 23% 43.09%;
      justify-items: center;
      column-gap: 150px;
    }
    &__content {
      width: 348px;
      justify-self: center;
    }
    &__content-image {
    display: grid;
    grid-template-columns: 387px 238px;
    column-gap: 10px;
  }
    &__image {
      display: grid;
      height: 293px;

      &_one {
        height: 293px;
        width: 100%;
      }
      &_two {
        height: 100%;
      }
    }
  }
  .doubt {
    &__slider {
      height: 250px;
    }
    &__slide {
      width: 366px;
    }
  }
}

@media screen and (max-width: 425px) {


  html {
    width: 100vw;
  }
  .block {
    &__head {
      margin-bottom: 50px;
    }
    &__head-text {
      width: max-content;
      height: 27px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 27px;

      &_white {
        color: #fff;
      }
    }
  }

  .order {
    grid-template-columns: 100%;
    justify-items: center;
    height: 615px;
    &__container {
      grid-row: 2/2;
      padding: 330px 12px 0;
      width: 100%;
      text-align: center;
      justify-items: center;
    }
    &__text {
      width: 288px;
    }

    &__images-content {
      grid-row: 0/1;
      &_yelow-bone {
        width: calc(460px + 1%);
        top: -25px;
        left: 80px;

      }
      &_dog {
        display: none;
      }
      &_dog-mobile {
        display: block;
        width: calc(379px + 1%);
        top: 30px;
        left: 60px;
        z-index: 101;
      }
    }

    &__head {
      width: calc(100% - 20px);
      height: 90px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
      color: #FFFFFF;
      margin: 0 0 30px;
    }

    &__text {
      width: 288px;
      height: 40px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      letter-spacing: 1px;
      color: #FFFFFF;
      margin:  0 0 20px;
    }

    &__button {
      margin: 0;
    }
    &__button-text {
      justify-items: center;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 21px;
      line-height: 26px;
      text-align: left;
      letter-spacing: 0.2px;
      color: #464451;
    }
  }

  .how-work {
    padding: 70px 0 70px 0;
    row-gap: 50px;


    &__arrow-container {
      display: none;
    }
    &__container {
      grid-template-columns: 245px;
      padding: 0 87px;
      justify-content: center;
      row-gap: 40px;
    }
    &__section {
      justify-items: center;
    }
    &__section-head {
      height: max-content;
    }
  }

  .what-in-box {
    grid-template-columns: 100%;
    width: 100%;
    padding: 50px 12px 50px;

    &__container {
      display: grid;
      grid-template-columns: 100%;
      margin-bottom: 70px;
      z-index: 6;
      justify-content: center;
      row-gap: 40px;
    }
    &__content {
      row-gap: 40px;
    }
    &__content-text {
      display: grid;
      justify-items: center;
      align-content: flex-start;
    }
    &__content-text:last-child {
      align-content: flex-start;
    }
    &__content-image-container {
      display: none;
    }
    &__content-image {
      display: none;
      &_mobile {
        margin: 20px 0;
        display: block;
      }
    }
    &__content-head {
      width: 100%;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #fff;
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
      color: #fff;
    }
  }

  .how-use {
    padding: 70px 0;
    width: 100%;
    grid-template-columns: calc(100% - 40px);

    &__head {
    display: grid;
    justify-content: center;
    margin-bottom: 50px;
    }
    &__head-text {
      width: max-content;
      height: 27px;
      font-size: 22px;
      line-height: 27px;
      color: $default-text-color;
    }
    &__container {
      width: 100%;
      display: grid;
      grid-template-columns: 100%;
      column-gap: 0;
      row-gap: 40px;
    }
    &__content {
      display: grid;
      justify-items: center;
      row-gap: 20px;
      &:first-child  {
        .how-use__content-text {
          margin-top: 0;
        }
      }
    }

    &__content-image {
      width: max-content;
    }
    &__content-text {
      width: 100%;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: #464451;

    }
    &__content-arrow {
      display: none;
    }
  }

  .social-mission {
    display: grid;
    justify-content: center;
    grid-template-columns: 100%;
    padding: 50px 0;
    background: linear-gradient(176.37deg, #157DA9 12.91%, rgba(50, 157, 202, 0.82) 58.13%, #1489BB 92.45%);
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    &__container {
      display: grid;
      grid-template-columns: 100%;
      justify-content: center;
      column-gap: 60px;
      z-index: 6;
    }
    &__content {
      display: grid;
      grid-row: 2/2;
      height: 100%;
      width: 100%;
      align-content: center;
      text-align: center;
      padding: 0 12px;

    }
    &__text-content {
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      color: #FFFFFF;
      margin: 0;
    }

    &__content-image {
      display: grid;
      grid-template-columns: 100%;
      column-gap: 0;
      height: max-content;
    }
    &__image-carousel {
      display: block;
    }
    &__image {
      display: none;

      &_one {
        width: 100%;
      }
      &_two {
        width: 100%;
      }
    }
  }

  .doubt {
    &__container {
    width: 100%;
    }
    &__slider {
      height: 166px;
    }
    &__slide {
      width: 243px;
    }
    &__text {
      padding: 18px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .faq {
    padding: 80px 0 0;
    grid-template-rows: 3fr 241px;
    grid-template-columns: calc( 100% - 24px);
    justify-content: center;

    &__image {
     width: 100%;
     justify-self: center;
     height: 172px;
    }
    &__container {
      border-radius: 40px;
      grid-template-columns: 100%;
      justify-content: center;
      width: 100%;
      padding: 50px 10px;
    }
    &__head {

    }
    &__question {
      padding: 12px 15px;
      width: calc(100% - 30px);
      justify-self: center;
    }
    &__answer {

      &_collapse {

      }
    }
  }

  .footer {
    grid-template-columns: 100%;
    &__container {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 35px;
    }
    &__contacts {
      grid-row: 1/1;
      display: grid;
      grid-template-rows: repeat(2, max-content);
      text-align: left;
      justify-self: center;
      row-gap: 10px;
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
      display: none;
    }
  }
}
@media screen and (max-width: 414px) {
  .landing-container {
    background: #fff;
  }
  .order{
    background: url('../assets/back-order-414.svg') no-repeat left bottom, linear-gradient(163.79deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);
  }
  .how-work{
    background: url('../assets/back-work-414.svg') no-repeat left bottom;
  }
  .what-in-box {
    background: url('../assets/back-inside-414.svg') no-repeat left bottom, linear-gradient(158.25deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);
  }
  .how-use{
    background: url('../assets/back-use-414.svg') no-repeat left top;
  }
  .social-mission {
    background: url('../assets/back-social-414.svg') no-repeat left bottom, linear-gradient(176.37deg, #157DA9 12.91%, rgba(50, 157, 202, 0.82) 58.13%, #1489BB 92.45%);
  }
  .doubt{
    background: url('../assets/back-doubt-414.svg') no-repeat left bottom;
  }
  .faq{
    background: url('../assets/back-faq-414.svg') no-repeat left bottom;
  }

  @media screen and (max-width: 360px) {
  .landing-container {
    background: #fff;
  }
  .order{
    background: url('../assets/back-order-360.svg') no-repeat left bottom, linear-gradient(163.79deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);
   &__head {
      width: 340px;
      }
  }
  .how-work{
    background: url('../assets/back-work-360.svg') no-repeat left bottom;
  }
  .what-in-box {
    background: url('../assets/back-inside-360.svg') no-repeat left bottom, linear-gradient(158.25deg, #157DA9 32.49%, rgba(71, 160, 197, 0.9) 59.63%, rgba(25, 139, 188, 0.64) 92.41%);
  }
  .how-use{
    background: url('../assets/back-use-360.svg') no-repeat left top;
  }
  .social-mission {
    background: url('../assets/back-social-360.svg') no-repeat left bottom, linear-gradient(176.37deg, #157DA9 12.91%, rgba(50, 157, 202, 0.82) 58.13%, #1489BB 92.45%);
  }
  .doubt{
    background: url('../assets/back-doubt-360.svg') no-repeat left bottom;
  }
  .faq{
    background: url('../assets/back-faq-360.svg') no-repeat left bottom;
  }
  }

}
</style>
