<template>
  <div class="product__item">
    <div class="product__remove"
      @click='remove'
    ></div>
    <div class="product__image-wrapper">
      <img :src="productData.image" alt="product" class="product__image">
    </div>
    <div class="product__content-wrapper">
      <div class="product__name">{{productData.name}}</div>
      <div class="product__description">{{productData.description}}</div>
      <div class="product__price-wrapper" v-if="isPrice">
        <div class="product__price">{{priceBeforeSeparatorThousands}}</div>
        <div class="product__unit">&nbsp;руб.</div>
      </div>
      <div class="product__add-cart" @click="addProductInCart">Добавить в корзину</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    productData: {
      type: Object,
      require: true
    }
  },
  methods: {
    remove() {
      this.$store.dispatch('REMOVE_PRODUCT', this.productData.id)
    },
    addProductInCart() {
      this.$store.dispatch('ADD_PRODUCT_IN_CART', this.productData);
    }
  },
  computed: {
    isPrice() {
      return this.productData?.price.toString().length;
    },
    /**
     * Разделяем цену на тысячи
     * @returns {string}
     */
    priceBeforeSeparatorThousands () {
      if (this.productData.price.toString().length) {
        let price = this.productData.price;
        let parts = price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.product {
  &__item {
    @include animationRulers;
     flex:1 1 30%;
     max-width: 30%;
     background: #FFFEFB;
     box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
     border-radius: 4px;
     position: relative;
     margin-bottom: 16px;
    &:hover {
      background: #efeeeb;

    }
  @media all and (max-width: 1150px) {
    max-width: 47%;
    flex:1 1 47%;
    margin: 0 5px 16px;
    box-sizing: border-box;
  }
  @media all and (max-width: 900px) {
    max-width: 100%;
    flex:1 1 100%;
  }
  &:hover .product__remove {
     display: block;
   }
  }
  &__remove {
     width: 32px;
     height: 32px;
     background-color: #FF8484;
     border-radius: 10px;
     background-image: url("@/static/delete.png");
     background-position: center;
     background-repeat: no-repeat;
     position: absolute;
     right: -10px ;
     top: -10px;
     display: none;
     cursor: pointer;
    z-index: 2;
  @media all and (max-width: 768px) {
    display: block;
    right: -5px ;
    top: -5px;
  }
  }
  &__image-wrapper {
     display: flex;
     max-height: 200px;
   }
  &__image {
     width: 100%;
     height: 200px;
     object-fit: contain;
   }
  &__content-wrapper {
     display: flex;
     flex-direction: column;
     margin: 16px 24px;
   }
  &__name {
     font-weight: 600;
     font-size: 20px;
     line-height: 25px;
     color: #3F3F3F;
     margin-bottom: 32px;
   }
  &__description {
     font-size: 16px;
     line-height: 20px;
     color: #3F3F3F;
     margin-bottom: 32px;
   }
  &__price-wrapper {
     display: flex;
     justify-content: flex-start;
   }
  &__price,
  &__unit {
     font-weight: 600;
     font-size: 24px;
     line-height: 30px;
     color: #3F3F3F;
  }
  &__add-cart {
    border-radius: 4px;
    background-color: #32d032;
    border: 1px solid green;
    padding: 5px;
    margin-top: auto;
    text-align: center;
    cursor: pointer;
  }
}
</style>
