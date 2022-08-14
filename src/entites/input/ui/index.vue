<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const props = defineProps({
  value: String,
});

const emit = defineEmits(['input']);

const innerValue = ref(props.value || '');

watchEffect(() => {
  emit('input', innerValue.value);
});

</script>

<template>
  <input class="note-text" :placeholder="props.placeholder" v-model="innerValue" type="text">
</template>

<style>
.note-text {
  width: calc(100% - 10px);
  height: 100%;
  margin: 5px 0 0 5px;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.00625em;
  border: 0;
  overflow: hidden;
  position: relative;
}
</style>
