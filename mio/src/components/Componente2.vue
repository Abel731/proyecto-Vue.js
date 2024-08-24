<template>
    <div>
        <h2 style="font-size:300%;"><u>Numero 2:</u></h2>
        <input type="text" v-model="msg" placeholder="Escribe un mensaje...">
        <p style="font-size:200%;"><u>El mensaje:</u></p>
        <p><strong>{{ this.msg }}</strong></p>
    </div>
</template>

<script>
  export default {
    nombre: 'Comp2',
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: rgb(246, 250, 8);
    }
    strong {
      background-color: rgb(60, 47, 128);
      padding: 5px;
    }
</style> 