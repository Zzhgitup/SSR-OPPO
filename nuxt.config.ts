// https://nuxt.com/docs/api/configuration/nuxt-config
import ElementPlus from "unplugin-element-plus/vite";
export default defineNuxtConfig({
  css: [
    "normalize.css",
    "@/assets/css/main.scss",
    "@/assets/cus-font/iconfont.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '~/assets/css/variables.scss' as *;",
        },
      },
    },
    //自动导入样式
    plugins: [ElementPlus({})],
  },
  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "OPPO专区，官方正品，最新最全的OPPO手机产品以及配件在线抢购！",
        },
        {
          name: "keywords",
          content: "OPPO商城，OPPO专区, OPPO手机，OPPO配件，OPPO, OPPO官网商城",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // { rel: "stylesheet", href: "https://liujun.css" }
      ],
      // add head
      // script: [{ src: "https://liujun.js" }],
      noscript: [{ children: "Javascript is required" }],
    },
  },
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["element-plus/es"],
  },
});
