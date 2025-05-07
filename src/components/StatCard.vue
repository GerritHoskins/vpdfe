<template>
    <div class="text-teal-50 bg-gray-900 shadow-md rounded-2xl p-4 flex flex-col items-center">
      <span class="">{{ label }}</span>
      <span class="font-bold text-5xl" :class="value > 1.2 || value < 0.8 ? 'text-red-400' : 'text-lime-400'">{{ value }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    label: string;    
    value: number;
  }>();
  </script>
  