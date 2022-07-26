<template>
  <div class="sort sort-wrapper">
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
</template>

<script>
export default {
  name: "TheSortProducts"
}
</script>

<style lang="scss" scoped>
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
</style>
