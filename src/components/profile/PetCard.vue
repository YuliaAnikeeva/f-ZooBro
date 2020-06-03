<template>
  <div class="card" :class="pet.empty ? 'grey' : ''">
    <img src="@/assets/profile-pic/default-avatar.png" alt="default avatar" />
    <span class="card__name">
      <p>{{ pet.name }}</p>
      <p v-if="!pet.empty" @click="changeData()" class="edit">Изменить данные</p>
    </span>
    <span class="label">Порода:</span>
    <span class="text">{{ pet.breed }}</span>
    <span class="label">Дата рождения:</span>
    <span class="text">{{ yearsOldString }}</span>
    <span class="label">Пол:</span>
    <span class="text">{{ genderWord }}</span>
    <span class="label">Размер:</span>
    <span class="text">{{ sizeString }}</span>
    <span class="label">Аллергия:</span>
    <span class="text">{{ pet.food_exceptions }}</span>
    <button v-if="!pet.empty" @click="makeOrder()">
      Заказать коробочку
      <svg
        width="30"
        height="22"
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8939 3.56857C16.7582 1.10565 19.135 -0.40999 21.2238 0.158375C23.2405 0.726741 24.1768 3.18966 23.3125 5.58943C22.4482 8.05235 20.0714 9.56799 17.9826 8.99962C15.9659 8.49441 15.0296 6.03149 15.8939 3.56857Z"
        />
        <path
          d="M27.8502 6.53479C25.9775 6.02958 23.8168 7.48207 22.9525 9.81868C22.0882 12.1553 22.8804 14.4919 24.7531 14.9971C26.6257 15.5023 28.7865 14.0499 29.6508 11.7132C30.5151 9.37662 29.7228 7.04001 27.8502 6.53479Z"
        />
        <path
          d="M12.0766 9.18785C14.0213 8.68263 14.8136 6.21971 13.8773 3.69364C12.9409 1.16757 10.5641 -0.411225 8.61945 0.0939891C6.67478 0.662355 5.88251 3.12527 6.81883 5.58819C7.82718 8.11427 10.132 9.75621 12.0766 9.18785Z"
        />
        <path
          d="M7.10742 9.81977C6.17109 7.42 3.93832 5.90436 2.06568 6.40957C0.193029 6.91479 -0.527219 9.2514 0.409104 11.588C1.34543 13.9878 3.5782 15.5034 5.45084 14.9982C7.32349 14.493 8.04374 12.1564 7.10742 9.81977Z"
        />
        <path
          d="M15.1737 9.75586H14.7416C14.7416 9.75586 6.81884 10.8926 6.89087 18.9129C6.89087 23.5861 11.2844 21.5652 11.2844 21.5652C11.2844 21.5652 13.157 19.9233 14.7416 19.9233L15.1737 19.8601C16.7583 19.8601 18.6309 21.5021 18.6309 21.5021C18.6309 21.5021 23.0965 23.5861 23.0244 18.8497C23.0965 10.8926 15.1737 9.75586 15.1737 9.75586Z"
        />
      </svg>
    </button>
    <div v-else class="card__button-create" @click="$emit('add:pet')">
      <div>
        <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="26" y="11" width="8" height="32" fill="white"/>
          <rect x="46" y="23" width="8" height="32" transform="rotate(90 46 23)" fill="white"/>
        </svg>
      </div>
      <p>Добавить друга</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pet"],
  data() {
    return {
      disabled: true
    };
  },
  methods: {
    updatePet() {
      const payload = {
        id: this.pet.id,
        gender: this.pet.gender == "m" ? "f" : "m"
      };
      this.$store.dispatch("pet/updatePet", payload).then(() => {
        this.$store.dispatch("pet/fetchPet").then(status => {
          if (status === true) {
            location.reload();
          }
        });
      });
    },
    makeOrder() {
      this.$router.push('order')
    },
    changeData() {
      // alert('Функция дорабатывается:')
      this.$emit("focus:pet", this.pet)
    }
  },
  computed: {
    sizeString() {
      if (this.pet.empty) {
        return "";
      }

      switch (this.pet.size) {
        case "1": {
          return `маленький`;
        }
        case "2": {
          return "средний";
        }
        case "3": {
          return "большой";
        }
        default: {
          return "неопределен";
        }
      }
    },
    yearsOldString() {
      if (this.pet.empty) {
        return "";
      }
      if (this.pet.birthday_date) {
        return `${this.pet.birthday_date}`;
      }
      if (this.pet.birthday_years) {
        return `${this.pet.birthday_years} ${
          this.pet.birthday_years == "1-3" ? "года" : "лет"
        } `;
      }
      return "не указана";
    },
    genderWord() {
      switch(this.pet.gender) {
        case 'f': return 'Ж'
        case 'm': return 'М'
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  width: 100%;
  min-width: 320px;
  box-sizing: border-box;
  grid-template-areas:
    "avatar name"
    "breed breed_text"
    "dob dob_text"
    "gender gender_text"
    "size size_text"
    "food food_text"
    "order order";
  grid-template-columns: 50%;
  grid-gap: 20px;
  background: #fbfbfb;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 30px 40px;
  font-size: 16px;
  &__name {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    text-align: left;
    p {
      width: 100%;
      margin: 0;
      &:first-child{
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
      }
      &:last-child {
        margin-top: 15px;
      }
    }
  }
  &__button-create{
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    grid-area: order;
    &:hover {
      cursor: pointer;
      div {
        transition: 0.5s linear all;
        background: rgb(28, 107, 141);
      }
    }
    div {
      transition: 0.5s linear all;
      margin-right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #2289B5;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      font-weight: bold;
      font-size: 21px;
      line-height: 26px;
      }
  }
  span {
    text-align: left;
    display: flex;
    align-items: center;
  }
  img {
    height: 100px;
    background: #c4c4c4;
    border-radius: 50%;
    padding: 10px;
  }
  button {
    grid-area: order;
    font-family: Montserrat, serif;
    background: #ffcc01;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #464451;
    padding: 15px 45px;
    position: relative;
    outline: none;
    border: 0;
    margin-left: 17px;
    margin-right: 17px;
    transition: 0.2s linear all;
    svg {
      position: absolute;
      right: 2.77%;
      bottom: 30.91%;
      fill: #fafafa;
      transition: 0.5s linear all;
    }
    &:hover {
      cursor: pointer;
      svg {
        transition: 0.5s linear all;
        fill: #2289b5;
      }
    }
    &:active {
      transition: 0.001s linear all;
      background: rgb(207, 166, 1);
    }
  }
}

.label {
  font-size: 14px;
  line-height: 17px;
}
.text {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.edit {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #2289b5;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}

.grey {
  background: #F1F1F1;
}
</style>
