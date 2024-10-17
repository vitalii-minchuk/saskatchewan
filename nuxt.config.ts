// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@i2d/nuxt-pdf-frame"],
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  compatibilityDate: "2024-10-14",
});
