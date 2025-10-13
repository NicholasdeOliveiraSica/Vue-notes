
<template>

  <NoteCard
    v-for="note in store.notes"
    :key="note.id"
    :noteTitle="note.title"
    :noteDesc="note.description"
    :noteFixed="note.fixed"
  />

</template>



<script setup>
import { useFormStore } from "@/stores/useFormStore";
import NoteCard from "./NoteCard.vue"

const store = useFormStore

</script>
