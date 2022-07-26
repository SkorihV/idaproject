<template>
  <main class="product-wrapper">
    <ProductItem
      v-for="product in productList"
      :key="product.id"
      :productData = "product"
    ></ProductItem>
  </main>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  name: 'IndexPage',
  components: {
    ProductItem
  },
  beforeMount() {
  },
  computed: {
    productList() {
      return this.$store.getters.getProductsList
    }
  }
}
</script>

<style lang="scss" scoped>
.product {
  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    flex: 1 1 100%;
  }
}
</style>
