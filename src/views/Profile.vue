<template>
  <div id="profile">
    <h2>User info</h2>
    <div id="profile-user"> 
      <label>
        <p>E-mail</p> 
        <input type="text" :disabled="disabled" v-model="email">
      </label>
      <label>
        <p>Phone</p>
        <input type="text" :disabled="disabled" v-model="phone">
      </label>
      <label>
        <p>Address</p>
        <textarea :disabled="disabled" v-model="address">
        </textarea>
      </label>
    </div>
    <h2>Pets cards</h2>
    <div id="profile-pets">
      <PetCard 
        v-for="(id, index) in pets"
        :key="index"
        :petId="id"
      />
    </div>
    <h2>Orders</h2>
    <div id="profile-orders">
      <OrderCard
        v-for="(orderId, index) in orders"
        :key="index"
        :orderId="orderId"
      />
    </div>
  </div>
</template>

<script>
  import PetCard from '@/components/PetCard';
  import OrderCard from '@/components/OrderCard';

  export default {
    name: 'Profile',
    metaInfo: {
      title: 'Profile',
    },
    components: {PetCard, OrderCard},
    data() {
      return {
        email: 'test@test.test',
        phone: '2-123-141-32-31',
        address: 'Moscow Pushkin st 8 rqwead fdsfasf',
        pets: [34, 44],
        orders: [3, 5, 7],
        disabled: true,
      }
    }
  }
</script>

<style lang="scss" scoped>
  #profile {
    margin: 5vh 10vw;
    div {
      background-color: #f2f3f7;
      border-radius: 10px;
      padding: 20px;
    }
    &-user {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      label {
        width: 20vw
      }
    }
    &-pets {
      display: flex;
      flex-flow: row nowrap;
      overflow-y: scroll;
      align-items: flex-start;
      justify-content: space-evenly;
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
</style>
