<template>
  <div class="bg-gray-900 shadow-md rounded-2xl p-8 flex flex-col items-center">
    <span class="text-gray-300 mb-2">{{ selectedStage.name }}</span>
    <span class="text-gray-400">Optimal kPa: {{ optimalText }}</span>
    <span class="font-bold text-6xl my-4" :class="valueClass">
      {{ value }}
    </span>
    <span class="text-sm text-gray-400">Tolerance +- {{ MARGIN }} </span>
  </div>
</template>

<script setup lang="ts">
import { useVpdStages, MARGIN } from '../composables/useVpdStages';

const props = defineProps<{ value: number }>();
const { selectedStage, optimalText, valueClass } = useVpdStages(props.value);
</script>
