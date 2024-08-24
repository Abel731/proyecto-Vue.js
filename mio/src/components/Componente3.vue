<template>
    <div :style="{ backgroundColor: bgColor }">
        <h2 style="font-size:300%;"><u>Numero 3:</u></h2>
        <p style="font-size:200%;"><u>Elige que color le guste mas:</u></p>
        <input type="color" v-model="bgColor">
        <strong>{{ this.bgColor }}</strong>
    </div>
</template>

<script>
  export default {
    nombre: 'Comp3',
    data () {
      return {
        bgColor: ''
      }
    }
  }
</script>

<style></style>