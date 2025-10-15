<template>
  <section :class="['flex flex-col justify-between',$attrs.class]" @click="Edit()">

    <div v-if="noteTitle" class="flex justify-between font-bold text-lg capitalize">  <!-- HEADER -->
      <h1 v-if="!isEditing" >{{ noteTitle}}</h1>
      <input v-if="isEditing" type="text" class="max-w-40">
      <input type="checkbox"
            :class="fixInputStyles"
            @click="store.changeFix(noteID)"
            >
    </div>
    <div> <!-- MAIN -->
      <p v-if="!isEditing" >{{ noteDesc }}</p>
      <input v-if="isEditing" type="text">
    </div>

    <div class="flex w-full pt-2 justify-end gap-2"> <!--FOOTER-->
      <button class="cursor-pointer" @click="console.log('Edit Note num: ', noteID)">
        <img src="../assets/edit-icon.svg" alt="Edit Icon" class="hover:scale-120">
      </button>
      <button class="cursor-pointer" @click="store.deleteNote(noteID)">
        <img src="../assets/trash.svg" alt="Trash Icon" class="hover:scale-120">
      </button>
    </div>
  </section>

</template>


<script setup>
// imports
import { computed, ref } from 'vue';
import { useFormStore } from '@/stores/useFormStore';

// variables
const store = useFormStore()

const isEditing = ref(false)

const Edit = () => {
  isEditing.value = !isEditing.value
}

const props = defineProps({
  noteID: Number,
  noteTitle: String,
  noteDesc: String,
  noteFixed: Boolean,
})


const fixInputStyles = computed(() => [
  "appearance-none hover:scale-120",
  "w-6 h-6 bg-cover cursor-pointer",
  props.noteFixed ? "bg-[url(../assets/fillPin.svg)]"
                  : "bg-[url(../assets/fixPin.svg)]",
])
</script>
