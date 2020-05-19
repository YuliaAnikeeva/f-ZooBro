<template>
  <div id="profile">
    <div id="profile-header">
      <h2>Личный кабинет</h2>
    </div>
    <div id="profile-nav">
      <ul id="profile-nav-tabs">
        <li v-on:click="changeTab('pets')" class="active-tab" id="pets">
          Питомцы
        </li>
        <li v-on:click="changeTab('settings')" id="settings">
          Хозяин
        </li>
        <li v-on:click="changeTab('orders')" id="orders">
          Заказы
        </li>
      </ul>
    </div>
    <div v-if="activeTab == 'pets' && pets.length > 1" id="profile-pets">
      <Loader v-if="pets.length < 1" />
      <PetCard 
        v-for="(pet, index) in pets" 
        :key="index" 
        :pet="pet" />
      <button disabled="disabled" @click="createDefaultPet()">Создание дефолтного питомца</button>
    </div>
    <div v-if="activeTab == 'orders'" id="profile-orders">
      <OrderCard v-for="(orderId, index) in orders" :key="index" :orderId="orderId" />
    </div>
    <SettingsCard :profile="userInfo" v-if="activeTab == 'settings'" id="profile-settings" />
  </div>
</template>

<script>
import PetCard from "@/components/profile/PetCard";
import OrderCard from "@/components/profile/OrderCard";
import SettingsCard from "@/components/profile/SettingsCard";
import Loader from "@/components/Loader";

export default {
  name: "Profile",
  metaInfo: {
    title: "Profile"
  },
  components: { PetCard, OrderCard, SettingsCard, Loader },
  data() {
    return {
      userInfo: {
        email: "test@test.test",
        phone: "2-123-141-32-31",
        address: "Moscow Pushkin st 8 rqwead fdsfasf"
      },
      pets: [],
      orders: [3, 5, 7, 12, 44],
      disabled: true,
      activeTab: "pets"
    };
  },
  methods: {
    changeTab: function(tabName) {
      if (tabName != this.activeTab) {
        document
          .querySelector(`#${this.activeTab}`)
          .classList.remove("active-tab");
        document.querySelector(`#${tabName}`).classList.add("active-tab");
        this.activeTab = tabName;
      }
    },
    createDefaultPet() {
      const payload = {
        name: "Johnny",
        gender: "f",
        size: "3",
        breed: "Default dog",
        birthday_years: "1-3",
        food_exceptions: ""
      };
      this.$store.dispatch("pet/createPet", payload).then(() => {
        this.$store.dispatch("pet/fetchPet").then(status => {
          if (status === true) {
            console.log(this.$store.getters["pet/petList"]);
          }
        });
      });
    },
    fetchPets() {
      this.$store.dispatch("pet/fetchPet").then(status => {
        if (status === true) {
          this.pets = this.$store.getters["pet/petList"];
        }
      });
    }
  },
  computed: {
    headerText() {
      switch (this.activeTab) {
        case "pets":
          return "Ваши животные";
          break;
        case "orders":
          return "Ваши заказы";
          break;
        case "settings":
          return "Настройки";
          break;
        default:
          return "Что-то пошло не так";
          break;
      }
    }
  },
  beforeMount() {
    if (this.pets.length == 0) {
      this.fetchPets()
    }
    this.$store.dispatch("order/fetchOrdersList")
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat');

#profile {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: grid;
  grid-gap: 1vw;
  padding-right: 12.5%;
  padding-left: 12.5%;
  grid-template-areas:
    "header"
    "nav"
    "block";
  grid-template-rows: repeat(auto-fit, minmax(5vh, 1fr));
  &-nav {
    height: 100%;
    grid-area: nav;
    &-tabs {
      display: flex;
      flex-flow: row nowrap;
      text-align: left;
      justify-content: center;
      padding: 0;
      list-style-type: none;
      li {
        border-left: 1px solid #2289B5;
        border-top: 1px solid #2289B5;
        border-bottom: 1px solid #2289B5;
        height: 40px;
        font-weight: 500;
        font-size: 24px;
        line-height: 22px;
        padding: 19px 97px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        transition: 0.5s linear all;
        &:last-child {
          border-right: 1px solid #2289B5;
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
    margin-top: 10px;
  }
  &-pets,
  &-orders {
    grid-area: block;
    overflow-x: scroll;
  }
  &-pets {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(23vw, 1fr));
  }
  &-orders {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    div:nth-child(even) {
      background: #f2f3f7;
    }
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
  background-color: #2289B5;
  color: white;
  transition: 0.2s linear all;
}
</style>
