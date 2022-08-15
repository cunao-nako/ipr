import { defineStore } from 'pinia';
import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import type { newTODO, TodoList } from '@/app/stores/lib';

const useTodoListStore = defineStore('todoList', () => {
  const todoList: TodoList = [];

  const addNewNote = ({ text, title }: newTODO) => {
    const key = todoList.length;
    if (isString(text) && !isEmpty(text)) {
      todoList.push({ key, title, text });
    }
  };

  return { todoList, addNewNote };
});

export default useTodoListStore;
