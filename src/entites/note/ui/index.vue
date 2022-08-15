<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  noteData: {
    type: Object as PropType<{ title?: string, text: string }>,
  },
});
defineEmits(['delete']);
</script>

<template>
  <div class="note">
    <span class="note-title">{{ noteData?.title }}</span>
    <span class="note-text">{{ noteData?.text }}</span>
    <div class="toolbar">
      <img class="delete-btn" src="@/shared/assets/img/delete-icon.png" alt="delete-button" @click="$emit('delete')">
    </div>
  </div>
</template>

<style>
.note {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 16px;
  width: 250px;
  background-color: #fff;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
}

.note:hover {
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
  0 1px 3px 1px rgba(60, 64, 67, 0.149);
}

.note-title {
  letter-spacing: 0.00625em;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5rem;
  min-height: 38px;
  padding: 16px 16px 0 16px;
  transition: background-color 0.218s ease-in;
  box-sizing: border-box;
  font-variant-ligatures: none;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.note-text {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5rem;
  min-height: 30px;
  letter-spacing: 0.01428571em;
  padding: 4px 16px 12px 16px;
  box-sizing: border-box;
  font-variant-ligatures: none;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.toolbar {
  flex-direction: row-reverse;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  display: flex;
  font-size: 12px;
  line-height: 26px;
  margin: 4px 0;
  position: relative;
}

.delete-btn {
  opacity: 0.5;
  height: 18px;
  margin: 0 8px;
  width: 17px;
  cursor: pointer;
  color: #202124;
}

.delete-btn:hover {
  opacity: 1;
}
</style>
