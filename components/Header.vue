<template>
  <header
    class="w-full flex flex-row items-center justify-between bg-[#1C3433] py-8 px-16 z-30 relative"
    :style="{ backgroundColor: backgroundColor || undefined }"
  >
    <NuxtLink to="/">
      <NuxtImg src="img/fred-junco-logo.png" class="h-16 white-filter" />
    </NuxtLink>
    <nav>
      <ul class="flex flex-row gap-8 text-white text-lg font-semibold">
        <NuxtLink to="/" class="py-2.5 px-5 hover:underline"
          >Página inicial</NuxtLink
        >
        <NuxtLink to="/contact" class="py-2.5 px-5 hover:underline"
          >Contato</NuxtLink
        >
        <NuxtLink
          to="/in-company"
          class="border border-white rounded-md py-2.5 px-5 hover:text-[#1C3433] hover:bg-white duration-200"
          >In Company</NuxtLink
        >
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  backgroundColor?: string;
}>();
</script>
