<template>
  <div>
    <h1>Hello World</h1>
    <p>your name: {{ name }}</p>
    <input type="text" v-model="name" placeholder="Whats ur name?" />
    <Button type="submit" @click="submit">submit</Button>
    <br>
    <button @click="callName">Whats MY name?</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
