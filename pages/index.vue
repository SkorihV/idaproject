<template>
  <main class="main__products-page">
    <section class="title-wrapper">
      <TheProductCart></TheProductCart>
      <TheProductSort></TheProductSort>
    </section>
    <keep-alive>
      <transition-group name="list" tag="section" class="product-wrapper">
        <ProductItem
          v-for="product in productList"
          :key="product.id"
          :productData = "product"
        ></ProductItem>
      </transition-group>
    </keep-alive>
  </main>
</template>

<script>
import ProductItem from "@/components/ProductItem";
import TheProductCart from "@/components/TheProductCart";
import TheProductSort from "@/components/TheProductSort";

export default {
  name: 'IndexPage',
  components: {
    ProductItem,
    TheProductCart,
    TheProductSort
  },
  computed: {
    productList() {
      let products = JSON.parse(JSON.stringify(this.$store.getters.getProductsList));

      switch (this.sortType) {
        case 'min':
          return products.sort((prev, next) => next.price - prev.price  )
        case 'max':
          return products.sort((prev, next) => prev.price - next.price  )
        case 'name':
          return products.sort((prev, next) => {
            if (prev.name > next.name) {
              return 1;
            }
            if (prev.name < next.name) {
              return -1;
            }
            return 0;
          } )
        default:
          return products;
      }
    },
    sortType() {
      return this.$store.getters.getSortType;
    },
  },
}
</script>

<style lang="scss" scoped>
.main__products-page {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  flex: 1 1 100%;
}

.title {
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    width: 100%;
    margin: 25px 0;
    @media all and (max-width: 768px) {
      padding: 0 5px;
    }
    @media all and (max-width: 450px) {
      flex-direction: column;
    }

  }
}

.product {
  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: start;
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
