<template>
  <div>detle</div>
</template>
<script setup lang="ts">
import { useDetial } from "@/store/Detial";
import { storeToRefs } from "pinia";
interface Inprops {
  title?: string;
}
const props = withDefaults(defineProps<Inprops>(), {
  title: "",
});
const Detial = useDetial();
const { Detials } = storeToRefs(Detial);
const route = useRoute();
console.log(route.query);
Detial.GetDetial("air");
</script>
<style scoped></style>
