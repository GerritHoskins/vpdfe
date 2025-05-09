<template>
  <div class="flex flex-col gap-4 w-full">
    <VpdStatItem label="Air Temp" :value="vpd.air_temp" unit="(°C)" />
    <VpdStatItem label="Leaf Temp" :value="vpd.leaf_temp" unit="(°C)" />
    <VpdStatItem label="Humidity" :value="vpd.humidity" unit="(%)" />
    <VpdStatItem label="Air VPD" :value="vpd.air_vpd" unit="(kPa)" />
    <VpdStatItem label="Leaf VPD" :value="vpd.leaf_vpd" unit="(kPa)" />

    <StatCard
      class="w-full bg-zinc-800 text-indigo-200"
      label="Leaf VPD (kPa)"
      :value="vpd.leaf_vpd"
    />
  </div>

  <StageSelector />
</template>

<script setup lang="ts">
import StageSelector from '../components/StageSelector.vue';
import StatCard from '../components/StatCard.vue';
import VpdStatItem from '../components/VpdStatItem.vue';
import { useVpdService } from '../services/vpd';

const { vpd } = useVpdService();
</script>
