<template>
  <div class="home wrapper">
    <Swipper :banners="banners" />
    <Tab-catgate :category="categorys" @item-click="handleItemClick" />
    <template v-for="(item, index) in categorys" :key="item.id">
      <Select-main :category="item" />
    </template>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomestore } from "~/store/home";
import { Category } from "~/store/store";
const homestore = useHomestore();
await homestore.GetHomeinfo("intelligent");
const { banners, categorys } = storeToRefs(homestore);
function handleItemClick(item: Category) {
  navigateTo({
    path: "oppodetle",
    query: {
      type: item.type,
    },
  });
}
</script>
<style lang="scss" scoped>
.home {
  height: auto;
}
</style>
