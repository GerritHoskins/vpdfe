<template>
  <div class="bg-gray-900 shadow-md rounded-2xl p-8 flex flex-col items-center">
    <div class="flex items-center gap-2 mb-2">
      <span class="font-semibold text-gray-300">
        {{ selectedStage.name }}
      </span>
      <span class="text-md">{{ icon }}</span>
    </div>

    <span class="text-sm text-gray-300"> Optimal kPa: {{ optimalText }} </span>

    <span class="font-bold text-8xl my-4" :class="valueClass">
      {{ value }}
    </span>

    <span class="text-xs text-gray-300">Tolerance ± {{ MARGIN }}</span>
  </div>
</template>

<script setup lang="ts">
import { useVpdStages, MARGIN } from '../composables/useVpdStages';
import { toRef } from 'vue';

const props = defineProps<{ value: number; icon: string }>();

const valueRef = toRef(props, 'value');

const { selectedStage, optimalText, valueClass } = useVpdStages(valueRef);
</script>
