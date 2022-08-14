<script setup lang="ts">
import { ref } from 'vue';
import Input from '@/entites/input';

const formIsHidden = ref(true);

const toggleFormVisibility = (formVisibility: boolean) => {
  formIsHidden.value = formVisibility;
};

const handleSubmit = () => {
  console.debug('submit');
};

</script>

<template>
  <form class="form-container" @keydown.esc="toggleFormVisibility(true)" @submit.prevent="handleSubmit">

    <div v-if="formIsHidden" class="form" @click="toggleFormVisibility(false)">
      <Input placeholder="Take a note..."/>
    </div>

    <div v-else class="form">
      <Input placeholder="Title..."/>
      <Input placeholder="Enter your note..."/>
      <div class="form-buttons">
        <input type="button" id="submit-button" value="Submit" @click="handleSubmit"/>
        <input type="button" id="form-close-button" value="Close" @click="toggleFormVisibility(true)"/>
      </div>
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

.form-buttons {
  text-align: right;
}
</style>
