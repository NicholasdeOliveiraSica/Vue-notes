
import { defineStore } from 'pinia';
import { ref } from 'vue';


// Usar Pinia é muito simples
// Cria a store com defineStore
// O primeiro arg, passa o nome
// O segundo arg, passa uma arrow function 
export const useFormStore = defineStore('form', () => {
    // Estados, reativos com ref()
    const newTitle = ref('');
    const newDesc = ref('');
    const fixed = ref(false); 

    // Methods, bem simples
    const resetForm = () => {
        newTitle.value = '';
        newDesc.value = '';
        fixed.value = false;
    }

    // Dps só retornar oq quer usar fora
    return {
        newTitle,
        newDesc,
        fixed,
        resetForm
    }
    // Daí tu chama esse arquivo numa variavel store, e usa store.estadReativo ou store.method()
    // Basico e funcional hehe
})