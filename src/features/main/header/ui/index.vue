<script setup lang="ts">
import MainLogo from '@/entites/main-logo';
import Title from '@/entites/title';

const titleValue = 'Notes';
</script>

<template>
  <div class="main-header">
    <MainLogo/>
    <Title :value="titleValue"/>
  </div>
</template>

<style>
.main-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}
</style>
