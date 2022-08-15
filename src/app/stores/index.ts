import { defineStore } from 'pinia';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import { ref } from 'vue';
import { uniqueId } from 'lodash';
import type { newTODO, TodoList } from '@/app/stores/lib';

const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref<TodoList>([]);

  const addNewNote = ({ title = 'Title', text }: newTODO) => {
    const key = uniqueId();

    const textExist = isString(text) && !isEmpty(text);
    if (textExist) {
      todoList.value.push({ key, title, text });
    }
  };

  const removeNote = (noteIndex: number) => {
    todoList.value.splice(noteIndex, 1);
  };

  return { todoList, addNewNote, removeNote };
});

export default useTodoListStore;
