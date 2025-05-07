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

    // Determine proper WS protocol based on page protocol
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const host = window.location.hostname;    // e.g. "localhost"
    const port = '8001';                      // or pull from import.meta.env.VITE_API_PORT
    const url = `${protocol}://${host}:${port}/ws/vpd`;

    socket = new WebSocket(url);

    socket.onopen = () => {
      console.info(`WebSocket connected to ${url}`);
    };
    socket.onmessage = event => {
      const data: VpdData = JSON.parse(event.data);
      vpd.value = data;
    };
    socket.onerror = err => {
      console.error('WebSocket error:', err);
    };
    socket.onclose = () => {
      console.warn('WebSocket closed');
      socket = null;
    };
  }

  async function fetchOnce() {
    const res = await fetch(`http://${window.location.hostname}:8001/vpd`);
    vpd.value = await res.json();
  }

  return { vpd, connect, fetchOnce };
}
