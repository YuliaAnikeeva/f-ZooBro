<template>
  <div class="success-order">
    <div class="success-order__order-info">
      <svg class="success-order__icon" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 49.9838C38.8071 49.9838 50 38.7983 50 25.0002C50 11.2021 38.8071 0.0166016 25 0.0166016C11.1929 0.0166016 0 11.2021 0 25.0002C0 38.7983 11.1929 49.9838 25 49.9838Z" />
        <path d="M22.9956 38.2892L11.1753 29.0806L14.5362 24.7673L21.7948 30.422L33.7745 13.1353L38.2698 16.2493L22.9956 38.2892Z" fill="white"/>
      </svg>
      <div class="success-order__title">Ура!</div>
      <p class="success-order__text">
        Заказ оформлен, скоро мы с тобой свяжемся.
      </p>
      <p class="success-order__text">
        Номер заказа: <span class="success-order__text success-order__text_accent">{{String(order.id)}}</span>
      </p>
      <a href="#" class="success-order__link">Отслеживать заказ</a>
    </div>
    <div class="success-order__reg-info">
      <p class="success-order__text">Мы также направили на твой E-mail письмо с паролем для входа в личный кабинет</p>
    </div>
    <div class="success-order__cta">
      <p class="success-order__text success-order__text_accent">Подписывайся на нас!</p>
      <div class="success-order__socials">
        <a href="#" class="success-order__social-link success-order__social-link_vk">
          <svg class="success-order__social-icon" viewBox="0 0 43 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.40246 16.9848C10.0322 19.193 11.9048 21.1458 14.324 22.5273C17.0635 24.0932 20.013 24.5654 23.1238 24.4214C24.5771 24.3518 25.0142 23.9728 25.0812 22.5247C25.1262 21.5326 25.2409 20.5432 25.7293 19.6516C26.2094 18.7774 26.9376 18.6119 27.7779 19.1559C28.1962 19.4307 28.5485 19.7747 28.882 20.1427C29.7008 21.0364 30.4934 21.9619 31.3415 22.8263C32.4079 23.912 33.6727 24.5518 35.2595 24.4214L41.4077 24.424C42.3971 24.357 42.9117 23.144 42.3437 22.0363C41.9437 21.263 41.4187 20.5751 40.8637 19.9076C39.6073 18.3983 38.1268 17.1121 36.7269 15.7467C35.4652 14.5149 35.3851 13.7998 36.3986 12.3784C37.508 10.8257 38.6974 9.33468 39.8151 7.7903C40.858 6.34749 41.928 4.90676 42.4741 3.18125C42.8238 2.07977 42.5144 1.59446 41.3893 1.39972C41.1946 1.36778 40.992 1.36778 40.7946 1.36778L34.1046 1.35941C33.2806 1.34632 32.8272 1.7065 32.5361 2.43681C32.1414 3.42416 31.7362 4.41099 31.2661 5.36065C30.2049 7.52121 29.0176 9.60953 27.3533 11.3754C26.9853 11.7643 26.5769 12.258 25.9639 12.0554C25.1985 11.7753 24.9718 10.5115 24.9849 10.0849L24.9791 2.36247C24.8305 1.26151 24.5844 0.76783 23.4887 0.553711H16.54C15.615 0.553711 15.148 0.914415 14.6517 1.4929C14.369 1.82952 14.2805 2.04521 14.8679 2.15725C16.0196 2.37555 16.6735 3.12261 16.8442 4.27802C17.119 6.12656 17.1002 7.98243 16.9405 9.83621C16.895 10.3775 16.8018 10.9168 16.5877 11.4235C16.2521 12.2208 15.7076 12.381 14.9956 11.8905C14.3533 11.4476 13.8999 10.8236 13.4539 10.1969C11.787 7.84108 10.4588 5.30254 9.37306 2.6347C9.06104 1.86355 8.51973 1.3971 7.70356 1.38349C5.69744 1.35155 3.68922 1.34684 1.68048 1.3861C0.474822 1.40757 0.114641 1.99443 0.608319 3.09068C2.79296 7.95312 5.22575 12.6794 8.40246 16.9848Z"/>
          </svg>
        </a>
        <a href="#" class="success-order__social-link success-order__social-link_instagram">
          <svg class="success-order__social-icon" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.9576 0.399414H11.0424C5.17049 0.399414 0.394043 5.17652 0.394043 11.0478V31.963C0.394043 37.8349 5.17049 42.6107 11.0424 42.6107H31.9576C37.8295 42.6107 42.6053 37.8349 42.6053 31.963V11.0478C42.6053 5.17652 37.8295 0.399414 31.9576 0.399414ZM38.0121 31.963C38.0121 35.3017 35.2957 38.0181 31.9576 38.0181H11.0424C7.70432 38.0181 4.98791 35.3017 4.98791 31.963V11.0478C4.98791 7.70969 7.70432 4.99394 11.0424 4.99394H31.9576C35.2957 4.99394 38.0121 7.70969 38.0121 11.0478V31.963Z"/>
            <path d="M32.7186 12.8806C31.2999 12.8806 30.1455 11.7269 30.1455 10.3081C30.1455 8.89003 31.2999 7.73633 32.7186 7.73633C34.1373 7.73633 35.291 8.89003 35.291 10.3081C35.291 11.7269 34.1373 12.8806 32.7186 12.8806Z" />
            <path d="M21.4973 10.6309C15.5037 10.6309 10.6265 15.5074 10.6265 21.5017C10.6265 27.496 15.5037 32.3732 21.4973 32.3732C27.4922 32.3732 32.3695 27.496 32.3695 21.5017C32.3695 15.5081 27.4922 10.6309 21.4973 10.6309ZM21.4973 27.7807C18.0375 27.7807 15.2197 24.9635 15.2197 21.5017C15.2197 18.0413 18.0375 15.2254 21.4973 15.2254C24.9591 15.2254 27.7749 18.0413 27.7749 21.5017C27.7749 24.9635 24.9591 27.7807 21.4973 27.7807Z"/>
          </svg>
        </a>
        <a href="#" class="success-order__social-link success-order__social-link_tiktok">
          <svg class="success-order__social-icon" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.6229 3.54232V0.833984H22.2062V30.6257C22.2062 35.1067 18.5623 38.7506 14.0812 38.7506C9.60017 38.7506 5.95622 35.1067 5.95622 30.6257C5.95622 26.1446 9.60017 22.5007 14.0812 22.5007H16.7896V17.084H14.0812C6.61413 17.084 0.539551 23.1586 0.539551 30.6257C0.539551 38.0927 6.61413 44.1673 14.0812 44.1673C21.5483 44.1673 27.6229 38.0927 27.6229 30.6257V14.3499C29.8895 16.0578 32.6971 17.084 35.7479 17.084H38.4562V11.6673H35.7479C31.2668 11.6673 27.6229 8.02337 27.6229 3.54232Z"/>
          </svg>
        </a>
      </div>
      <p class="success-order__text success-order__text_accent">Или закажи еще коробочку!</p>
      <button class="success-order__button" @click="$emit('new')">
        Заказать
      </button>
    </div>
    <div class="success-order__dog-boss">
      <img src="@/assets/dog_boss.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SuccessOrder',
    props: {
      order: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
.success-order {
  padding: 60px 15px 0px 15px;
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  box-sizing: border-box;

  &__order-info {
    margin-bottom: 70px;
  }

  &__cta {
    margin-top: 50px;
  }

  &__socials {
    margin-bottom: 50px;
  }

  &__icon {
    max-width: 50px;
    fill: #FFCC01;
  }
  &__title {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 32px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #000000;
    padding: 30px 0;
  }
  &__text {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #464451;
    margin: 0;
    margin-bottom: 20px;

    &_accent {
      font-weight: 600;
    }
  }
  &__link {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.2px;
    text-decoration-line: underline;
    color: #464451;

    &:hover {
      color: #FFCC01;
    }
  }

  &__social {
    &-link {
      display: inline-block;
      // font-size: 35px;
      color: #FFCC01;
      width: 65px;
      height: 65px;
      box-sizing: border-box;
      transition: all .3s linear;
      padding: 12px;
      margin: 0 30px;
      &:hover {
        color: red;
      }

      &_vk {
        &:hover {
          color: #4680C2;
        }
      }
      &_instagram {
        &:hover {
          color: #e50078;
        }
      }
      &_tiktok {
        &:hover {
          color: #000;
        }
      }
    }
    &-icon {
      display: inline-block;
      height: 100%;
      width: 100%;
      fill: currentColor;
      vertical-align: text-bottom;
    }
  }

  &__button {
    margin-top: 30px;
    font-family: Montserrat, sans-serif;
    box-sizing: border-box;
    min-width: 230px;
    padding: 15px 55px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    color: #2289B5;
    background-color: #fff;
    border: 1px solid #2289B5;
    border-radius: 10px;
    transition: background-color .3s linear;

    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.2px;


    &:hover {
      background-color: lighten(saturate(#2289b5, 16.24), 40.00);
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    &:active {
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
      background-color: #2289B5;
      color: #fff;
    }
  }

  &__dog-boss {
    margin-top: auto;
    padding-top: 70px;
    width: 100%;
    & img {
      width: 100%;
    }
  }
}
</style>

