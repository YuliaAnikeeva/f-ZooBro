<template>
  <div :class="currentOrder.status">
    <span>Order # {{ orderId }}</span>
    <span>Data: {{ currentOrder.data }}</span>
    <span>For: {{ pets[currentOrder.petId].name }}</span>
    <span>Status: {{ currentOrder.status }} </span>
  </div>
</template>

<script>
export default {
  props: {
    orderId: Number
  },
  data () {
    return {
      orders: {
        3: {
          data: '12.03.2020',
          petId: 44,
          status: 'new'
        },
        5: {
          data: '12.03.2020',
          petId: 44,
          status: 'dealing'
        },
        7: {
          data: '12.03.2020',
          petId: 34,
          status: 'on-the-way'
        },
        12: {
          data: '12.03.2020',
          petId: 44,
          status: 'done'
        },
        44: {
          data: '12.03.2020',
          petId: 34,
          status: 'canceled'
        }
      },
      pets: {
        34: {
          name: 'Johny'
        },
        44: {
          name: 'Lola'
        }
      }
    }
  },
  computed: {
    currentOrder () {
      return this.orders[this.orderId]
    }
  }
}
</script>
<style lang="scss" scoped>
  .new {
    background-color: rgba(0, 128, 0, 0.35) !important;
  }

  .dealing {
    background-color: rgba(205, 92, 92, 0.35) !important;
  }

  .on-the-way {
    background-color: rgba(135, 206, 250, 0.35) !important;
  }

  .done {
    background-color: rgba(0, 255, 0, 0.35) !important;
  }

  .canceled {
    background-color: rgba(255, 0, 0, 0.35) !important;
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
  }
</style>
