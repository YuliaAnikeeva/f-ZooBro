<template>
  <div>
    <h1>admin panel</h1>
    <hr>
    <h2>Orders</h2>
    <div id="orders">
      <div>
        <h3>Filter orders</h3>
        <label>
          <input type="radio" value="all" v-model="selectedCategory">
          Все
        </label>
        <label>
          <input type="radio" value="0" v-model="selectedCategory">
          Новый  
        </label>
        <label>
          <input type="radio" value="1" v-model="selectedCategory">
          Обрабатывается
        </label>
        <label>
          <input type="radio" value="2" v-model="selectedCategory">
          В пути
        </label>
        <label>
          <input type="radio" value="3" v-model="selectedCategory">
          Выполнен
        </label>
        <label>
          <input type="radio" value="4" v-model="selectedCategory">
          Отменен
        </label>
      </div>
      <div 
        v-for="(order, index) in this.$store.state.orders"
        :key="index"
      >
        {{order}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Admin',
    metaInfo: {
      title: 'Admin',
    },
    data() {
      return {
        selectedCategory: 'all'
      }
    },
    created() {
      this.$store.getters['admin/getOrderAddress'](2)
      console.log(this.$store)
    }
  }
</script>

<style lang="scss" scoped>
  div {
    background: #f2f3f7;
    height: 100%;
    width: 100%;
  }
</style>
