<template>
  <div
    class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300 flex items-center justify-between"
  >
    <span>{{ label }}</span>
    <div class="flex flex-row gap-x-1">
      <span class="font-bold text-lg text-gray-300">{{ value }}</span>
      <span class="text-md text-gray-300">{{ unit }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: number | string;
  unit: string;
}>();
</script>
