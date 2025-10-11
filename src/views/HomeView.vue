<template>
  <div>
    <NewNoteInput/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import NewNoteInput from "@/components/NewNoteInput.vue";

const name = ref("");
const submit = () => {
  alert(`Hello ${name.value}, welcome to Vue 3!`);
  localStorage.setItem("name", name.value);
  name.value = "";
};
const callName = () => {
  name.value = "";
  const storedName = localStorage.getItem("name");
  if (storedName) {
    alert(`Your name is ${storedName}`);
    name.value = storedName;
  } else {
    alert("No name found in local storage.");
  }
};

</script>
