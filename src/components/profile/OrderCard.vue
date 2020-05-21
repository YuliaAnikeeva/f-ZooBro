<template>
  <tr>
    <td>{{ order.date_create.split(' ')[0] }}</td>
    <td class="black">{{ order.id }}</td>
    <td>{{ petName }}</td>
    <td>{{ priceString }}</td>
    <td class="status" :class="statusClass">{{ statusString }}</td>
  </tr>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {};
  },
  computed: {
    petName() {
      const curPet = this.$store.getters["pet/petList"].filter(pet => {
        if (pet.id == this.order.pet_id) {
          return true;
        }
      });
      if (curPet.length > 0) {
        return curPet[0].name;
      }
      return "Имя не найдено :(";
    },
    statusString() {
      switch (this.order.status_id.toString()) {
        case "1": {
          return "Новый";
        }
        case "2": {
          return "В обработке";
        }
        case "3": {
          return "В пути";
        }
        case "4": {
          return "Выполнен";
        }
        case "5": {
          return "Отменен";
        }
      }
    },
    statusClass() {
      switch (this.order.status_id.toString()) {
        case "1": {
          return "new";
        }
        case "2": {
          return "dealing";
        }
        case "3": {
          return "way";
        }
        case "4": {
          return "done";
        }
        case "5": {
          return "undone";
        }
      }
    },
    priceString() {
      switch (this.order.price_id.toString()) {
        case "1": {
          return "Разовая покупка";
        }
        case "2": {
          return "Подписка на 6 месяцев";
        }
        case "3": {
          return "Разовая покупка на 6 месяцев";
        }
      }
    }
  },
  methods: {},
  created() {
    console.log(this.orders);
  }
};
</script>
<style lang="scss" scoped>
td {
  padding-left: 5px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  color: #464451;
  position: relative;
}

.black {
  font-weight: 600;
}

.status {
  padding-left: 22px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 15%;
    width: 12px;
    height: 12px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
  }
}

.new::before {
  background: yellow;
}

.dealing::before {
  background: #FFCC01;
}

.way::before {
  background: #2289B5;
}

.done::before {
  background: #19B420;
}

.undone::before {
  background: #C84C25;
}
</style>
