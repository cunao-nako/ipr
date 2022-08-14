<script setup lang="ts">
const props = defineProps({
  placeholder: String,
});
</script>

<template>
  <input :placeholder="props.placeholder" type="text">
</template>
