<template>
  <div class="order-data">
    <div class="order-data__id">
      <span>Order id #{{order.id}}</span>
      <span v-if="order.comment">Last comment: {{ order.comment }}</span>
    </div>
    <div class="order-data__user">
      <ul>
        <li>
          <h3>User's data</h3>
        </li>
        <li>
          Email:
          <span class="black">{{ order.user.email }}</span>
        </li>
        <li>
          Name:
          <span class="black">{{ order.user.name }}</span>
        </li>
        <li>
          Phone number:
          <span class="black">{{ order.user.phone }}</span>
        </li>
        <li>
          Address:
          <span class="black">{{order.address}}</span>
        </li>
      </ul>
    </div>
    <div class="order-data__pet" v-if="order.pet != null">
      <ul>
        <li>
          <h3>Pet's data</h3>
        </li>
        <!-- <li>Name: <span class="black">{{petInfo.name}}</span></li>
        <li>Gender: <span class="black">{{petInfo.gender}}</span></li>
        <li>Size: <span class="black">{{petInfo.size}}</span></li>
        <li>Breed: <span class="black">{{petInfo.breed}}</span></li>
        <li>Food exceptions: <span class="black">{{petInfo.food_exceptions != null ? petInfo.food_exceptions : 'none'}}</span></li>-->
      </ul>
    </div>
    <div class="order-data__pet" v-else>
      <span>No pet info</span>
    </div>
    <div class="order-data__status">
      <p>
        Current status:
        <span class="black">{{selectedStatus ? statusString : order.status.title}}</span>
      </p>
      <button
        v-if="!changeStatus"
        @click="changeStatus = !changeStatus"
      >Изменить статус</button>
      <select v-if="changeStatus" v-model="selectedStatus">
        <option :disabled="true" value="false">Выбор нового статуса</option>
        <option value="1">Новый</option>
        <option value="2">Обрабатывается</option>
        <option value="3">В пути</option>
        <option value="4">Выполнен</option>
        <option value="5">Отменен</option>
      </select>
      <button v-if="statusChanged" @click="updateOrder">Отправить изменение</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      selectedStatus: false,
      changeStatus: false
    };
  },
  created() {
  },
  computed: {
    statusChanged() {
      if (
        this.changeStatus && this.selectedStatus != this.order.status_id
      ) {
        return true;
      }
      return false;
    },
    petInfo() {
      return this.$store.getters["admin/getPetInfo"](this.order.pet_id);
    },
    userInfo() {
      return this.$store.getters["admin/getUserInfo"](this.petInfo.user_id);
    },
    statusString() {
      switch (this.selectedStatus) {
        case '1': {
          return 'Новый'
        }
        case '2': {
          return 'Обрабатывается'
        }
        case '3': {
          return 'В пути'
        }        
        case '4': {
          return 'Выполнен'
        }
        case '5': {
          return 'Отменен'
        }
        default: {
          return 'Что-то пошло не так'
        }
      }
    }
  },
  methods: {
    updateOrder() {
      this.order.status_id = this.selectedStatus
      this.order.comment = 'updated by admin'
      this.$store.dispatch('admin/updateOrder', this.order)
        .then(res => {
          if (res) {
            this.changeStatus = false
          }
        })
    }
  }
};
</script>

<style lang="scss" scoped>
.order-data {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  border: 2px solid #2289b5;
  border-radius: 10px;
  margin-bottom: 10px;
  text-align: left;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &__id,
  &__user,
  &__pet,
  &__status {
    display: flex;
    flex-flow: column;
    align-content: center;
    justify-content: center;
  }
  &__id {
    text-align: center;
  }
  button {
    margin-top: 15px;
    width: 50%;
  }
  select {
    width: 75%;
  }
}

ul {
  list-style-type: none;
}

.black {
  color: black;
  font-weight: 600;
}
</style>