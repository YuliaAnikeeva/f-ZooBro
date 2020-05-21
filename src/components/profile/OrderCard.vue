<template>
  <div :class="currentOrder.status">
    <p>Order # 
      <span>{{ orderId }}</span>
    </p>
    <ul>
      <li>Data: 
        <span>{{ currentOrder.data }}</span>
      </li>
      <li>For: 
        <span>{{ pets[currentOrder.petId].name }}</span>
      </li>
    </ul>
    <p>Status: 
      <span class="status">
        {{ currentOrder.status }}
      </span>
    </p>
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
    border-left: 5px solid rgb(0, 128, 0);
    .status {
      color: rgb(0, 128, 0);
    }
  }

  .dealing {
    border-left: 5px solid rgb(205, 92, 92);
    .status {
      color: rgb(205, 92, 92);
    }
  }

  .on-the-way {
    border-left: 5px solid rgb(135, 206, 250);
    .status {
      color: rgb(135, 206, 250);
    }
  }

  .done {
    border-left: 5px solid rgb(0, 255, 0);
    .status {
      color: rgb(0, 255, 0);
    }
  }

  .canceled {
    border-left: 5px solid rgb(255, 0, 0);
    .status {
      color: rgb(255, 0, 0);
    }
  }

  div {
    display: flex;
    flex-flow: row nowrap;
    justify-content: stretch;
    align-items: center;
    text-align: left;
    font-size: 16px;
    height: 75px;
    border-top: 1px solid #f3f3f3;
    span {
      color: black;
    }
    p:first-child {
      width: 40%;
      margin-left: 15px;
    }
    ul {
      width: 30%;
      list-style-type: none;
    }
  }
</style>
