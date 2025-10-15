<template>
  <section :class="['flex flex-col justify-between',$attrs.class]">

    <div v-if="noteTitle" class="flex justify-between font-bold text-lg">  <!-- HEADER -->
      <h1 v-if="!isEditing" >{{ noteTitle}}</h1>
      <input v-if="isEditing" v-model="editTitle" type="text" class="max-w-40">

      <input type="checkbox"
            :class="fixInputStyles"
            @click="store.changeFix(noteID)"
            >
    </div>
    <div> <!-- MAIN -->
      <p v-if="!isEditing" >{{ noteDesc }}</p>
      <textarea @input="autoResize" v-if="isEditing" type="text" v-model="editDesc" rows="1" class="resize-none w-full focus-visible:outline-none overflow-hidden"> </textarea>
    </div>

    <div class="flex w-full pt-2 justify-end gap-2"> <!--FOOTER-->
      <button v-if="isEditing" class="cursor-pointer" @click="cancelEditing()">
        <img src="../assets/cancel-edit.svg" alt="Edit Icon" class="hover:scale-120">
      </button>
      <button v-if="isEditing" class="cursor-pointer" @click="sendEditing()">
        <img src="../assets/ok-edit.svg" alt="Edit Icon" class="hover:scale-120">
      </button>
      <button v-if="!isEditing" class="cursor-pointer" @click="startEditing()">
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
const editTitle = ref('')
const editDesc = ref('')

const startEditing = () => {
  editTitle.value = props.noteTitle
  editDesc.value = props.noteDesc
  isEditing.value = true
}

const cancelEditing = () => {
  editTitle.value = ''
  editDesc.value = ''
  isEditing.value = false
}

const sendEditing = () => {
  store.updateNote(props.noteID, editTitle.value, editDesc.value)
  isEditing.value = false
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
