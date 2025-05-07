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
    const proto = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const host = window.location.host;
    const url = `${proto}://${host}/ws/vpd`;
    socket = new WebSocket(url);
    socket.onopen   = () => console.info(`WS connected to ${url}`);
    socket.onmessage= e => vpd.value = JSON.parse(e.data);
    socket.onerror  = e => console.error('WebSocket error', e);
    socket.onclose  = () => { console.warn('WebSocket closed'); socket = null; };
  }

  async function fetchOnce() {
    try {
      const res = await fetch('/api/vpd', {
        headers: { 'Accept': 'application/json' },
        credentials: 'include'
      });

      if (!res.ok) {
        const text = await res.text();
        console.error(`API returned HTTP ${res.status} — body:\n`, text);
        throw new Error(`API Error ${res.status}`);
      }

      const ct = res.headers.get('content-type') || '';
      if (!ct.includes('application/json')) {
        const text = await res.text();
        console.error('Expected JSON but got:', text);
        throw new TypeError('Invalid content-type: ' + ct);
      }

      vpd.value = await res.json();

    } catch (err) {
      console.error('fetchOnce failed:', err);
    }
  }

  return { vpd, connect, fetchOnce };
}
