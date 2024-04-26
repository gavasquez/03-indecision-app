import { computed, ref } from 'vue';

export const useCounter = (initialValue = 5) => {
  const counter = ref(initialValue);
  //const squareCounter = computed(() => counter.value * counter.value);
  return {
    counter,
    squareCounter: computed(() => counter.value * counter.value),
  };
};
