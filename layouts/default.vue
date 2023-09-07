<template>
  <div>
    <app-header />
    <slot></slot>
    <app-footer />
  </div>
</template>
<script setup lang="ts">
//引入store，
import { useHomestore } from "@/store/home";
const info = useHomestore();
info.GetHomeinfo("OPPO");
</script>
<style scoped></style>
