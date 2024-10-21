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
    optimizeDeps: {
      include: ["pdfjs-dist"],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("pdf.worker.min.mjs")) {
              return "pdf-worker";
            }
          },
        },
      },
    },
  },
  compatibilityDate: "2024-10-14",
});
