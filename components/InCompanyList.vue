<template>
  <ul
    :class="
      cn(
        'text-white text-base fh:text-xl font-normal space-y-4 mb-16',
        className
      )
    "
  >
    <li>
      <NuxtImg src="icons/users-icon.svg" class="size-8 inline-block mr-2" />
      Até 200 participantes
    </li>
    <li>
      <NuxtImg src="icons/warranty-icon.svg" class="size-8 inline-block mr-2" />
      Garantia de Satisfação
    </li>
    <li>
      <NuxtImg
        src="icons/mac-browser-icon.svg"
        class="size-8 inline-block mr-2"
      />
      Possibilidade On-Line
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ClassValue } from "clsx";
import { cn } from "../lib/cn";

defineProps<{
  className?: ClassValue;
}>();
</script>
