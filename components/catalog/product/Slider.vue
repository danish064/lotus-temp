<template>
  <swiper :modules="[Autoplay, Pagination]" :slides-per-view=slides :space-between="0" :loop="true"
    :pagination?="{ clickable: true }" :autoplay?="{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }" class="my-12 md:{{slides =  2}}">
    <SwiperSlide v-for="item in data.products.items" :key="item.sku"
      class="py-12 drop-shadow-2xl min-h-0 flex items-center justify-center">
      <div class="bg-white border-b-4 border-teal-500 rounded-lg min-w-[90%] flex flex-col items-center m-0">
        <!-- Data -->

        <div class="p-5">
          <img :src="item.thumbnail.url" alt="Product image...." class="mb-2 w-72 h-72 object-cover rounded-lg" />
          <h1>{{ item.name }}</h1>
          <!-- <h1>{{ item.sku }}</h1> -->
        </div>

        <!-- Atoms -->

        <div>
          <div class="flex items-center">
            <p class="text-sm text-gray-700">
              {{ item.rating_summary }}
              <span class="sr-only"> out of 5 stars</span>
            </p>
            <div class="ml-1 flex items-center">
              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[
                item.rating_summary > rating
                  ? 'text-yellow-400'
                  : 'text-gray-200',
                'h-5 w-5 flex-shrink-0',
              ]" aria-hidden="true" />
            </div>
            <div class="ml-4 flex">
              <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">See all {{
                  item.price_range.maximum_price
              }} reviews</a>
            </div>
          </div>
          <div class="flex space-x-20">
            <button @click="addToCart(item)" type="submit"
              class="mt-4 mb-2 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              Add to cart
            </button>
            <button type="button" class="p-6 flex rounded-lg text-gray-400">
              <HeartIcon class="h-8 w-8 hover:fill-red-600 active:fill-red-600 flex-shrink-0" aria-hidden="true" />
              <span class="sr-only">Add to favorites</span>
            </button>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { StarIcon } from "@heroicons/vue/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";
import productSliderGql from "~~/graphql-queries/catalog/product/productSlider.gql";
// import {useCartProducts} from '~/stores/CartProducts';

import addToCart from '~~/composables/useUiState/add_ItemsToCart';
import { ProductsListQuery, ProductsListQueryVariables } from "~~/modules/GraphQL/types";

const slides = 4;


const variables: ProductsListQueryVariables = {
  filter: {
    "category_id": {
      "in": ["3"]
    }
  }
};

const { data, error } = await useAsyncQuery<ProductsListQuery>(productSliderGql, variables);
</script>
