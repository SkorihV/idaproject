<template>
  <form
    action="#"
    class="form-product"
    @submit.prevent
    ref="addProductForm"
  >
    <vCustomTextInput
      label-text='Наименование товара'
      placeholder="Введите наименование товара"
      id-for-label="product-name"
      :validation-rules="{length: 5}"
      :is-required="true"
      @checkedAccessValue="checkedAccessValues"
    ></vCustomTextInput>


    <vCustomTextInput
      label-text='Описание товара'
      placeholder="Введите описание товара"
      id-for-label="product-description"
      :is-required="false"
      @checkedAccessValue="checkedAccessValues"
      typeInput="textarea"
    ></vCustomTextInput>

    <vCustomTextInput
      label-text='Ссылка на изображение товара'
      placeholder="Введите ссылку"
      id-for-label="product-image-link"
      :validation-rules="{length: 20, reg: '^https?://\\S+(?:jpg|jpeg|png)$'}"
      :is-required="true"
      @checkedAccessValue="checkedAccessValues"
    ></vCustomTextInput>

    <vCustomTextInput
      label-text='Цена товара'
      placeholder="Введите цену"
      id-for-label="product-price"
      :validation-rules="{reg: '^\\d*$|(^\\d*\\.\\d{0,2}$)'}"
      :is-required="false"
      @checkedAccessValue="checkedAccessValues"
    ></vCustomTextInput>

    <button
      class="form__add-product"
      :class="{'isSend': isPostForm}"
      @click="addProduct"
    >Добавить товар</button>
  </form>
</template>

<script>

import vCustomTextInput from "@/components/vCustomTextInput"

export default {
  name: "TheProductForm",
  components: {
    vCustomTextInput,
  },
  data: () => {
    return {
      accessValues: {},
      isPostForm: false
    }
  },
  methods: {
    checkedAccessValues(data) {
      const key = Object.keys(data)[0];
      this.accessValues[key] = data[key];
      this.isPostForm = Object.values(this.accessValues).every(value => value);
    },
    async addProduct() {
      if (!this.isPostForm) {
        return false;
      }
      const formData = new FormData(this.$refs.addProductForm)
      const id          = Math.random();
      const name        = formData.get('product-name')
      const price       = formData.get('product-price')
      const image       = formData.get('product-image-link')
      const description = formData.get('product-description')
      const newProduct = {
        id,
        name,
        price,
        image,
        description,
      };

      await this.$store.dispatch('ADD_PRODUCT', newProduct)
        .then(() => {
          this.$refs.addProductForm.reset();
          this.isPostForm = false;
        });
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.form {
  &-product {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px;

  }
  &__group-item {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 16px 0;
    box-sizing: border-box;
  }
  &__label {
    font-style: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
  }
  &__input,
  &__textarea {
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
  }
  &__input::placeholder,
  &__textarea::placeholder {
    color: #B4B4B4;
    font-size: 12px;
    line-height: 15px;
  }
  &__add-product {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    background: #EEEEEE;
    border-radius: 10px;
    padding: 10px 0;
    color: #B4B4B4;
    border: none;


    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    &.isSend {
      background: #7BAE73;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      color: #FFFFFF;
      cursor: pointer;
    }
  }
}
</style>
