<template>

  <div
    @click="closeFocus"
    class="w-full h-screen flex flex-col items-center"
    >
    <NewNoteInput
      @click.stop
      v-model:focused="focused"
      />

      <pre>{{ focused }}</pre>
      <pre>{{ store.notes }}</pre>
  </div>

</template>


<script setup>
import NewNoteInput from "@/components/NewNoteInput.vue";
import { useFormStore } from "@/stores/useFormStore";
import { onMounted, ref } from "vue";

const focused = ref(false)
const store = useFormStore()

const closeFocus = () => {
  if(focused.value) {
    if(store.newTitle || store.newDesc) store.createNote();
  }
  focused.value = false;
};



onMounted(() => {
  console.log(store);
});

</script>
