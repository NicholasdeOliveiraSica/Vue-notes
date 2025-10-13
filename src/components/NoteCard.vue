<template>
  <div class="bg-gray-200"> <!-- HEADER -->
    <h1>{{ noteTitle}}</h1>
    <input type="check-box" :class="fixInputStyles" class="a">
  </div>

  <div> <!-- MAIN -->
    <p>{{ noteDesc }}</p>
  </div>

<!--
  <div> FOOTER </div>
-->

</template>


<script setup>
// imports
/* import { useFormStore } from '@/stores/useFormStore'; */

const props = defineProps({
  noteID: Number,
  noteTitle: String,
  noteDesc: String,
  noteFixed: Boolean,
})
// variables
/*   const store = useFormStore */

  const fixInputStyles = [
    "appearance-none",
    props.noteFixed ? "bg-[url(https://img.icons8.com/ios/50/pin--v1.png)]" : "bg-[url(https://img.icons8.com/ios-filled/50/pin--v1.png)]"
  ]

</script>
