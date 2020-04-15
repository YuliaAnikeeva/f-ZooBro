<template>
  <div class="card">
    <label>
      <h3>Pet's name</h3> 
      <input type="text" :disabled="disabled" v-model="currentPet.name">
    </label>
    <label>
      <h3>Sex</h3>
      <select :disabled="disabled" v-model="currentPet.sex">
        <option value="m">Male</option>
        <option value="f">Female</option>
      </select>
    </label>
    <label>
      <h3>Species</h3>
      <input type="text" :disabled="disabled" v-model="currentPet.species">
    </label>
    <label>
      <h3>Weight</h3>
      <select :disabled="disabled" v-model="currentPet.weight">
        <option value="small">Small: less then 5 kg</option>
        <option value="middle">Middle: between 5kg and 20kg</option>
        <option value="big">Big: more then 20kg</option>
      </select>
    </label>
    <label>
      <h3>Age</h3>
      <input v-if="currentPet.age.date" type="text" :disabled="disabled" v-model="currentPet.age.date">
      <select 
        :disabled="disabled"
        v-model="currentPet.age.years"
        v-if="!currentPet.age.date"
      >
        <option value="small">0 - 1 y.o.</option>
        <option value="middle">1 - 5 y.o.</option>
        <option value="big">5 - 10 y.o.</option>
      </select>
    </label>
    <label v-if="currentPet.features">
      <h3>Food features</h3>

      <h4>Like</h4>
      <input :disabled="disabled" id="like-meat" type="checkbox" value="meat" v-model="currentPet.features.like">
      <label for="like-meat">Meat</label>
      <input :disabled="disabled" id="like-fish" type="checkbox" value="fish" v-model="currentPet.features.like">
      <label for="like-fish">Fish</label>
      <input :disabled="disabled" id="like-veg" type="checkbox" value="vegetables" v-model="currentPet.features.like">
      <label for="like-veg">Vegetables</label>

      <h4>Dislike</h4>
      <input :disabled="disabled" id="dislike-meat" type="checkbox" value="meat" v-model="currentPet.features.dislike">
      <label for="dislike-meat">Meat</label>
      <input :disabled="disabled" id="dislike-fish" type="checkbox" value="fish" v-model="currentPet.features.dislike">
      <label for="dislike-fish">Fish</label>
      <input :disabled="disabled" id="dislike-veg" type="checkbox" value="vegetables" v-model="currentPet.features.dislike">
      <label for="dislike-veg">Vegetables</label>
    </label>

    <div>
      <h3>Subscription</h3>
      <p>Status: 
        <span v-if="currentPet.subscription.status" class="green">Active</span>
        <span v-else class="red">Disabled</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    petId: Number,
  },
  data() {
    return {
      disabled: true,
      select: 'test',
      pets: {
        34: {
          name: 'Johny',
          sex: 'm',
          species: 'Bulldog',
          weight: 'middle',
          age: {
            date: false,
            years: 'middle'
          },
          features: {
            like: ['meat'],
            dislike: ['fish', 'vegetables']
          },
          subscription: {
            status: true,
            duration: 'monthly'
          }
        },
        44: {
          name: 'Lola',
          sex: 'f',
          species: 'Labrador',
          weight: 'big',
          age: {
            date: '14.06.2010',
            years: false,
          },
          features: false,
          subscription: {
            status: false,
            duration: false,
          }
        }
      }
    }
  },
  created() {
    this.currentPet = this.pets[this.petId]
  },
  computed: {
    
  }
}
</script>

<style lang="scss" scoped>
  .card {
    border: 1px solid black;
    border-radius: 5px;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>