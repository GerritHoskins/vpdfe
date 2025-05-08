<template>
    <div class="bg-gray-900 shadow-md rounded-2xl p-8 flex flex-col items-center">
      <span class="text-gray-300">{{ label }}</span>
      <span class="font-bold text-6xl" :class="value > 1.2 || value < 0.8 ? 'text-red-400' : 'text-lime-400'">{{ value }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    label: string;    
    value: number;
  }>();
  </script>
  