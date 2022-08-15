<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Note from '@/entites/note';
import EmptyListNotification from '@/features/main/empty-list-notification/index';
import useTodoListStore from '@/app/stores';

const { todoList } = storeToRefs(useTodoListStore());

const handleDelete = (noteIndex: number) => {
  console.debug('noteIndex', noteIndex);
};
</script>

<template>
  <div v-if="todoList.length" class="notes-container">
    <Note
      v-for="{ index, key, title, text } in todoList"
      :note-data="{ title, text }"
      :key="key"
      @delete="handleDelete(index)"
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
