<template>
  <div class="admin">
    <div class="admin__header">
      <h1>admin panel</h1>
      <hr />
      <h2>Orders</h2>
    </div>
    <div class="admin-filter__by-id">
      <h3>Filter orders</h3>
      <label>
        <input type="radio" value="all" v-model="selectedCategory" />
        Все
      </label>
      <label>
        <input type="radio" value="1" v-model="selectedCategory" />
        Новый
      </label>
      <label>
        <input type="radio" value="2" v-model="selectedCategory" />
        Обрабатывается
      </label>
      <label>
        <input type="radio" value="3" v-model="selectedCategory" />
        В пути
      </label>
      <label>
        <input type="radio" value="4" v-model="selectedCategory" />
        Выполнен
      </label>
      <label>
        <input type="radio" value="5" v-model="selectedCategory" />
        Отменен
      </label>
      <button @click="fetchOrders">Отфильтровать</button>
    </div>
    <div v-if="false" class="admin-filter__find-one">
      <input type="text" placeholder="Введите ID заказа" />
    </div>
    <div class="admin__orders">
      <AdminOrder v-for="(order, index) in allOrders" :key="index" :order="order" />
    </div>
  </div>
</template>

<script>
import AdminOrder from "@/components/AdminOrder";

export default {
  name: "Admin",
  metaInfo: {
    title: "Admin"
  },
  components: {
    AdminOrder
  },
  data() {
    return {
      selectedCategory: "all",
    };
  },
  created() {
    if (this.$store.state.admin.orders.length == 0) {
      this.fetchOrders();
    }
  },
  methods: {
    fetchOrders() {
      if ((this.selectedCategory == "all")) {
        this.$store.dispatch("admin/fetchOrders");
      }

      if (this.selectedCategory != "all") {
        this.$store.dispatch("admin/fetchOrders", this.selectedCategory);
      }
    }
  },
  computed: {
    allOrders() {
      return this.$store.getters["admin/getOrders"];
    }
  }
};
</script>

<style lang="scss" scoped>
.admin {
  font-size: 14px;
  font-family: Montserrat, serif;
  display: grid;
  grid-template-areas:
    "header header"
    "filter orders";
  grid-template-columns: 0.5fr 3fr;
  grid-template-rows: 0.5fr 5fr;
  grid-gap: 5px;
  height: 100%;
  &__header {
    padding-top: 30px;
    grid-area: header;
  }
  &-filter__by-id {
    margin-left: 20px;
    grid-area: filter;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    label {
      text-align: left;
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      transition: 0.5s linear all;
      &:hover {
        cursor: pointer;
        background-color: whitesmoke;
      }
    }
  }
  &__orders {
    grid-area: orders;
    margin-right: 20px;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
