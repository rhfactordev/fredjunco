<template>
  <header
    :class="
      cn(
        'w-full flex flex-col md:flex-row items-center justify-between bg-[#1C3433] p-4 md:py-8 md:px-16 z-30 relative',
        className
      )
    "
  >
    <NuxtLink to="/">
      <NuxtImg src="img/fred-junco-logo.png" class="h-16 white-filter" />
    </NuxtLink>
    <nav class="mt-4 md:mt-0">
      <ul
        class="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-8 text-white text-base fh:text-xl font-semibold"
      >
        <NuxtLink to="/" class="py-2.5 px-5 hover:underline"
          >Página inicial</NuxtLink
        >
        <NuxtLink to="/contact" class="py-2.5 px-5 hover:underline"
          >Contato</NuxtLink
        >
        <NuxtLink
          to="/in-company"
          class="md:border border-white rounded-md py-2.5 px-5 hover:text-[#1C3433] hover:bg-white duration-200"
          >In Company</NuxtLink
        >
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";
import { cn } from "../lib/cn";

defineProps<{
  className?: ClassValue;
}>();
</script>
