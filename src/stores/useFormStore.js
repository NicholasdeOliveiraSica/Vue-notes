
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';


// Usar Pinia é muito simples
// Cria a store com defineStore
// O primeiro arg, passa o nome
// O segundo arg, passa uma arrow function
export const useFormStore = defineStore('form', () => {
    // Estados, reativos com ref()
    const newTitle = ref('');
    const newDesc = ref('');
    const fixed = ref(false);

    const notes = ref([])

    const saveNotes = localStorage.getItem('allNotes')
    console.log(saveNotes)
    if (saveNotes) {
      notes.value = JSON.parse(saveNotes)
    }
    // Methods, bem simples
    const resetForm = () => {
        newTitle.value = '';
        newDesc.value = '';
        fixed.value = false;
    }

    const createNote = () => {
      console.log("Creating a new note...")
      notes.value.push({
        id: Date.now(),
        title: newTitle.value,
        description: newDesc.value,
        fixed: fixed.value
      })
      resetForm()
    }

    watch(notes, () => {
      const loadNotes = JSON.stringify(notes.value)
      localStorage.setItem('allNotes', loadNotes)
    }, {deep: true})




    // Dps só retornar oq quer usar fora
    return {
        notes,
        newTitle,
        newDesc,
        fixed,
        createNote,
        resetForm
    }
    // Daí tu chama esse arquivo numa variavel store, e usa store.estadReativo ou store.method()
    // Basico e funcional hehe
})
