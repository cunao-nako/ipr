<template>
  <div class="form-buttons">
    <input type="button" class="submit-button" value="Add" @click="$emit('submit')"/>
    <input type="button" class="form-close-button" value="Close" @click="$emit('close')"/>
  </div>
</template>

<style>
.form-buttons {
  text-align: right;
}

.submit-button,
.form-close-button {
  margin: 0.2em 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.87);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  height: 36px;
  padding: 8px 24px;
  border-radius: 4px;
  border-color: transparent !important;
  background-color: rgb(251, 251, 251);
}

.submit-button {
  color: #fff;
  background-color: rgba(38, 255, 0, 0.99);
}

.submit-button:hover,
.form-close-button:hover {
  filter: brightness(95%);
}
</style>
