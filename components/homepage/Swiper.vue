<template>
  <swiper
    :modules="[Autoplay, Pagination]"
    :slides-per-view="1"
    :space-between="50"
    :loop="true"
    :pagination?="{ clickable: true }"
    :autoplay?="{
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"
    class="my-12"
  >
    <SwiperSlide v-for="product in productsList" :key="product.uid">
      <div class="mx-auto max-w-3xl px-4 lg:max-w-7xl lg:px-8">
        <div
          class="
            flex flex-row
            max-sm:flex-col-reverse
            max-md:flex-col-reverse
            h-644
          "
        >
          <div class="bg-teal-200 max-sm:p-12 lg:p-24 my-5">
            <h1
              class="
                text-4xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-5xl
                md:text-6xl
              "
            >
              {{ product.name }}
            </h1>
            <div
              class="
                mx-auto
                my-3
                max-w-md
                text-base text-gray-500
                sm:text-lg
                md:mt-5 md:max-w-3xl md:text-xl
              "
              v-html="product.description.html"
            ></div>
            <div class="align-bottom flex flex-row justify-between">
              <h3 class="leading-none self-end">
                <span class="text-2xl font-bold tracking-tight text-gray-900"
                  >As low as:
                </span>
                <span class="text-2xl font-bold tracking-tight text-gray-900"
                  >$22.00</span
                >
              </h3>
              <button
                type="submit"
                class="
                  items-center
                  justify-center
                  rounded-md
                  border border-transparent
                  bg-teal-900
                  py-2
                  px-8
                  text-white
                "
              >
                WISHLIST
              </button>
            </div>
          </div>
          <div
            class="bg-teal-400 object-contain mb-5px"
            style="box-shadow: -20px 20px #b3e0dc"
          >
            <img
              :src="product.thumbnail.url"
              alt="img"
              class="h-full w-full px-5 py-5"
            />
          </div>
        </div>
      </div>
    </SwiperSlide>
  </swiper>
</template>

  <script lang="ts" setup>
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/bundle";
import swiperProduct from "@/graphql-queries/catalog/product/swiperProduct.gql";
import {
  ProductInterface,
  ProductsListQuery,
  QueryProductsArgs,
} from "~~/modules/GraphQL/types";

const variables: QueryProductsArgs = {
  filter: {
    sku: {
      in: ["MP06", "MP05", "MP07", "MP01"],
    },
  },
};
interface ProductsQuery extends ProductsListQuery {
  products?: {
    items?: Array<ProductInterface>;
  };
}

const { data } = await useAsyncQuery<ProductsQuery>(swiperProduct, variables);
const productsList = data.value.products.items;
</script>
