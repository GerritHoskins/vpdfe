<template>
  <div class="flex flex-col gap-4 mb-6 w-full pt-4">
    <button
      v-for="stage in stages"
      :key="stage.name"
      @click="selectStage(stage)"
      :class="[
        'p-3 rounded-lg text-lg font-medium',
        selectedStage.name === stage.name
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-500 text-gray-400',
      ]"
    >
      {{ stage.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useVpdStages } from '../composables/useVpdStages';

const { stages, selectedStage, selectStage } = useVpdStages();
</script>
