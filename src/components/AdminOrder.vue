<template>
  <div class="order-data">
    <span class="order-data__id">
      Order id #{{order.id}}
    </span>
    <ul>
      <li><h3>User's data</h3></li>
      <li>Email: <span class="black">{{userInfo.email}}</span></li>
      <li>Phone number: <span class="black">{{userInfo.mobile}}</span></li>
      <li>Address: <span class="black">{{userInfo.address}}</span></li>
    </ul>
    <ul>
      <li><h3>Pet's data</h3></li>
      <li>Name: <span class="black">{{petInfo.name}}</span></li>
      <li>Gender: <span class="black">{{petInfo.gender}}</span></li>
      <li>Size: <span class="black">{{petInfo.size}}</span></li>
      <li>Breed: <span class="black">{{petInfo.breed}}</span></li>
      <li>Food exceptions: <span class="black">{{petInfo.food_exceptions != null ? petInfo.food_exceptions : 'none'}}</span></li>
    </ul>
    <span>
      <p>Current status: <span class="black">{{statusString}}</span></p>
      <button v-if="!changeStatus" @click="changeStatus = !changeStatus">Изменить статус</button>
    </span>
    <select v-if="changeStatus" v-model="selectedStatus" >
      <option :disabled="true" value="">Выбор нового статуса</option>
      <option value="0">Новый</option>
      <option value="1">Обрабатывается</option>
      <option value="2">В пути</option>
      <option value="3">Выполнен</option>
      <option value="4">Отменен</option>
    </select>
    <button v-if="statusChanged">Отправить изменение</button>
  </div>
</template>

<script>
export default {
  props: ['order'],
  data() {
    return {
      selectedStatus: '',
      changeStatus: false,
    }
  },
  computed: {
    statusChanged() {
      if (this.selectedStatus != '' && this.selectedStatus != this.statusString) {
        return true
      }
      return false
    },
    petInfo() {
      return this.$store.getters['admin/getPetInfo'](this.order.pet_id)
    },
    userInfo() {
      return this.$store.getters['admin/getUserInfo'](this.petInfo.user_id)
    },
    statusString() {
      switch (this.order.status) {
        case 0: {
          return 'Новый'
        }
        case 1: {
          return 'Обрабатывается'
        }
        case 2: {
          return 'В пути'
        }
        case 3: {
          return 'Выполнен'
        }
        case 4: {
          return 'Отменен'
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .order-data {
    // display: flex;
    // flex-flow: row nowrap;
    // justify-content: space-evenly;
    // align-items: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    border: 2px solid #2289b5;
    border-radius: 10px;
    margin-bottom: 10px;
    text-align: left;
    &__id {
      margin: auto;
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