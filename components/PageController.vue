<template>
  <div :class="cn('flex justify-center items-center gap-4', className)">
    <button
      type="button"
      class="bg-[#F7F7F7] rounded-[50%] size-16 flex justify-center items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 duration-200"
      disabled
    >
      <NuxtImg src="icons/chevron-left.svg" alt="<-" />
    </button>
    <button
      type="button"
      class="bg-[#F7F7F7] rounded-[50%] size-16 flex justify-center items-center cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 duration-200"
    >
      <NuxtImg src="icons/chevron-right.svg" alt="->" />
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";
import { cn } from "../lib/cn";

defineProps<{
  className?: ClassValue;
}>();
</script>
