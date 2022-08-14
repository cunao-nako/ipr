<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import Input from '@/entites/input';
import Buttons from '@/entites/buttons/ui/index.vue';
import type { NoteInputModel } from '@/features/main/note-input/lib';

const props = defineProps({
  modelValue: Object,
  formIsVisible: Boolean,
});

const emit = defineEmits(['update:modelValue']);

const innerValue = ref<NoteInputModel>({
  title: props.modelValue?.title,
  text: props.modelValue?.text,
});

watchEffect(() => {
  emit('update:modelValue', innerValue.value);
});

</script>

<template>
  <div class="form">
    <Input v-if="props.formIsVisible" placeholder="Title..." v-model="innerValue.title" />
    <Input placeholder="Take a note..." v-model="innerValue.text" @click="$emit('open')" />
    <Buttons v-if="props.formIsVisible" @close="$emit('close')" @submit="$emit('submit')" />
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
