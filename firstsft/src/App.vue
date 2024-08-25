<template>
  <div id="app">
    <h1>Formulario de Registro</h1>
    <Formulario />
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue';

export default {
  name: 'App',
  components: {
    Formulario
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>