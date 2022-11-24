import { defineStore } from 'pinia';
export const useCartProducts = defineStore('cart',{
    state:()=>({
        cartItems:[],
        message:'Helloooo',
    }),

    getters:{
        cartItemsData:(state) => state.cartItems
    },

    actions:{
        increment(item){
            this.cartItems.push(item)
        }
    }
})
