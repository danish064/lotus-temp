<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pt-5 pb-2">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->              
              <DefaultHeaderNavMobileNav :categories="categories" />

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900"
                    >Create an account</a
                  >
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900"
                    >Sign in</a
                  >
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <!-- Currency selector -->
                <form>
                  <div class="inline-block">
                    <label for="mobile-currency" class="sr-only"
                      >Currency</label
                    >
                    <div
                      class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
                    >
                      <select
                        id="mobile-currency"
                        name="currency"
                        class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                      >
                        <option v-for="currency in currencies" :key="currency">
                          {{ currency }}
                        </option>
                      </select>
                      <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                      >
                        <ChevronDownIcon
                          class="h-5 w-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div
            class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          >
            <!-- <div class="bg-white">{{graphqlCategories}}</div> -->
            <!-- Currency selector -->
            <form class="hidden lg:block lg:flex-1">
              <div class="flex">
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div
                  class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
                >
                  <select
                    id="desktop-currency"
                    name="currency"
                    class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                  >
                    <option v-for="currency in currencies" :key="currency">
                      {{ currency }}
                    </option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
                  >
                    <ChevronDownIcon
                      class="h-5 w-5 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </form>

            <p
              class="flex-1 text-center text-sm font-medium text-white lg:flex-none"
            >
              Get free delivery on orders over $100
            </p>

            <div
              class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6"
            >
              <a
                href="#"
                class="text-sm font-medium text-white hover:text-gray-100"
                >Create an account</a
              >
              <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
              <a
                href="#"
                class="text-sm font-medium text-white hover:text-gray-100"
                >Sign in</a
              >
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200">
              <div class="flex h-16 items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:items-center">
                  <NuxtLink to="/">
                    <span class="sr-only">Your Company</span>
                    <img
                      class="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </NuxtLink>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Mega menus -->
                  <!-- v-for="(category, categoryIdx) in navigation.categories" -->
                  <DefaultHeaderNavMegaMenu :categories="categories" />
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex flex-1 items-center lg:hidden">
                  <button
                    type="button"
                    class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    @click="open = true"
                  >
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a
                    href="#"
                    class="ml-2 p-2 text-gray-400 hover:text-gray-500"
                  >
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">Your Company</span>
                  <img
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                    class="h-8 w-auto"
                  />
                </a>

                <div class="flex flex-1 items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                      <div class="hidden lg:flex">
                        <a
                          href="#"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Search</span>
                          <MagnifyingGlassIcon
                            class="h-6 w-6"
                            aria-hidden="true"
                          />
                        </a>
                      </div>

                      <div class="flex">
                        <NuxtLink
                          to="/dashboard"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Account</span>
                          <UserIcon class="h-6 w-6" aria-hidden="true" />
                        </NuxtLink>
                      </div>
                    </div>

                    <span
                      class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      aria-hidden="true"
                    />

                    <div class="flow-root" @click="toggleCartSidebar">
                      <a href="#" class="group -m-2 flex items-center p-2">
                        <ShoppingCartIcon
                          class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span
                          class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                          >0</span
                        >
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import useUiState from '~~/composables/useUiState';
import gql from 'graphql-tag';
import { CategoryTree, QueryCategoryListArgs } from '@/modules/GraphQL/types';

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];
const navigation = {
  pages: [
    { name: 'Company', href: 'category' },
    { name: 'Stores', href: 'category' },
  ],
};
const CAREGORY_LIST_QUERY = gql`
  query ($filters: CategoryFilterInput) {
    categoryList(filters: $filters) {
      name
      uid
      level
      url_path
      children_count
      url_path
      url_key 
      children {
        uid
        level
        name
        path
        url_path
        url_key
        children {
          uid
          level
          name
          path
          url_path
          url_key
        }
      }
    }
  }
`;
interface CatergoryListQueryResult {
  categoryList: CategoryTree[];
}
const queryFilters: QueryCategoryListArgs = {
  filters: {
    parent_id: {
      eq: '2',
    },
  },
};

const { data } = await useAsyncQuery<CatergoryListQueryResult>(
  CAREGORY_LIST_QUERY,
  queryFilters
);
let categories = data.value.categoryList;

const open = ref(false);
const { toggleCartSidebar } = useUiState();
</script>
