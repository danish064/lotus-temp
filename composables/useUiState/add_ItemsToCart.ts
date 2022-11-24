import {useCartProducts} from '~~/stores/CartProducts';


export default function addToCart(item){
    // console.log("i am working bitch")
    const cartProducts = useCartProducts()
    console.log(item)
    console.log("this is before::>>>" , cartProducts.cartItems)
    cartProducts.increment(item)
    console.log("this is after::>>>" , cartProducts.cartItems)



}