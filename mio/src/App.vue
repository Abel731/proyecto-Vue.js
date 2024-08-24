<template>
    <h1 style="color:blue;">&#128520;Elige, Escriba y Coloree&#128520;</h1>
    <p style="font-size:160%;">&#128525;Aca las 3 opciones para que pueda elegir que desea mas utilizar:&#128525;</p>

      <label><input type="radio" name="rbgComp" v-model="compNombre" :value="'comp-1'"> Uno</label>
      <label><input type="radio" name="rbgComp" v-model="compNombre" :value="'comp-2'"> Dos</label>
      <label><input type="radio" name="rbgComp" v-model="compNombre" :value="'comp-3'"> Tres</label>
    <KeepAlive :max="1">
      <component :is="compNombre"></component>
    </KeepAlive>  
</template>

<script>
  export default {
    data () {
      return {
        compNombre: 'Numero 1'
      }
    }
  }
</script>