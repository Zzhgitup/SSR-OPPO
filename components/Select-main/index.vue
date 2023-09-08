<template>
  <div class="Slectmain">
    <HeaderTitle :title="category.title" />
    <SelectItem
      :product="category.productDetailss"
      :category-url="category.url"
    />
  </div>
</template>
<script setup lang="ts">
import { Category } from "~/store/store";
interface Inprops {
  title?: string;
  category?: Category;
}
const props = withDefaults(defineProps<Inprops>(), {
  title: "",
  category: () => ({}),
});
</script>
<style scoped>
.Slectmain {
}
</style>
