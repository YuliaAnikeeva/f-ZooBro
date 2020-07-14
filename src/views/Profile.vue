<template>
  <div id="profile">
    <div id="profile-header">
      <h2>Личный кабинет</h2>
    </div>
    <div id="profile-nav">
      <ul id="profile-nav-tabs">
        <li v-on:click="changeTab('pets')" class="active-tab" id="pets">Питомцы</li>
        <li v-on:click="changeTab('settings')" id="settings">Хозяин</li>
        <li v-on:click="changeTab('orders')" id="orders">Заказы</li>
      </ul>
    </div>

    <div v-if="activeTab == 'pets' && pets.length > 0 && !petEditor" id="profile-pets">
      <Loader v-if="pets.length ==  0" />
      <PetCard v-for="(pet, index) in petsList" :key="index" :pet="pet" @focus:pet="onFocusPet" />
      <PetCard :pet="emptyPet" @add:pet="onAddPet" />
    </div>

    <PetForm
      v-if="activeTab == 'pets' && petEditor"
      :pet="petTemp"
      @save="petEditor = false"
      @close="petEditor = false"
      />

    <div v-if="activeTab == 'settings'" id="profile-settings">
      <SettingsCard v-if="!profileEditor" :profile="profileData" />
      <SettingsForm v-else :profile="profileData"  :editStatus.sync="profileEditor"/>
      <button v-if="!profileEditor" @click="editProfile()">Изменить</button>
    </div>

    <div v-if="activeTab == 'orders'" id="profile-orders">
      <table class="profile-orders__table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Номер</th>
            <th>Для кого</th>
            <th>Вид покупки</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <OrderCard v-for="(order, index) in ordersList" :key="index" :order="order" />
        </tbody>
      </table>
      <div class="profile-orders__list">
        <OrderCardMobile v-for="(order, index) in ordersList" :key="index" :order="order" />
      </div>
    </div>

    <div v-if="loader" id="profile-loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import PetCard from "@/components/profile/PetCard";
import OrderCard from "@/components/profile/OrderCard";
import SettingsCard from "@/components/profile/SettingsCard";
import SettingsForm from "@/components/profile/SettingsForm";
import Loader from "@/components/Loader";
import PetForm from "@/components/profile/PetForm";
import OrderCardMobile from "@/components/profile/OrderCardMobile";

