<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="not-found-page-header">
    <h1>Page not found!</h1>
    <RouterLink to="/">Go back</RouterLink>
  </div>
</template>

<style>
.not-found-page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
}

a, a:visited {
  color: #007bff;
}
</style>
