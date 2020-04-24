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
        v-for="(order, index) in this.$store.getters['admin/getOrdersByStatus'](selectedCategory)"
        :key="index"
      >
        <AdminOrder :order="order" />
      </div>
    </div>
  </div>
</template>

<script>
  import AdminOrder from '@/components/AdminOrder'

  export default {
    name: 'Admin',
    metaInfo: {
      title: 'Admin',
    },
    components: {
      AdminOrder
    },
    data() {
      return {
        selectedCategory: 'all'
      }
    },
    created() {
      console.log(this.$store)
    },
  }
</script>

<style lang="scss" scoped>
  div {
    background: #f2f3f7;
    height: 100%;
    width: 100%;
  }
</style>
