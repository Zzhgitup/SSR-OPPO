<template>
  <div class="wrapper content">
    <el-carousel height="480px">
      <el-carousel-item v-for="item in props.banners" :key="item.id">
        <img :src="item.picStr" alt="" class="bannerimg" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import { ElCarousel, ElCarouselItem } from "element-plus";
import { Banner } from "~/store/store";
interface Inprops {
  title?: string;
  banners: Banner[];
}
//接收轮播图
const props = withDefaults(defineProps<Inprops>(), {
  title: "",
  banners: () => [],
});
</script>
<style scoped>
.bannerimg {
  height: 100%;
}
.wrapper {
  margin-top: 50px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
