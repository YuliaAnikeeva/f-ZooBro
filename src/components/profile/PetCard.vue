<template>
  <div class="card">
    <img src="@/assets/default-avatar.png" alt />
    <span class="card__name">
      <p>{{ this.pet.name }}</p>
      <p>Edit data</p>  
    </span> 
    <span>Порода:</span>
    <span>{{ pet.breed }}</span>
    <span>Дата рождения:</span>
    <span>{{ yearsOldString }}</span>
    <span>Пол:</span>
    <span>{{ pet.gender }}</span>
    <span>Размер:</span>
    <span>{{ sizeString }}</span>
    <span>Аллергия:</span>
    <span>{{ pet.food_exceptions }}</span>
  </div>
</template>

<script>
export default {
  props: ["pet"],
  data() {
    return {
      disabled: true
    };
  },
  methods: {
    updatePet() {
      const payload = {
        id: this.pet.id,
        gender: this.pet.gender == "m" ? "f" : "m"
      };
      this.$store.dispatch("pet/updatePet", payload).then(() => {
        this.$store.dispatch("pet/fetchPet").then(status => {
          if (status === true) {
            location.reload();
          }
        });
      });
    }
  },
  computed: {
    nameString() {
      switch (this.pet.gender) {
        case "m": {
          return "Его имя: ";
        }
        case "f": {
          return "Её имя: ";
        }
        default: {
          return "Имя питомца: ";
        }
      }
    },
    sizeString() {
      switch (this.pet.size) {
        case "1": {
          return `маленький`;
        }
        case "2": {
          return "средний";
        }
        case "3": {
          return "большой";
        }
        default: {
          return "неопределен";
        }
      }
    },
    yearsOldString() {
      if (this.pet.birthday_date) {
        return `Дата рождения: ${this.pet.birthday_date}`;
      }
      if (this.pet.birthday_years) {
        return `Приблизительный возраст: ${this.pet.birthday_years} ${
          this.pet.birthday_years == "1-3" ? "года" : "лет"
        } `;
      }
      return "Возраст не указан :(";
    }
  },
};
</script>

<style lang="scss" scoped>
.card {
  // display: flex;
  // flex-flow: column nowrap;
  // justify-content: flex-start;
  display: grid;
  grid-template-areas: 
  "avatar name"
  "breed breed_text"
  "dob dob_text"
  "gender gender_text"
  "size size_text"
  "food food_text"
  ;
  grid-template-columns: 50%;
  grid-gap: 20px;
  background: #FBFBFB;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-bottom: 40px;
  padding: 40px;
  font-size: 16px;
  &__name {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    // align-items: center;
  }
  span {
    margin-bottom: 20px;
    text-align: left;
  
  }
  img {
    height: 100px;
    background: #c4c4c4;
    border-radius: 50%;
    padding: 10px;
    
  }
}
</style>
