<script setup lang="ts">
import MainLogo from "@/entites/main-logo";
import MainTitle from '@/entites/main-title'
</script>

<template>
  <div class="main-header">
    <MainLogo/>
    <MainTitle/>
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