export default {
  name: "Profile",
  metaInfo: {
    title: "Profile"
  },
  components: { PetCard, OrderCard, SettingsCard, SettingsForm, Loader, PetForm, OrderCardMobile },
  data() {
    return {
      pets: [],
      disabled: true,
      activeTab: "pets",
      loader: false,
      profileEditor: false,
      petEditor: false,
      petTemp: {},
    };
  },
  methods: {
    changeTab(tabName) {
      if (tabName != this.activeTab) {

        switch (tabName) {
          case "settings": {
            this.$store.dispatch("user/fetchUserInfo");
            break;
          }
          case "orders": {
            this.$store.dispatch("order/fetchOrdersList");
            break;
          }
        }

        document
          .querySelector(`#${this.activeTab}`)
          .classList.remove("active-tab");

        this.activeTab = false;
        this.loader = true;

        setTimeout(() => {
          this.activeTab = tabName;
          document.querySelector(`#${tabName}`).classList.add("active-tab");
          this.loader = false;
        }, 1000);
      }
    },
    fetchPets() {
      this.$store.dispatch("pet/fetchPet").then(status => {
        if (status === true) {
          this.pets = this.$store.getters["pet/petList"];
        }
      });
    },
    editProfile() {
      this.profileEditor = true;
    },
    onFocusPet(pet) {
      this.petTemp = pet;
      this.petEditor = true;
    },
    onAddPet() {
      this.petTemp = {};
      this.petEditor = true;
    },
  },
  computed: {
    emptyPet() {
      const empty = {
        empty: true,
        name: "Кличка",
        breed: "",
        gender: "",
        food_exceptions: ""
      };
      return empty;
    },
    profileData() {
      return this.$store.getters["user/userInfo"];
    },
    ordersList() {
      return this.$store.getters["order/getOrdersList"].reverse();
    },
    petsList() {
    }
  },
  beforeMount() {
    this.fetchPets();
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat");

#profile {
  font-family: Montserrat, serif;
  display: grid;
  padding: 0 12px;
  max-width: 1920px;
  margin: 0 auto;
  margin-bottom: 120px;
  grid-template-areas:
    "header"
    "nav"
    "block";
  grid-template-rows: repeat(auto-fit, minmax(5vh, 1fr));
  &-nav {
    height: 100%;
    grid-area: nav;
    padding: 120px 0 80px;
    box-sizing: border-box;
    &-tabs {
      display: flex;
      flex-flow: row nowrap;
      text-align: left;
      justify-content: center;
      padding: 0;
      list-style-type: none;
      margin: 0;
      li {
        border-left: 1px solid #2289b5;
        border-top: 1px solid #2289b5;
        border-bottom: 1px solid #2289b5;
        height: 40px;
        font-weight: 500;
        font-size: 24px;
        line-height: 22px;
        padding: 19px;
        width: 100%;
        max-width: 315px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        transition: 0.5s linear all;
        &:last-child {
          border-right: 1px solid #2289b5;
        }
        &:hover {
          cursor: pointer;
          transition: 0.5s linear all;
          background-color: rgba(34, 137, 181, 0.7);
          color: white;
        }
        svg {
          height: 40px;
          width: 40px;
          padding-right: 10%;
        }
      }
    }
  }
  &-header {
    grid-area: header;
    margin-top: 85px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #464451;
  }
  &-pets,
  &-orders,
  &-settings,
  &-loader {
    grid-area: block;
    width: 100%;
    margin: 0 auto;
  }
  &-pets {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(3, 440px);
    justify-content: center;
  }
  &-settings {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    max-width: 940px;
    button {
      margin-top: 80px;
      box-sizing: border-box;
      width: 100%;
      max-width: 250px;
      outline: none;
      font-family: Montserrat, serif;
      padding: 15px;
      font-weight: 600;
      font-size: 21px;
      line-height: 26px;
      color: #464451;
      background: #ffffff;
      border: 1px solid #464451;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      transition: 0.5s linear all;
      &:hover {
        transition: 0.5s linear all;
        cursor: pointer;
        background: #c5c5c5;
      }
    }
  }
  &-orders {
    table {
      display: grid;
      max-width: 945px;
      width: 100%;
      margin: 0 auto;
      grid-template-columns:
        minmax(150px, 1fr)
        minmax(150px, 0.33fr)
        minmax(150px, 1.67fr)
        minmax(150px, 1.67fr)
        minmax(150px, 1fr);
      // minmax(150px, 3.33fr)
    }
    thead,
    tbody,
    tr {
      display: contents;
    }
    th {
      text-align: left;
      padding-left: 5px;
      font-size: 12px;
      line-height: 15px;
      color: #8b8a95;
      margin-bottom: 30px;
    }
  }
  &-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
  }
}

.profile-orders {
  &__list {
    display: none;
  }
}

input {
  text-align: center;
}

textarea {
  resize: none;
  height: auto;
  text-align: center;
}

.active-tab {
  background-color: #2289b5;
  color: white;
}

@media screen and (max-width: 1440px) {
  #profile {
    max-width: 1150px;
    &-orders {
      table {
        max-width: 919px;
      }
    }
    &-header {
      font-size: 24px;
      margin-top: 40px;
    }
    &-nav {
      padding: 50px 0;
      &-tabs {
        li {
          box-sizing: border-box;
          max-width: 220px;
          padding: 12px;
          font-size: 18px;
        }
      }
    }
    &-pets {
      grid-template-columns: repeat(auto-fit, 350px);
      grid-gap: 30px;
    }
    &-settings {
      max-width: 728px;
    }
  }
}

@media screen and (max-width: 414px) {
  #profile-settings {
    button {
      max-width: 180px;
    }
  }
  .profile-orders {
    &__list {
      display: block;
    }
  }
  #profile {
    &-header {
      font-size: 22px;
      margin-top: 50px;
    }
    &-orders {
      display: flex;
      flex-direction: column;
      table {
        display: none;
      }
    }
    &-nav {
      padding: 30px 0 50px;
      &-tabs {
        li {
          max-width: 120px;
          padding: 9px;
          font-size: 16px;
        }
      }
    }
    &-pets {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }
  }
}
</style>
