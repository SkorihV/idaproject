<template>
  <nav class="top-menu">
    <nuxt-link class="top-menu__link" to="/">На главную</nuxt-link>
    <nuxt-link class="top-menu__link" to="/cart" v-if="isCartFull">Корзина</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "TopMenu",
  computed: {
    isCartFull() {
      return Boolean(this.$store.getters.getCartProducts.length);
    }
  }
}
</script>

<style lang="scss" scoped>
.top-menu {
  display: flex;
  margin: 5px;
  &__link {
    @include animationRulers;
    text-decoration: none;
    padding: 20px;
    color: #B4B4B4;
    &:hover {
      background: gray;
      color: white;
    }
  }
}
</style>
