<template>
  <div class="container">

    <h2>{{ productoName }}
      <img src="/quality.svg" v-show="productoIsFavorite">
    </h2>
    <p>{{ productoDesc }}</p>
    <button @click="toggleFavorite">Favorito</button>
  </div>


</template>

<script>
export default {
  props: {
    productoName: String,
    productoDesc: String,
    isFavorite: Boolean,


  
  },




  data() {
    return {
      productoIsFavorite: this.isFavorite
    }
  },




  watch: {
    isFavorite(newValue) {
      this.productoIsFavorite = newValue;
    }
  },
  methods: {
    toggleFavorite() {
      this.productoIsFavorite = !this.productoIsFavorite;
      this.$emit('update:isFavorite', this.productoIsFavorite);
    }
  },
};

</script>

<style scoped>
.container {
  padding: 20px;
  border: 1px solid #f8f8f8;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

img {
  height: 1.5em;
  float: right;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #ec4807;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #cfa20b;
}

.producto-item {
position: relative;
border: dashed black 1px;
flex-basis: 120px;
margin: 10px;
padding: 10px;
background-color: rgb(91, 27, 241);
overflow: hidden;
}

.watermark {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100px; 
height: 100px; 
background-size: contain;
background-repeat: no-repeat;
opacity: 0.2;
pointer-events: none;
}

</style>
