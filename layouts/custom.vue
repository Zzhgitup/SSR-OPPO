<template>
  <div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
interface Inprops {
  title?: string;
}
const props = withDefaults(defineProps<Inprops>(), {
  title: "",
});
</script>
<style scoped></style>
