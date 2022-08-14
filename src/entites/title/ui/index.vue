<script setup lang="ts">
const props = defineProps({
  value: String,
});
</script>

<template>
  <h2 class="title">{{ props.value }}</h2>
</template>

<style>
.title {
  color: #5f6368;
  font-size: 2rem;
  padding-top: 4px;
  padding-left: 4px;
}
</style>
