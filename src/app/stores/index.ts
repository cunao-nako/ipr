import { defineStore } from 'pinia';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import { ref } from 'vue';
import type { newTODO, TodoList } from '@/app/stores/lib';

const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref<TodoList>([]);

  const addNewNote = ({ text, title }: newTODO) => {
    const key = todoList.value.length;

    const textExist = isString(text) && !isEmpty(text);
    if (textExist) {
      todoList.value.push({ key, title, text });
    }
  };

  return { todoList, addNewNote };
});

export default useTodoListStore;
