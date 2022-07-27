<template>
  <div class="cart-mini cart">
    <div class="cart__empty" :class="{'isEmpty': isEmpty}" v-if="isEmpty">Козина пуста</div>
    <div class="cart__items-wrapper" v-else>
      <div class="cart__full" @click="isOpenCart = !isOpenCart">В корзине {{cartProducts.length}} товаров <nuxt-link class="cart__link" to="cart">&nbsp;>></nuxt-link></div>
      <transition-group name="list" tag="div" class="cart__item-list"  v-if="isOpenCart">
        <div class="cart__item" v-for="product in cartProducts" :key="product.id">
            <div class="cart__item-remove" @click="removeProductInCart(product.id)">X</div>
            <div class="cart__item-name">{{product.name}}</div>
            <div class="cart__item-amount">Количество: {{product.amount}}</div>
          </div>
          </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProductCart",
  data: () => {
    return {
      isOpenCart: false
    }
  },
  methods: {
    async removeProductInCart(productId) {
      await  this.$store.dispatch('REMOVE_PRODUCT_IN_CART', productId)
        .then(() => { if (this.isEmpty) { this.isOpenCart = false; }});

    }
  },
  computed: {
    cartProducts() {
      return this.$store.getters.getCartProducts;
    },
    isEmpty() {
      return !Boolean(this.$store.getters.getCartProducts.length);
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  font-size: 12px;
  &-mini {
    display: flex;
    justify-content: center;
    cursor: pointer;
    margin-left: auto;
    margin-right: 10px;
    background: #fef6f6;
    @media all and (max-width: 450px) {
      margin-left: inherit;
      margin-right: inherit;
      margin-bottom: 5px;
    }
  }
  &__empty,
  &__full {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid  #FF8484;
    border-radius: 4px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    &.isEmpty {
      border: 1px solid  transparent;
    }
  }
  &__link {
    color: gray;

  }
  &__items-wrapper {
    position: relative;
    z-index: 10;
  }
  &__item-list {
    position: absolute;
    top:100%;
    background: #fef6f6;
    width: 100%;
    padding: 5px;
    left: 50%;
    transform:translateX(-50%);
    border-left: 1px solid  #FF8484;
    border-right: 1px solid  #FF8484;
    border-radius: 4px;
    cursor: auto;
  }
  &__item {
    border-bottom: 1px dashed  #FF8484;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  &__item-remove {
    position: absolute;
    right: 0;
    top: 0;
    color: gray;
    font-size: 12px;
    cursor: pointer;
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
}
</style>
