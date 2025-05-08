<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-gray-100 p-4"
  >
    <h1 class="text-4xl font-bold mb-6 text-gray-300">VPD Monitor</h1>

    <div class="flex flex-col justify-center items-center gap-4 mb-4">
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Air Temp (°C) <span class="font-medium text-emerald-300">{{ vpd.air_temp }}</span>
      </div>
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Leaf Temp (°C) <span class="font-medium text-emerald-300">{{ vpd.leaf_temp }}</span>
      </div>
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Humidity (%) <span class="font-medium text-emerald-300">{{ vpd.humidity }}</span>
      </div>
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Air VPD (kPa) <span class="font-medium text-emerald-300">{{ vpd.air_vpd }}</span>
      </div>

      <StatCard
        class="w-full bg-zinc-800 text-indigo-200"
        label="Leaf VPD (kPa)"
        :value="vpd.leaf_vpd as number"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useVpdService } from './services/vpd';
import StatCard from './components/StatCard.vue';

const { vpd, connect, fetchOnce } = useVpdService();

onMounted(() => {
  fetchOnce();
  setTimeout(() => {
    connect();
  }, 1000);
});
</script>
