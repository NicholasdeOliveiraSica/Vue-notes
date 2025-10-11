<template>
  <div :class="['m-5 max-w-150 bg-white rounded-lg shadow-md border border-[#ddd]' , $attrs.class]">
    <div v-show="focused" class="flex items-center justify-between px-4 py-2">
      <input
      type="text"
      placeholder="Titulo"
      class="placeholder:font-bold w-full focus-visible:outline-none"
      >
      <button @click="fixedSelect = !fixedSelect" class="cursor-pointer">
        <img v-if="!fixedSelect" width="20" height="20" src="https://img.icons8.com/ios/50/pin--v1.png" alt="Pin note"/>
        <img v-if="fixedSelect" width="20" height="20" src="https://img.icons8.com/ios-filled/50/pin--v1.png" alt="Pin note selected"/>
      </button>
    </div>

    <input 
      type="text" 
      :placeholder="['Criar uma ' + createA]"
      class="px-4 py-2 h-full w-full focus-visible:outline-none placeholder:font-semibold"
      @focus="focused = true"
      />
    
    <div v-show="focused" class="flex justify-between text-neutral-400 font-semibold rounded-b-lg">
      <div class="flex justify-center items-center">
        <button class="pl-4 pr-2 py-2" >
          <img
            @click="isList = !isList; createA = isList ? 'lista...' : 'nota...'"
            src="../assets/select.png"
            alt="Select list Button"
            class="cursor-pointer hover:scale-110 opacity-50 hover:opacity-80 cursor-pointer"
            width="20" height="20"
            />
        </button>
        <a>List</a>
      </div>
      <button @click="focused = false" class="cursor-pointer px-4 py-2">Fechar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const fixedSelect = ref(false);
const focused = ref(false);
const isList = ref(false);
const createA = ref('nota...');

</script>
