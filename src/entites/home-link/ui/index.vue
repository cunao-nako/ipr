<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink class="home-link" to="/">Go back</RouterLink>
</template>

<style>
.home-link, .home-link:visited {
  color: #007bff;
}
</style>
