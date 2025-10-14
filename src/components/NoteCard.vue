<template>
  <section :class="$attrs.class">

    <div class="flex justify-between font-bold text-lg capitalize border-b border-[#00000020]"> <!-- HEADER -->
      <h1>{{ noteTitle}}</h1>
      <input type="checkbox"
            :class="fixInputStyles"
            @click="store.changeFix(noteID)"
            >
    </div>
    <div class="border-b border-[#00000020] py-1"> <!-- MAIN -->
      <p>{{ noteDesc }}</p>
    </div>

    <div class="flex w-full pt-2 justify-end"> <!--FOOTER-->
      <button class="cursor-pointer">
        <img src="../assets/trash.svg" alt="Trash Icon" class="hover:scale-120">
      </button>
    </div>
  </section>

</template>


<script setup>
// imports
import { computed } from 'vue';
import { useFormStore } from '@/stores/useFormStore';

// variables
const store = useFormStore()

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
