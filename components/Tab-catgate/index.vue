<template>
  <div class="tab-category">
    <template v-for="item in category" :key="item.id">
      <div class="category-item" @click="handleItemClick(item)">
        <img class="pic-str" :src="item.picStr" alt="OPPO" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { Category } from "~/store/store";

interface Inprops {
  title?: string;
  category: Category[];
}
const props = withDefaults(defineProps<Inprops>(), {
  title: "",
  category: () => [],
});
//给组件定义 事件
const emits = defineEmits<{
  (e: "itemClick", item: Category): void;
}>();
function handleItemClick(item: Category) {
  emits("itemClick", item);
}
</script>
<style lang="scss" scoped>
.tab-category {
  margin-top: 40px; /* color: red; */
  /* @include border(); */
  @include normalFlex();
  align-items: center;
  .category-item {
    height: 100%;
    cursor: pointer;
    .pic-str {
      width: 80px;
      height: 80px;
    }

    .title {
      margin-top: 16px;
      font-size: 16px;
      text-align: center;
      height: 24px;
      max-width: "120px";
    }
  }
}
</style>
