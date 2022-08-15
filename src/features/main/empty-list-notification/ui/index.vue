<script setup lang="ts">
import Title from '@/entites/title';

const titleValue = 'Notes will appear here';
</script>

<template>
  <Title class="notification" :value="titleValue"/>
</template>

<style>
.notification {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  font-size: 1.5rem;
}
</style>
