<template>
  <div>
    <span>
      Order id #{{order.id}}
    </span>
    {{order}}
    {{this.$store.getters['admin/getOrderAddress'](order.pet_id)}}
    <span>{{userInfo}}</span>
    <ul>
      <li><h3>Pet's data</h3></li>
      <li>Name: {{petInfo.name}}</li>
      <li>Gender: {{petInfo.gender}}</li>
      <li>Size: {{petInfo.gender}}</li>
      <li>Breed: {{petInfo.breed}}</li>
      <li>Food exceptions: {{petInfo.food_exceptions}}</li>
    </ul>
    <span>
      <p>Current status: {{statusString}}</p>
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
  created() {
    // this.selectedStatus = this.order.status
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
  }
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid black;
    margin-top: 10px;
  }
</style>