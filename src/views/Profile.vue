<template>
  <div id="profile">
    <div id="profile-nav">
      <ul id="profile-nav-tabs">
        <li v-on:click="changeTab('pets')" class="active-tab" id="pets">
          Pets
        </li>
        <li v-on:click="changeTab('orders')" id="orders">
          Orders
        </li>
        <li v-on:click="changeTab('settings')" id="settings">
          Settings
        </li>
        <li v-on:click="changeTab('exit')" id="exit">
          Exit
        </li>
      </ul>
    </div>
    <div id="profile-header">
      <h2>{{headerText}}</h2>
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
  },
};
</script>

<style lang="scss" scoped>
#profile {
  display: grid;
  grid-gap: 1vw;
  grid-template-areas:
    "header"
    "nav"
    "block";
  grid-template-rows: repeat(auto-fit, minmax(5vh, 1fr));
  &-nav {
    height: 100%;
    grid-area: nav;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    &-tabs {
      display: flex;
      flex-flow: row nowrap;
      text-align: left;
      justify-content: center;
      padding: 0;
      list-style-type: none;
      li {
        height: 40px;
        font-size: 25px;
        padding: 10px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        &:hover {
          background-color: #f2f3f7;
          cursor: pointer;
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
    margin-right: 15px;
  }
  &-pets {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    div {
      width: 22.9%;
      margin-right: 60px;
      &:nth-child(3n+3) {
        margin-right: 0;
      }
    }
  }
  &-orders {
    width: 85%;
    overflow-y: scroll;
    div:nth-child(even) {
      background: #f2f3f7;
    }
  }
  &-settings {
    width: 85%;
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
  background-color: #f2f3f7;
  border-top: 1px solid #d3d4d7;
  border-bottom: 1px solid #d3d4d7;
}
</style>
