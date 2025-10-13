<template>

  <div
    @click="closeFocus"
    class="w-full h-screen flex flex-col items-center"
    >
    <NewNoteInput
      @click.stop
      v-model:focused="focused"
      />

    <pre>{{ store.fixed }}</pre>
    <pre>{{willCreate}}</pre>
    <pre v-if="willCreate">
      Creating a new note...
      Title:  {{noteTitle}}
      Description:  {{noteDesc}}
      Are fixed?  {{noteFixed}}
    </pre>
  </div>

</template>


<script setup>
import NewNoteInput from "@/components/NewNoteInput.vue";
import { useFormStore } from "@/stores/useFormStore";
import { onMounted, ref } from "vue";

const focused = ref(false)
const store = useFormStore()
const willCreate = ref(false)
const noteTitle = ref('')
const noteDesc = ref('')
const noteFixed = ref(false)

const closeFocus = () => {
  if(focused.value) {
    createNote();
  }
  focused.value = false;
  store.resetForm();
};

const createNote = () => {
  if (store.newTitle || store.newDesc) { willCreate.value = true; } 
  if (willCreate.value) {
    noteTitle.value = store.newTitle;
    noteDesc.value = store.newDesc;
    noteFixed.value = store.fixed;
  

    console.log('Creating a new note...');
    console.log('Title: ', noteTitle.value);
    console.log('Description:  ', noteDesc.value);
    console.log('Are fixed? ', noteFixed.value);
  }
};

onMounted(() => {
  console.log(store);
});

</script>