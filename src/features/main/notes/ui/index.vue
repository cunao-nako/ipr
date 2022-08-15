<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import Note from '@/entites/note';
import EmptyListNotification from '@/features/main/empty-list-notification/index';
import useTodoListStore from '@/app/stores';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { removeNote } = store;

const hasNotes = computed(() => !!todoList.value.length);
</script>

<template>
  <div v-if="hasNotes" class="notes-container">
    <Note
      v-for="({ key, title, text }, index) in todoList"
      :note-data="{ title, text }"
      :key="key"
      @delete="removeNote(index)"
    />
  </div>
  <EmptyListNotification v-else />
</template>

<style>
.notes-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}
</style>
