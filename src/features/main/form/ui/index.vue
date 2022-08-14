<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/entites/input';
import Buttons from '@/entites/buttons/ui/index.vue';

const formIsHidden = ref(true);

const showForm = () => {
  formIsHidden.value = false;
};

const hideForm = () => {
  formIsHidden.value = true;
};

const handleSubmit = () => {
  console.debug('submit');
};

</script>

<template>
  <form class="form-container" @keydown.esc="hideForm" @submit.prevent="handleSubmit">

    <div v-if="formIsHidden" class="form" @click="showForm">
      <Input placeholder="Take a note..."/>
    </div>

    <div v-else class="form">
      <Input placeholder="Title..."/>
      <Input placeholder="Enter your note..."/>
      <Buttons @close="hideForm" @submit="handleSubmit"/>
    </div>

  </form>
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

.form-container {
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
  0 2px 6px 2px rgba(60, 64, 67, 0.149);
  margin: 32px auto 16px auto;
  max-width: 496px;
  transition-duration: 0.218s;
  transition-property: background, border, opacity, box-shadow, transform;
  transition-timing-function: ease-in;
}
</style>
