<template>
  <div class="grid-view">
    <div class="view-item first" v-if="firstItemIsTwoCol">
      <img :src="categoryUrl" alt="OPPO" />
    </div>
    <template v-for="(item, index) in product" :key="item">
      <!-- 以后复用了需改成 slot -->
      <div class="view-item">
        <grid-view-item :product-detail="item" ></grid-view-item>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ProductDetailss } from "~/store/store";
interface Inprops {
  title?: string;
  categoryUrl?: string;
  firstItemIsTwoCol: boolean;
  product: ProductDetailss[];
}
const props = withDefaults(defineProps<Inprops>(), {
  title: "",
  firstItemIsTwoCol: true,
  product: () => [],
});
console.log(props.product);
</script>
<style lang="scss" scoped>
.grid-view {
  width: $contentWidth + 18px;
  /* @include border(green); */
  @include normalFlex();
  flex-wrap: wrap;
  justify-content: flex-start;

  .view-item {
    width: 20%;
    padding-right: 18px;
    margin-bottom: 18px;
    /* @include border(); */
    height: $gridItemHeight;
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }

  .first {
    width: 40%;
    & > img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
