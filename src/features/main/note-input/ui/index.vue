<script setup lang="ts">
import { ref } from 'vue';
import InputsBlock from '@/features/main/note-input/ui/InputsBlock.vue';
import type { NoteInputModel } from '@/features/main/note-input/lib';
import { DEFAULT_NOTE_INPUT_MODEL } from '@/features/main/note-input/lib';
import useTodoListStore from '@/app/stores';

const { addNewNote } = useTodoListStore();

const formIsVisible = ref(false);

const formData = ref<NoteInputModel>(DEFAULT_NOTE_INPUT_MODEL);

const showForm = () => {
  formIsVisible.value = true;
};

const cleanFormData = () => {
  Object.keys(formData.value).forEach((key: string) => { formData.value[key] = ''; });
};

const hideForm = () => {
  cleanFormData();
  formIsVisible.value = false;
};

const handleSubmit = () => {
  addNewNote(formData.value);
  cleanFormData();
};
</script>

<template>
  <form class="form-container" @keydown.esc="hideForm" @submit.prevent="handleSubmit">
    <InputsBlock
      :is-visible="formIsVisible"
      v-model="formData"
      @open="showForm"
      @close="hideForm"
      @submit="handleSubmit"
    />
  </form>
</template>

<style>
.form-container {
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
  0 2px 6px 2px rgba(60, 64, 67, 0.149);
  margin: 32px auto 16px auto;
  max-width: 496px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
}
</style>
