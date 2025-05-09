import { ref, computed } from 'vue';

export interface Stage {
  name: string;
  min?: number;
  max?: number;
}

export const stages: Stage[] = [
  { name: 'Veg', min: 0.4, max: 0.8 },
  { name: 'Early Flower', min: 0.8, max: 1.2 },
  { name: 'Late Flower', min: 1.2, max: 1.6 },
  { name: 'Danger Zone' },
];

export const MARGIN = 0.1;

export const selectedStage = ref<Stage>(stages[1]);

export function useVpdStages(value?: number) {
  const isDanger = computed(() => selectedStage.value.min == null);

  const valueClass = computed<string>(() => {
    if (value == null) return '';

    const v = value;
    const s = selectedStage.value;

    if (isDanger.value) {
      const low = 0.4,
        high = 1.6;
      if (v < low - MARGIN || v > high + MARGIN) return 'text-red-400';
      if (v < low || v > high) return 'text-orange-400';
      return 'text-lime-400';
    }

    const { min = 0, max = 0 } = s;

    if (v < min - MARGIN || v > max + MARGIN) return 'text-red-400';
    if (v < min || v > max) return 'text-orange-400';
    return 'text-lime-400';
  });

  const optimalText = computed(() => {
    const s = selectedStage.value;
    return s.min == null ? 'Below 0.4 / Above 1.6' : `${s.min.toFixed(1)} – ${s.max!.toFixed(1)}`;
  });

  function selectStage(s: Stage) {
    selectedStage.value = s;
  }

  return {
    stages,
    selectedStage,
    valueClass,
    optimalText,
    selectStage,
  };
}
