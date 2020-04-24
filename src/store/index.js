import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import auth from './auth'
import order from './order'
import toastify from './toastify'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        password: 'qwerty',
        email: 'some@email.com',
        mobile: '-',
        type: 'admin',
        address: '-'
      },
      {
        id: 2,
        password: 'qwerty',
        email: 'user@user.com',
        mobile: '1-234-567-89-01',
        type: 'user',
        address: 'Moscow Pushkin st 8 220'
      }
    ],
    pets: [
      {
        id: 33,
        user_id: 2,
        name: 'Johny',
        gender: 'male',
        size: 'medium',
        breed: 'Bulldog',
        birthday_date: '2018-06-01',
        birthday_years: null,
        food_exceptios: null,
      },
      {
        id: 44,
        user_id: 2,
        name: 'Lola',
        gender: 'female',
        size: 'big',
        breed: 'Labrador',
        birthday_date: null,
        birthday_years: '1-5',
        food_exceptios: ['vegetables'],  
      }
    ],
    orders: [
      {
        id: 0,
        pet_id: 44,
        status: 0,
      },
      {
        id: 1,
        pet_id: 33,
        status: 1,
      },
      {
        id: 4,
        pet_id: 44,
        status: 2,
      },
      {
        id: 10,
        pet_id: 44,
        status: 3,
      },
      {
        id: 12,
        pet_id: 33,
        status: 4,
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin, auth, order, toastify, user
  }
})
