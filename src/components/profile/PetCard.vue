<template>
  <div class="card">
    <img src="@/assets/default-avatar.png" alt />
    <span>{{ nameString + this.pet.name }}</span>
    <span>Размер: {{ sizeString }}</span>
    <span v-if="pet.breed != null">Порода: {{ pet.breed }}</span>
    <span v-else>Порода не указана :(</span>
    <span>{{ yearsOldString }}</span>
    <span v-if="pet.food_exceptions != null && pet.food_exceptions != ''">Не любит: {{ pet.food_exceptions }}</span>
    <span v-else>Ест всё! :)</span>
  </div>
</template>

<script>
export default {
  props: ['pet'],
  data () {
    return {
      disabled: true,
    }
  },
  computed: {
    nameString() {
      switch (this.pet.gender) {
        case "m": {
          return 'Его имя: '
        }
        case "f": {
          return 'Её имя: '
        }
        default: {
          return 'Имя питомца: '
        }
      }
    },
    sizeString() {
      switch (this.pet.size) {
        case '1':{
          return `маленький`
        }
        case '2': {
          return 'средний'
        }
        case '3': {
          return 'большой'
        }
        default: {
          return 'неопределен'
        }
      }
    },
    yearsOldString() {
      if (this.pet.birthday_date) {
        return `Дата рождения: ${this.pet.birthday_date}`
      }
      if (this.pet.birthday_years) {
        return `Приблизительный возраст: ${this.pet.birthday_years} ${this.pet.birthday_years == '1-3' ? 'года' : 'лет'} `
      }
      return 'Возраст не указан :('
    }
  },
  mounted() {
    console.log(this.pet)
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    background-color: #f2f3f7;
    border: 2px solid #2289b5;
    margin-bottom: 10px;
    img {
      height: 100px;
      background: #c4c4cc;
      border-radius: 50%;
      padding: 5px;      
    }
    span {
      margin: auto;
    }
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
