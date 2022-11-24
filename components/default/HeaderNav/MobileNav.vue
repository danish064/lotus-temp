<template>
  <div class="w-full px-4 pt-1">
    <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure
        v-slot="{ open }"
        v-for="category in categories"
        :key="category.uid"
      >
        <div v-if="category.children.length == 0">
          <button
            class="flex w-full justify-between rounded-lg mt-2 bg-indigo-100 px-4 py-2 text-left text-base font-medium text-black-600 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
          >
            <NuxtLink :to="catLink(category.url_path)">
              {{ category.name }}
            </NuxtLink>
          </button>
        </div>
        <DisclosureButton
          v-else
          class="flex w-full justify-between rounded-lg mt-2 bg-indigo-100 px-4 py-2 text-left text-base font-medium text-black-600 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75"
        >
          <span>{{ category.name }}</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"
            class="h-5 w-5 text-indigo-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6">
            <div class="grid grid-cols-1 gap-y-10 gap-x-6">
              <div v-for="l3cat in category.children" :key="l3cat.name">
                <NuxtLink
                  :to="catLink(l3cat.url_path)"
                  :id="`mobile-featured-heading-${uid}`"
                  class="font-medium text-gray-900"
                >
                  {{ l3cat.name }}
                </NuxtLink>
                <ul
                  role="list"
                  :aria-labelledby="`mobile-featured-heading-${uid}`"
                  class="mt-6 space-y-6"
                >
                  <li
                    v-for="item in l3cat.children"
                    :key="item.name"
                    class="flex"
                  >
                    <NuxtLink
                      :to="catLink(item.url_path)"
                      class="text-gray-500"
                      >{{ item.name }}</NuxtLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { computed } from 'vue';
import { ChevronUpIcon } from '@heroicons/vue/20/solid';
defineProps(['categories']);
let catLink = (link) => {
  return '/category/' + link;
};
// let categories = computed(() => {
//   return props.categories.filter((category) => {
//     return category.children.length > 0;
//   });
// });
</script>
