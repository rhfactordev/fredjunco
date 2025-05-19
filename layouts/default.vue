<script setup lang="ts">

import SiteHeader from "~/components/SiteHeader.vue";
import SiteFooter from "~/components/SiteFooter.vue";
</script>

<template>
  <div>
    <slot name="header">
      <site-header />
    </slot>
    <slot />
    <site-footer />
  </div>
</template>

<style scoped>

</style>
