import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        productList: [
            { name: 'backpack', price: 230},
            { name: 'T-shirt', price: 140},
            { name: 'laptop', price: 4300},
            { name: 'air-conditioning', price: 3300},
            { name: 'television', price: 5000},
            { name: 'shoes', price: 900},
            { name: 'basketball', price: 360},
            { name: 'cup', price: 56},
        ]
    },
    getters: {
        saleProducts: (state) => {
            var newState = state.productList.map(item => {
                return {
                    name: item.name,
                    price: item.price / 2
                }
            });
            return newState;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.productList.forEach(item => {
                item.price -= payload;
            });
        }
    },
    actions: {
        reducePriceAsync: (context, payload) => {
            setTimeout(function() {
                context.commit('reducePrice', payload);
            }, 2000);
        }
    }
});