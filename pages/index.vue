<template>
  <div class="home wrapper">
    <Swipper :banners="banners" />
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useHomestore } from "~/store/home";
const homestore = useHomestore();
const { banners } = storeToRefs(homestore);
</script>
<style lang="scss" scoped>
.home {
  height: auto;
}
</style>
