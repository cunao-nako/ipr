<script setup lang="ts">
import Input from '@/entites/input';
import Buttons from '@/entites/buttons/ui/index.vue';

const props = defineProps({
  formIsVisible: Boolean,
});

</script>

<template>
    <div class="form">
      <Input v-if="props.formIsVisible" placeholder="Title..."/>
      <Input placeholder="Take a note..." @click="$emit('open')"/>
      <Buttons v-if="props.formIsVisible" @close="$emit('close')" @submit="$emit('submit')"/>
    </div>
</template>

<style>
.form {
  position: relative;
  border: none;
  margin: 1px;
  border-radius: 8px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
}
</style>
