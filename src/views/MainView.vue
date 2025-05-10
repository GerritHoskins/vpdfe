<template>
  <div class="flex flex-col gap-4 w-full">
    <VpdStatItem label="Air Temp" :value="vpd.air_temp" unit="(°C)" />
    <VpdStatItem label="Leaf Temp" :value="vpd.leaf_temp" unit="(°C)" />
    <VpdStatItem label="Humidity" :value="vpd.humidity" unit="(%)" />
    <VpdStatItem label="Air VPD" :value="vpd.air_vpd" unit="(kPa)" />
    <VpdStatItem label="Leaf VPD" :value="vpd.leaf_vpd" unit="(kPa)" />

    <!-- <div class="flex flex-col items-center font-bold text-md w-full bg-zinc-800 px-6 py-3 rounded-lg">
      <div v-if="valueClass === 'text-lime-400'" class="text-lime-400">
        Optimal (no adjustsments needed)
      </div>
      <div v-else-if="valueClass === 'text-orange-400'" class="text-orange-400">
        Suboptimal (could use some fine tuning)
      </div>
      <div v-else class="text-red-400">Danger (check settings immediately)</div>
    </div> -->

    <StatCard
      class="w-full bg-zinc-800 text-indigo-200"
      label="Leaf VPD (kPa)"
      :value="vpd.leaf_vpd"
      :icon="stageIcon"
    />
  </div>

  <StageSelector />
</template>

<script setup lang="ts">
import { computed, toRef } from 'vue';
import StageSelector from '../components/StageSelector.vue';
import StatCard from '../components/StatCard.vue';
import VpdStatItem from '../components/VpdStatItem.vue';
import { useVpdService } from '../services/vpd';
import { useVpdStages } from '../composables/useVpdStages';

const { vpd } = useVpdService();

const valueRef = toRef(vpd.value.leaf_vpd);

const { selectedStage, valueClass } = useVpdStages(valueRef);

const stageIcon = computed(() => {
  switch (selectedStage.value.name) {
    case 'Veg':
      return '🌱';
    case 'Early Flower':
      return '🌿';
    case 'Late Flower':
      return '🌸';
    case 'Danger Zone':
      return '⚠️';
    default:
      return '❓';
  }
});
</script>
