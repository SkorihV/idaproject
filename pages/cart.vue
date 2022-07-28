<template>
  <main class="cart">
    <div class="cart__item" v-for="product in cartProducts" :key="product.id">
      <div class="cart__item-remove" @click="removeProductInCart(product.id)"></div>
      <div class="cart__item-image-wrapper">
        <img :src="product.image" alt="" class="cart__item-image">
      </div>
      <div class="cart__item-description">
        <div class="cart__item-name">{{product.name}}</div>
        <div class="cart__item-amount">Количество: {{product.amount}}</div>
        <div class="cart__item-price">Цена: {{product.price}}</div>
      </div>
    </div>
    <div class="cart__details">
      <div v-if="fullPrice" class="cart__full-price">Общая стоимость товаров: {{fullPrice}} руб.</div>
    </div>
  </main>
</template>

<script>
export default {
  name: "cart",
  methods: {
    removeProductInCart(productId) {
      this.$store.dispatch('REMOVE_PRODUCT_IN_CART', productId);
    }
  },
  computed: {
    cartProducts() {
      return this.$store.getters.getCartProducts;
    },
    fullPrice() {
      return this.$store.getters.getCartProducts.reduce((sum, item) => sum + Number(item.price) * item.amount, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__item {
    position: relative;
    display: flex;
    padding: 10px 40px;
    border-bottom: 2px solid #EEEEEE;
  }
  &__item-description {
    display: flex;
    flex-direction: column;
  }
  &__item-image-wrapper {
   display: flex;
    max-height: 100px;
    margin-right: 20px;
  }
  &__item-image {
    width: 100%;
    max-height: 150px;
    object-fit: contain;
  }
  &__item-remove {
    background-image: url("@/static/delete.png");
    background-position: center;
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    background-color: #453f45;
    position: absolute;
    right: 0;
    cursor: pointer;
    border-radius: 4px;
  }
}

</style>
