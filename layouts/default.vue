<template>
  <v-app>
    <v-main>
      <Header />
      <slot />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
import Header from "@/components/layout/header/index.vue";
</script>
