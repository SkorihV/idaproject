<template>
<!--  <main class="product-wrapper">-->
  <keep-alive>

  <transition-group name="list" tag="main" class="product-wrapper">
        <ProductItem
          v-for="product in productList"
          :key="product.id"
          :productData = "product"
        ></ProductItem>
    </transition-group>
  </keep-alive>

  <!--  </main>-->
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  name: 'IndexPage',
  components: {
    ProductItem
  },
  computed: {
    productList() {
      let products = JSON.parse(JSON.stringify(this.$store.state.productsList));
      if (this.sortType === 'default') {
        return products;
      } else if (this.sortType === 'min') {
        return products.sort((prev, next) => next.price - prev.price  )
      } else if (this.sortType === 'max') {
        return products.sort((prev, next) => prev.price - next.price  )
      } else if (this.sortType === 'name') {
        return products.sort((prev, next) => {
          if (prev.name > next.name) {
            return 1;
          }
          if (prev.name < next.name) {
            return -1;
          }
          return 0;
        } )

      }
    },
    sortType() {
      return this.$store.getters.getSortType;
    },
  },

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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
