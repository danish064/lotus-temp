import { defineStore } from 'pinia';
export const usewishlistProducts = defineStore('wishlist',{
    state:()=>({
        wishlistItems:[],
        message:'Wishlist is this',
    }),

   getters:{
 
        wishlistItemsData:(state) => state.wishlistItems
    },

    actions:{

        increment(item){
            this.wishlistItems.push(item)
        }
    }
})