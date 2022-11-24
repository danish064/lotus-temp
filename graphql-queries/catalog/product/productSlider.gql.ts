export default gql`
  query ($filter: ProductAttributeFilterInput) {
    products(filter: $filter) {
      total_count
      items {
        name
        sku
        uid
        thumbnail {
          url
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      page_info {
        page_size
        current_page
        total_pages
      }
    }
  }
`;
