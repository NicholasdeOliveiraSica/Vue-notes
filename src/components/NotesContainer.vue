
<template>

  <div class="w-full px-10 flex justify-between flex-wrap gap-5">
    <NoteCard
      v-for="note in store.notes"
      :key="note.id"
      :noteID="note.id"
      :noteTitle="note.title"
      :noteDesc="note.description"
      :noteFixed="note.fixed"
      class="bg-white min-w-60 p-3 rounded-xl shadow-lg border border-[#00000077]"
    />
  </div>

</template>



<script setup>
import { useFormStore } from "@/stores/useFormStore";
import NoteCard from "./NoteCard.vue"

const store = useFormStore()

</script>
