<template>
  <div :class="['m-5 w-full max-w-150 bg-white rounded-lg shadow-md border border-[#ddd]' , $attrs.class]">

    <div v-show="props.focused" class="flex items-center justify-between px-4 py-2">
      <input
      type="text"
      placeholder="Titulo"
      class="placeholder:font-bold w-full focus-visible:outline-none text-xl"
      >
      <button @click="fixedSelect = !fixedSelect" class="cursor-pointer">
        <img v-if="!fixedSelect" width="20" height="20" src="https://img.icons8.com/ios/50/pin--v1.png" alt="Pin note"/>
        <img v-if="fixedSelect" width="20" height="20" src="https://img.icons8.com/ios-filled/50/pin--v1.png" alt="Pin note selected"/>
      </button>
    </div>

    <input
      type="text" 
      :placeholder="['Criar uma ' + createA]"
      class="px-4 py-2 w-full focus-visible:outline-none placeholder:font-semibold"
      @click="emit('update:focused', true)"
      />

    <div v-show="props.focused" class="flex justify-end text-neutral-400 font-semibold rounded-b-lg">
      <button @click="emit('update:focused', false)" class="cursor-pointer px-4 py-2">Fechar</button>
    </div>

  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  focused: { 
    type: Boolean, 
    default: false
  }
});

const emit = defineEmits([
  'update:focused'
])

const fixedSelect = ref(false);
const createA = ref('nota...');

</script>

