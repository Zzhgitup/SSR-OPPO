<template>
  <div class="wrapper">
    <h1>intelligent</h1>
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
