
import { defineStore } from 'pinia';
import { onMounted, ref, watch } from 'vue';


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

    onMounted(() => {
      console.log(notes.value)
    })

    const saveNotes = localStorage.getItem('allNotes')
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

    function changeFix(noteId) {
      const thisNote = notes.value.find(note => note.id === noteId)
      if(thisNote) thisNote.fixed = !thisNote.fixed
    }

    function deleteNote(noteId) {
      const newNotes = notes.value.filter(note => note.id !== noteId)
      if(newNotes) notes.value = newNotes
    }

    function updateNote(id, title, desc) {
      const thisNote = notes.value.find(note => note.id === id)
      if(thisNote) {
        thisNote.title = title
        thisNote.description = desc
      }
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
        resetForm,
        changeFix,
        deleteNote,
        updateNote
    }
    // Daí tu chama esse arquivo numa variavel store, e usa store.estadReativo ou store.method()
    // Basico e funcional hehe
})
