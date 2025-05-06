// frontend/src/services/vpd.ts
import { ref } from 'vue';

interface VpdData {
  air_temp: number;
  leaf_temp: number;
  humidity: number;
  air_vpd: number;
  leaf_vpd: number;
}

const vpd = ref<VpdData>({
  air_temp: 0,
  leaf_temp: 0,
  humidity: 0,
  air_vpd: 0,
  leaf_vpd: 0,
});

let socket: WebSocket | null = null;

export function useVpdService() {
  function connect() {
    if (socket) return;
    socket = new WebSocket("ws://localhost:8000/ws/vpd");
    socket.onmessage = event => {
      const data: VpdData = JSON.parse(event.data);
      vpd.value = data;
    };
    socket.onclose = () => { socket = null; };
  }

  async function fetchOnce() {
    const res = await fetch("http://localhost:8000/vpd");
    vpd.value = await res.json();
  }

  return { vpd, connect, fetchOnce };
}
