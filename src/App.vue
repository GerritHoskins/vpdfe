<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-gray-100 p-4">
    <h1 class="text-4xl font-bold mb-6 text-indigo-300">VPD Monitor</h1>

    <div class="flex flex-col justify-center items-center gap-4 mb-4">
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Leaf Temp (°C) <span class="font-medium text-emerald-300">{{ vpd.leaf_temp }}</span>
      </div>
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Humidity (%) <span class="font-medium text-emerald-300">{{ vpd.humidity }}</span>
      </div>
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Air VPD (kPa) <span class="font-medium text-emerald-300">{{ vpd.air_vpd }}</span>
      </div>
      <div class="w-full bg-zinc-800 px-6 py-3 rounded-lg text-gray-300">
        Air Temp (°C) <span class="font-medium text-emerald-300">{{ vpd.air_temp }}</span>
      </div>

      <!-- assuming StatCard accepts custom class -->
      <StatCard
        class="w-full bg-zinc-800 text-indigo-200"
        label="Leaf VPD (kPa)"
        :value="vpd.leaf_vpd as number"
      />
    </div>

    <button
      class="px-4 py-2 bg-indigo-600 text-gray-100 rounded-2xl hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
      @click="toggleRealtime"
    >
      {{ realtime ? 'Pause' : 'Start' }} Live Updates
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useVpdService } from './services/vpd';
import StatCard from './components/StatCard.vue'

const { vpd, connect, fetchOnce } = useVpdService();
const realtime = ref(false);

function toggleRealtime() {
  realtime.value = !realtime.value;
  if (realtime.value) {
    connect();
  }
}

onMounted(() => {
  // initial snapshot
  fetchOnce();
});

onBeforeUnmount(() => {
  // clean up if needed
});
</script>
