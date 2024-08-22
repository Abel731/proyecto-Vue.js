<template>
  <h1>Hola mundo</h1>
  <br>
  <p>{{ contador }}</p>
  <br>
  
  <button @click="incrementar">incrementar</button>
  <button @click="decrementar">decrementar</button>
</template>

<script setup>
import {ref} from 'vue';
const contador = ref(0);
//funcion para incrementar el valor utilizando value
const incrementar = () => {
  contador.value++;
}
const decrementar = () => {
  contador.value--;
}

</script>

<style scoped>
/* el "contador" se pone rojo por que esta dentro de una etiqueta <p> */
p {
  color: red;
}
</style>

