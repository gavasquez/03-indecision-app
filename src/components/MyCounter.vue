<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn mr-2" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
  value?: number;
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);

//import { ref, computed } from 'vue';
/* const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
}); */

//const counter = ref(props.value ?? 5);
//const squareCounter = computed(() => counter.value * counter.value);

//const increaseBy = (value: number) => {
//  counter.value = counter.value + value;
//};
</script>

<style>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-950;
}
</style>
import type { useCounter } from '@/composables/useCounter';
