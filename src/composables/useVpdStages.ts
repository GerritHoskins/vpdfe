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
  const optimalText = computed(() => {
    const s = selectedStage.value;
    return s.min == null ? 'Below 0.4 / Above 1.6' : `${s.min.toFixed(1)} – ${s.max!.toFixed(1)}`;
  });

  const valueClass = computed<string>(() => {
    if (value == null) return '';
    const v = value!;
    const s = selectedStage.value;

    if (s.min == null) {
      if (v < 0.4 || v > 1.6) return 'text-red-400';
      if ((v >= 0.4 - MARGIN && v <= 0.4 + MARGIN) || (v >= 1.6 - MARGIN && v <= 1.6 + MARGIN))
        return 'text-orange-400';
      return 'text-lime-400';
    }

    const { min = 0, max = 0 } = s;
    if (v >= min && v <= max) return 'text-lime-400';
    if (v >= min - MARGIN && v <= max + MARGIN) return 'text-orange-400';
    return 'text-red-400';
  });

  function selectStage(s: Stage) {
    selectedStage.value = s;
  }

  return {
    stages,
    selectedStage,
    optimalText,
    valueClass,
    selectStage,
  };
}
