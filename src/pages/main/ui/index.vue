<script setup lang="ts">
import MainHeader from '@/features/main/header';
import NoteInput from '@/features/main/note-input';
import EmptyListNotification from '@/features/main/empty-list-notification';

</script>

<template>
  <div>
    <MainHeader/>
    <NoteInput/>
    <EmptyListNotification/>
  </div>
</template>
