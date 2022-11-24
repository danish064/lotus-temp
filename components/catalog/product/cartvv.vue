<template>
    <div>
        <h1>
            {{cartProducts.message}}
            {{cartProducts.cartItemsData}}
        </h1>
    </div>
</template>

<script setup>

import {useCartProducts} from '~~/stores/CartProducts';
const cartProducts = useCartProducts()
</script>