<template>
  <div class="sort sort-wrapper">
    <div class="sort-item">
      <div class="currentSort ort-item">{{sortLabel}}</div>
    </div>
    <div class="sort-item" v-if="sortType !== 'default'">
      <input type="radio" name="filter" value="default" id="filter-default" v-model="sortType">
      <label for="filter-default" @click="sortLabel = 'По умолчанию'">По умолчанию</label>
    </div>
    <div class="sort-item" v-if="sortType !== 'min'">
      <input type="radio" name="filter" value="min" id="filter-min" v-model="sortType">
      <label for="filter-min" @click="sortLabel = 'По убыванию цены'">По убыванию цены</label>
    </div>
    <div class="sort-item" v-if="sortType !== 'max'">
      <input type="radio" name="filter" value="max" id="filter-max" v-model="sortType">
      <label for="filter-max" @click="sortLabel = 'По увеличению цены'">По увеличению цены</label>
    </div>
    <div class="sort-item" v-if="sortType !== 'name'">
      <input type="radio" name="filter" value="name" id="filter-name" v-model="sortType">
      <label for="filter-name" @click="sortLabel = 'По названию'">По названию</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSortProducts",
  data: () => {
    return {
      sortType: 'default',
      sortLabel: 'По умолчанию'
    }
  },
  watch: {
    sortType() {
      this.$store.dispatch("ADD_SORT_TYPE", this.sortType);
    }
  }
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
      background: url("@/static/arrow-down.png") no-repeat center;
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
    @include animationRulers;
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
    &:hover {
      background-color: #efeeeb;
    }
  }
  &-item:not(:first-child) {
    display: none;
  }
}
</style>
