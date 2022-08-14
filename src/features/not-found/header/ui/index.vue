<script setup lang="ts">
import Title from '@/entites/title';
import HomeLink from '@/entites/home-link';

const titleValue = 'Page not found!';
</script>

<template>
  <div class="not-found-header">
    <Title :value="titleValue"/>
    <HomeLink/>
  </div>
</template>

<style>
.not-found-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}
</style>
