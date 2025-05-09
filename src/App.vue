<template>
  <div class="min-h-screen flex flex-col items-center bg-neutral-900 text-gray-100 p-4">
    <h1 class="text-4xl font-bold py-6 text-gray-300">VPD Monitor</h1>
    <MainView />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useVpdService } from './services/vpd';
import MainView from './views/MainView.vue';

const { connect, fetchOnce } = useVpdService();

onMounted(() => {
  fetchOnce();
  setTimeout(() => {
    connect();
  }, 1000);
});
</script>
