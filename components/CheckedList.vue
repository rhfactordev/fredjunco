<template>
  <ul
    :class="
      cn('flex flex-col gap-4 font-medium text-lg text-[#1C3433]', className)
    "
  >
    <li v-for="(item, i) in items" :key="`${id}-${i}`">
      <NuxtImg src="icons/checked-icon.svg" class="size-8 inline-block mr-2" />
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";
import { cn } from "../lib/cn";

defineProps<{
  className?: ClassValue;
  id?: string;
  items: string[];
}>();
</script>
