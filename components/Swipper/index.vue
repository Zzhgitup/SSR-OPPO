<template>
  <div class="wrapper swiper">
    <el-carousel
      height="480px"
      indicator-position="none"
      @change="handlerBannerChange"
    >
      <el-carousel-item v-for="item in props.banners" :key="item.id">
        <img :src="item.picStr" alt="" class="pic-str" />
      </el-carousel-item>
    </el-carousel>
    <ul class="dots">
      <template v-for="(item, index) in banners" :key="item.id">
        <li :class="['dot', currentIndex === index ? 'active' : '']"></li>
      </template>
    </ul>
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
const currentIndex = ref<number>(0);
//轮播监视
function handlerBannerChange(current: number, pre: number) {
  currentIndex.value = current;
}
</script>
<style scoped>
.swiper {
  padding-top: 36px;
  position: relative;
  .pic-str {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .dots {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    text-align: center;

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-right: 10px;
      background-color: #fff;
      opacity: 0.8;
    }
    .active {
      background-color: transparent;
      border: 2px solid #fff;
      width: 12px;
      height: 12px;
      position: relative;
      top: 1px;
    }
  }
}
</style>
