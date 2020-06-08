<template>
  <div class="settings">
    <span class="settings__label">Имя пользователя</span>
    <span class="settings__info">{{ profile.name }}</span>
    <span class="settings__label">Email</span>
    <span class="settings__info">{{ profile.email }}</span>
    <span class="settings__label">Пароль</span>
    <span class="settings__info">••••••</span>
    <span class="settings__label">Телефон</span>
    <span class="settings__info">+7 {{ profile.phone }}</span>
    <span class="settings__label">Адрес доставки</span>
    <span class="settings__info">{{ profile.address }}</span>
    <img src="@/assets/profile-pic/user-avatar.png" alt="user photo">
  </div>
</template>

<script>
export default {
  props: {
    profile: Object,
  },
}
</script>

<style lang="scss" scoped>
  .settings {
    display: grid;
    width: 100%;
    grid-template-areas:
    "name    name_text    photo"
    "email   email_text   photo"
    "pass    pass_text    photo"
    "phone   phone_text   photo"
    "address address_text photo";
    text-align: left;
    &__label {
      font-size: 12px;
      line-height: 15px;
      color: #8b8a95;
      align-self: flex-start;
    }
    &__info {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #464451;
    }
    img {
      grid-area: photo;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    span {
      display: flex;
      align-items: center;
    }

    @media (max-width: 1440px) {
      grid-template-areas:
      "name    name_text    name_text    photo"
      "email   email_text   email_text   photo"
      "pass    pass_text    pass_text    photo"
      "phone   phone_text   phone_text   photo"
      "address address_text address_text photo";
      grid-row-gap: 25px;
      grid-column-gap: 33px;

      &__info {
        grid-column-end: span 2;
      }
    }

    @media (max-width: 414px) {
      grid-template-areas:
      "name    name_text"
      "email   email_text"
      "pass    pass_text"
      "phone   phone_text"
      "address address_text"
      ".       photo";
      grid-row-gap: 25px;
      grid-column-gap: 33px;

      img {
        width: 100%;
      }

      &__info {
        grid-column-end: span 1;
      }
    }
  }
</style>
