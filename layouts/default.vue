<template>
  <div class="main-wrapper">
    <section class="title-wrapper">
      <h1>Добавление товара</h1>
      <div class="sort sort-wrapper open">
        <div class="sort-item">
          <input type="radio" name="filter" value="default" id="filter-default">
          <label for="filter-default">По умолчанию</label>
        </div>
        <div class="sort-item">
          <input type="radio" name="filter" value="min" id="filter-min">
          <label for="filter-min">По убыванию цены</label>
        </div>
        <div class="sort-item">
          <input type="radio" name="filter" value="max" id="filter-max">
          <label for="filter-max">По увеличению цены</label>
        </div>
        <div class="sort-item">
          <input type="radio" name="filter" value="name" id="filter-name">
          <label for="filter-name">По названию</label>
        </div>
      </div>
    </section>
    <section class="content">
      <aside class="left-side">
        <form action="#" class="form-product">
          <div class="form__group-item">
            <label class="form__label" for="product-name">Наименование товара</label>
            <input class="form__input" type="text" id="product-name" placeholder="Введите наименование товара">
          </div>
          <div class="form__group-item">
            <label class="form__label" for="product-name">Описание товара</label>
            <textarea class="form__textarea" id="product-name" placeholder="Введите описание товара"></textarea>
          </div>
          <div class="form__group-item">
            <label class="form__label" for="product-name">Ссылка на изображение товара</label>
            <input class="form__input" type="text" id="product-name" placeholder="Введите ссылку">
          </div>
          <div class="form__group-item">
            <label class="form__label" for="product-name">Цена товара</label>
            <input class="form__input" type="text" id="product-name" placeholder="Введите цену">
          </div>
          <button class="form__add-product">Добавить товар</button>
        </form>
      </aside>
      <aside class="right-side">
        <main class="product-wrapper">
          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>

          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>

          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>

          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>

          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>

          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>

          <div class="product__item">
            <div class="product__remove"></div>
            <div class="product__image-wrapper">
              <img src="@/static/product-photo.png" alt="product" class="product__image">
            </div>
            <div class="product__content-wrapper">
              <div class="product__name">Название товара</div>
              <div class="product__description">Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк</div>
              <div class="product__price-wrapper">
                <div class="product__price">10000</div>
                <div class="product__unit">руб.</div>
              </div>
            </div>
          </div>


        </main>
      </aside>
    </section>


    <nuxt />
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style lang="scss">
.main {
  &-wrapper {
    width: 100%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
  }
}

.title {
  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    h1 {
      font-size: 28px;
      font-weight: 600;
      line-height: 35px;
    }
  }
}

.sort {
  &-wrapper {
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      background: white url("@/static/arrow-down.png") no-repeat center;
      position: absolute;
      top: 50%;
      transform:translateY(-50%);
      right: 16px;
      height: 10px;
      width: 10px;
    }
    &:hover{
      .sort-item {
        display: flex;
      }
    }
  }
  &-item {
    background: #FFFEFB;
    color: #B4B4B4;
    font-size: 12px;
    line-height: 15px;
    cursor: pointer;padding:10px 25px 10px 16px;
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
    input {
      display: none;
    }
    label {
      cursor: pointer;
    }
  }
  &-item:not(:first-child) {
    display: none;
  }
}

.content {
  display: flex;
  flex-direction: row;
  align-items:flex-start;
  padding: 0 25px;
  @media all and (max-width: 768px) {
    flex-direction: column;
    }
  }
.left-side {
  display: flex;
  max-width: 332px;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  flex: 1 0 100%;
  margin-right: 15px;
  @media all and (max-width: 768px) {
    max-width: none;
    width: 100%;
  }
}
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

.right-side {
  display: flex;
}

.product {
  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
    flex:1 1 30%;
    max-width: 30%;
    background: #FFFEFB;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    position: relative;
    margin-bottom: 16px;
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
    @media all and (max-width: 768px) {
      display: block;
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
    align-items: flex-start;
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
}


</style>
