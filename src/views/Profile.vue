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

    <div v-if="activeTab == 'pets' && pets.length > 0" id="profile-pets">
      <Loader v-if="pets.length ==  0" />
      <template v-if="!petEditor">
        <PetCard v-for="(pet, index) in pets" :key="index" :pet="pet" @focus:pet="onFocusPet" />
        <PetCard :pet="emptyPet" @add:pet="onAddPet" />
      </template>
      <template v-else>
        <PetForm
          :pet="petTemp"
          @save="onSavePet"
          @close="petEditor = false"
          />
      </template>
    </div>

    <div v-if="activeTab == 'settings'" id="profile-settings">
      <SettingsCard v-if="!profileEditor" :profile="profileData" />
      <SettingsForm v-else :profile="profileData"  :editStatus.sync="profileEditor"/>
      <button v-if="!profileEditor" @click="editProfile()">Изменить</button>
    </div>

    <div v-if="activeTab == 'orders'" id="profile-orders">
      <table>
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

export default {
  name: "Profile",
  metaInfo: {
    title: "Profile"
  },
  components: { PetCard, OrderCard, SettingsCard, SettingsForm, Loader, PetForm },
  data() {
    return {
      pets: [],
      orders: [3, 5, 7, 12, 44],
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
        // Для показа лучше так, потом переделать так, чтобы после фетча сразу прогружался нужный ТАБ

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
    async onSavePet(pet) {
      this.loader = true;
      let res;
      if (pet.id) {
        res = await this.$store.dispatch("pet/updatePet", pet)
      } else {
        res = await this.$store.dispatch("pet/createPet", pet)
      }
      if (res) {
        this.petEditor = false;
      }
      this.loader = false;
    }
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
    }
  },
  beforeMount() {
    if (this.pets.length == 0) {
      this.fetchPets();
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat");

#profile {
  font-family: Montserrat, serif;
  display: grid;
  grid-gap: 80px;
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
        border-left: 1px solid #2289b5;
        border-top: 1px solid #2289b5;
        border-bottom: 1px solid #2289b5;
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
    font-size: 36px;
    line-height: 44px;
    color: #464451;
  }
  &-pets,
  &-orders,
  &-settings,
  &-loader {
    grid-area: block;
  }
  &-settings,
  &-orders {
    margin-left: 13vw;
    margin-right: 13vw;
  }
  &-pets {
    display: grid;
    grid-gap: 50px;
    grid-template-columns: repeat(auto-fit, minmax(23vw, 1fr));
  }
  &-settings {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    button {
      margin-top: 80px;
      max-width: 13vw;
      outline: none;
      font-family: Montserrat, serif;
      padding: 15px 67px;
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
  #profile-settings,
  #profile-orders {
    margin-left: 0;
    margin-right: 0;
  }
  #profile-settings {
    button {
      max-width: 20vw;
    }
  }
}
</style>
