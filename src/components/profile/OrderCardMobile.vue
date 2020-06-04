<template>
  <div class="order">
    <div class="order-header">
      <span>Заказ <b class="black">{{ order.id }}</b> от {{ order.date_create.split(' ')[0] }}</span>
      <div class="status order-header__status" :class="statusClass">{{ statusString }}</div>
    </div>
    <div class="order-body">
      <div>{{ petName }}</div>
      <div>{{ priceString }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderCardMoblie",
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
};
</script>
<style lang="scss" scoped>
.black {
  font-weight: 600;
}

.status {
  padding-left: 22px;
  position: relative;
  &::before {
    content: "";
    // position: absolute;
    display: inline-block;
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

.order {
  padding: 20px 10px;
  border-bottom: 1px solid #E0E0E0;

  &-header {
    display: flex;
    margin-bottom: 10px;

    &__status {
      margin-left: auto;
    }
  }
  &-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > * {
      margin-top: 10px;
    }
  }
}
</style>
