import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {  // для хранения данных
    products: []
  },
  mutations: { // для изменения данных в state, m-синхронны
    SET_PRODUCT_TO_STATE: (state, products) => {
      state.products = products;
    }
  },
  actions: { // а-асинхронны
    GET_PRODUCTS_FROM_API({
      commit
    }) {
      return axios('http://localhost:3000/products', { // это промис
        method: "GET"
      })
        .then((products) => {

          commit('SET_PRODUCT_TO_STATE', products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    getters: { // это короткий путь для получения данных из state
      PRODUCTS(state) {
        return state.products;
      }
    }
  }
});

export default store;