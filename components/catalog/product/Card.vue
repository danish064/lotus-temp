<template>
  <div
    class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75"
  >
    <img
      :src="product.media_gallery[0].url"
      :alt="product.imageAlt"
      class="h-full w-full object-cover object-center"
    />
  </div>
  <div class="pt-10 pb-4 text-center">
    <h3 class="text-sm font-medium text-gray-900">
      <a :href="'/product/' + product.uid">
        <span aria-hidden="true" class="absolute inset-0" />
        {{ product.name }}
      </a>
    </h3>
    <div class="mt-3 flex flex-col items-center">
      <p class="sr-only">{{ product.review_count }} out of 5 stars</p>
      <div class="flex items-center">
        <StarIcon
          v-for="rating in [0, 1, 2, 3, 4]"
          :key="rating"
          :class="[
            product.review_count > rating ? 'text-yellow-400' : 'text-gray-200',
            'flex-shrink-0 h-5 w-5',
          ]"
          aria-hidden="true"
        />
      </div>
      <p class="mt-1 text-sm text-gray-500">
        {{ product.review_count }} reviews
      </p>
    </div>
    <p class="mt-4 text-base font-medium text-gray-900">
      {{ product.price_range.maximum_price.regular_price.value }}
      {{ product.price_range.maximum_price.regular_price.currency }}
    </p>
  </div>
</template>
<script setup>
import { StarIcon } from '@heroicons/vue/20/solid';

// const product = defineProps(['product']);
defineProps(['product']);
</script>
