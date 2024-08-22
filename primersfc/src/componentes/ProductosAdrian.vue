<template>
  <div class="container">

    <h2>{{ productoName }}
      <img src="/quality.svg" v-show="productoIsFavorite">
    </h2>
    <p>{{ productoDesc }}</p>
    <button @click="toggleFavorite">Favorito</button>
  </div>
  <!-- Primero, diseñé la estructura visual del componente en la plantilla. 
   Dentro de un div con la clase container, muestro el nombre del producto usando {{ productoName }} y la descripción usando {{ productoDesc }}. 
   También agregué una imagen (<img>) que se muestra solo cuando el producto es marcado como favorito, controlado por la propiedad productoIsFavorite. 
   Para permitir la interacción, añadí un botón que llama a la función toggleFavorite cuando se hace clic, permitiendo que el usuario marque o desmarque el producto
  como favorito. -->

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
//Definí las propiedades (props) productoName, productoDesc, e isFavorite, las cuales el componente recibe desde su padre. 
//Luego, configuré un estado local llamado productoIsFavorite, que se inicializa con el valor de isFavorite.

//También configuré un observador (watch) para la propiedad isFavorite, 
//de modo que si esta cambia, el estado local productoIsFavorite se actualiza automáticamente.

//Por último, implementé el método toggleFavorite, que alterna el valor de productoIsFavorite
//cada vez que el usuario hace clic en el botón. Este método también emite un evento personalizado (update:isFavorite) para que el componente padre sepa que el estado de favorito ha cambiado.

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
width: 100px; /* Ajusta el tamaño según sea necesario */
height: 100px; /* Ajusta el tamaño según sea necesario */
background-size: contain;
background-repeat: no-repeat;
opacity: 0.2; /* Ajusta la opacidad según el efecto deseado */
pointer-events: none;
}
/*Apliqué un conjunto de reglas para darle estilo al componente. 
El contenedor principal tiene padding, borde, y un diseño centrado. 
La imagen que aparece cuando el producto es favorito está alineada a la derecha, 
y el botón tiene estilos que incluyen colores, bordes redondeados, y un efecto de cambio de color cuando el usuario pasa el ratón sobre él. 
También definí estilos para otros elementos como producto-item y una marca de agua (watermark), asegurándome de que todo esté bien presentado y responsivo.
Con este componente, puedo representar visualmente un producto, permitir que los usuarios lo marquen como favorito, 
y manejar la lógica de estos cambios dentro del componente y comunicarlos al componente padre.
*/
</style>
