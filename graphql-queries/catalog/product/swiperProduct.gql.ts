export default gql`
query ($filter: ProductAttributeFilterInput) {
  products(filter: $filter) {
    total_count
    items {
      description{
        html
      }
      name
      sku
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
    }
  }
}

`