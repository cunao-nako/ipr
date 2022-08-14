<script setup lang="ts">
import NotFoundTitle from "@/entites/not-found-title";
import HomeLink from "@/entites/home-link";
</script>

<template>
  <div class="not-found-header">
    <NotFoundTitle/>
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
