<template>

  <div
    @click="closeFocus()"
    class="w-full h-screen flex flex-col items-center"
    >
    <NewNoteInput
      @click.stop
      v-model:focused="focused"
      />

  </div>

</template>


<script setup>
import NewNoteInput from "@/components/NewNoteInput.vue";
import { ref } from "vue";

const focused = ref(false)

const closeFocus = () => {
  if(focused.value) {
    createNote();
  }
  focused.value = false;
};

const createNote = () => {
  console.log('Creating a new note...');
};

</script>