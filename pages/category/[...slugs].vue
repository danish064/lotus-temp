<template>
  <main>
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="py-24 text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">
          {{ category }}
        </h1>
        <p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Thoughtfully designed objects for the workspace, home, and travel.
        </p>
      </div>

      <CatalogProductGrid  :products="products" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { CategoryTree, QueryCategoryListArgs } from '@/modules/GraphQL/types';
const route = useRoute();
const getCategory = () => {
  if (route.params.slugs[route.params.slugs.length - 1] == '')
    return route.params.slugs[route.params.slugs.length - 2];
  return route.params.slugs[route.params.slugs.length - 1];
};
const category = getCategory();

const CAREGORY_PRODUCTS_QUERY = gql`
  query ($filters: CategoryFilterInput) {
    categoryList(filters: $filters) {
      __typename
      name
      products {
        items {
          name
          uid
          canonical_url
          review_count
          reviews {
            items {
              average_rating
            }
          }
          price_range {
            maximum_price {
              regular_price {
                currency
                value
              }
            }
          }

          # description {
          #   html
          # }
          media_gallery {
            position
            label
            url
          }
        }
      }
    }
  }
`;

interface CatergoryProductsQueryResult {
  categoryList: CategoryTree;
}
const queryFilters: QueryCategoryListArgs = {
  filters: {
    url_key: {
      eq: category,
    },
  },
};

const { data } = await useAsyncQuery<CatergoryProductsQueryResult>(
  CAREGORY_PRODUCTS_QUERY,
  queryFilters
);
const products = data.value.categoryList[0].products.items;
</script>
