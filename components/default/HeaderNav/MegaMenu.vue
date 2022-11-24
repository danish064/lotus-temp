<template>
  <!-- :class="{ hidden: category.children.length == 0 }" -->
  <PopoverGroup class="ml-8">
    <div class="flex h-full justify-center space-x-8">
      <Popover
        v-for="(category, uid) in categories"
        :key="category.name"
        class="flex"
        v-slot="{ open }"
      >
        <template v-if="category.children.length == 0">
          <div class="relative flex">
            <NuxtLink
              :to="catLink(category.url_path)"
              class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
            >
              {{ category.name }}
            </NuxtLink>
          </div>
        </template>
        <template v-else>
          <div class="relative flex">
            <PopoverButton
              :class="[
                open
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-gray-700 hover:text-gray-800',
                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
              ]"
              >{{ category.name }}
            </PopoverButton>
          </div>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <PopoverPanel
              class="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-10"
            >
              <div
                class="absolute inset-0 top-1/2 bg-white shadow"
                aria-hidden="true"
              />

              <div class="relative bg-white">
                <div class="mx-auto max-w-7xl px-8">
                  <div
                    class="grid grid-cols-5 items-start gap-y-10 gap-x-8 pt-10 pb-12"
                  >
                    <div
                      v-for="level3Cat in category.children"
                      :key="level3Cat.uid"
                    >
                      <div>
                        <NuxtLink
                          :to="catLink(level3Cat.url_path)"
                          class="font-medium text-gray-900"
                        >
                          <PopoverButton>{{ level3Cat.name }}</PopoverButton>
                        </NuxtLink>
                        <ul
                          role="list"
                          :aria-labelledby="`desktop-featured-heading-${uid}`"
                          class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                        >
                          <li
                            v-for="level4Cat in level3Cat.children"
                            :key="level4Cat.uid"
                            class="flex"
                          >
                            <NuxtLink
                              :to="catLink(level4Cat.url_path)"
                              class="hover:text-gray-800"
                            >
                              <PopoverButton>{{
                                level4Cat.name
                              }}</PopoverButton>
                            </NuxtLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </template>
      </Popover>
    </div>
  </PopoverGroup>
</template>
<script setup lang="ts">
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue';
const props = defineProps(['categories']);
let categories = props.categories;
let catLink = (link) => {
  return '/category/' + link;
};
</script>
