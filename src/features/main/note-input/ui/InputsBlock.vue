<script setup lang="ts">
import type { PropType } from 'vue';
import { ref, watchEffect } from 'vue';
import InputWrapper from '@/entites/input-wrapper';
import Buttons from '@/entites/buttons/ui/index.vue';
import type { NoteInputModel } from '@/features/main/note-input/lib';

const props = defineProps({
  modelValue: { type: Object as PropType<NoteInputModel>, required: true },
  isVisible: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const innerValue = ref<NoteInputModel>({
  title: props.modelValue.title,
  text: props.modelValue.text,
});

watchEffect(() => {
  emit('update:modelValue', innerValue.value);
});

</script>

<template>
  <div class="form">
    <InputWrapper v-if="props.isVisible" placeholder="Title..." v-model="innerValue.title" />
    <InputWrapper placeholder="Take a note..." v-model="innerValue.text" @click="$emit('open')" />
    <Buttons v-if="props.isVisible" @close="$emit('close')" @submit="$emit('submit')" />
  </div>
</template>

<style>
.form {
  position: relative;
  border: none;
  margin: 1px;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
}
</style>
