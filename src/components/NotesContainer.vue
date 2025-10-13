
<template>

  <NoteCard
    v-for="note in store.notes"
    :key="note.id"
    :noteTitle="note.title"
    :noteDesc="note.description"
    :noteFixed="note.fixed"
    class="bg-gray-200"
  />

</template>



<script setup>
import { useFormStore } from "@/stores/useFormStore";
import NoteCard from "./NoteCard.vue"

const store = useFormStore()

</script>
