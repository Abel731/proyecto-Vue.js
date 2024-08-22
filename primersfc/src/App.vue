<template>
  <div class="wrapper-container">
    <h1>Mundo Anime</h1>
    <p>A tu favorito ponle una medalla</p>
    <div id="wrapper">
      <div class="image-container">
        <img src="./assets/monogatari-series-koyomi-araragi-image-anime-deviantart-anime.jpg" alt="" class="image-overlay">
      </div>

      <producto-item
        producto-name="Monogatari"
        producto-desc="Koyomi Araragi"
        v-bind:is-favorite="false"/>

      <div class="image-container">
        <img src="./assets/8d8f87bc8a3c6131d1e42d05a70c58f8.jpg" alt="" class="image-overlay">
      </div>

      <producto-item
        producto-name="Haikyuu"
        producto-desc="Shoyo Hinata"
        v-bind:is-favorite="false"/>

      <div class="image-container">
        <img src="./assets/kirito-sword-art-online-30364-1920x1080.jpg" alt="" class="image-overlay">
      </div>

      <producto-item
        producto-name="SAO"
        producto-desc="Kirigaya Kazuto"
        v-bind:is-favorite="false"/>
    </div>

    <div class="forms-tables-container">
      <!-- Formulario de Datos Personales -->
      <div class="card">
        <h2>Datos Personales</h2>
        <form @submit.prevent="submitForm1">
          <label for="nombre1">Nombre:</label>
          <input type="text" id="nombre1" v-model="form1.nombre" required>

          <label for="nickMy">Nick en Myanimelist:</label>
          <input type="text" id="nickMy" v-model="form1.nickMy" required>

          <label for="email1">Correo Electrónico:</label>
          <input type="email" id="email1" v-model="form1.email" required>

          <input type="submit" value="Enviar">
        </form>
      </div>

      <!-- Formulario de Anime Favorito -->
      <div class="card">
        <h2>Anime Favorito</h2>
        <form @submit.prevent="submitForm2">
          <label for="nombre2">Nombre del Anime:</label>
          <input type="text" id="nombre2" v-model="form2.nombre" required>

          <label for="mensaje2">Breve Sinopsis:</label>
          <textarea id="mensaje2" v-model="form2.mensaje" rows="4" required></textarea>

          <input type="submit" value="Enviar">
        </form>
      </div>
    </div>

    <div class="forms-tables-container">
      <!-- Tabla para mostrar los datos enviados desde el Formulario 1 -->
      <div class="table-container">
        <h3>Datos Personales Enviados</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Nick Myanimelist</th>
              <th>Correo Electrónico</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in submittedData1" :key="index">
              <td>{{ item.nombre }}</td>
              <td>{{ item.nickMy }}</td>
              <td>{{ item.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Tabla para mostrar los datos enviados desde el Formulario 2 -->
      <div class="table-container">
        <h3>Animes Favoritos Enviados</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre del Anime</th>
              <th>Breve Sinopsis</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in submittedData2" :key="index">
              <td>{{ item.nombre }}</td>
              <td>{{ item.mensaje }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form1: {
        nombre: '',
        nickMy: '',
        email: ''
      },
      form2: {
        nombre: '',
        mensaje: ''
      },
      submittedData1: [], // Array para almacenar los datos del formulario 1
      submittedData2: []  // Array para almacenar los datos del formulario 2
    };
  },
  methods: {
    submitForm1() {
      // Añade los datos del formulario 1 a la tabla correspondiente
      this.submittedData1.push({
        nombre: this.form1.nombre,
        nickMy: this.form1.nickMy,
        email: this.form1.email
      });
       // Muestra el alert después de enviar los datos
    alert("Datos personales enviados correctamente!");

      // Limpia el formulario 1 después de enviar
      this.form1.nombre = '';
      this.form1.nickMy = '';
      this.form1.email = '';
    },
    submitForm2() {
      // Añade los datos del formulario 2 a la tabla correspondiente
      this.submittedData2.push({
        nombre: this.form2.nombre,
        mensaje: this.form2.mensaje
      });
       // Muestra el alert después de enviar los datos
    alert("Anime favorito enviado correctamente!");

      // Limpia el formulario 2 después de enviar
      this.form2.nombre = '';
      this.form2.mensaje = '';
    }
  },
};
</script>

<style scoped>
/* Centraliza todo el contenido en la pantalla */
.wrapper-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px;
}

/* Marcas de agua */
.wrapper-container::before,
.wrapper-container::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1350px;
  height: 1200px;
  background-repeat: no-repeat;
  opacity: 0.2;
  pointer-events: none;
}

.wrapper-container::before {
  top: 0%;
  background-image: url('./assets/maxresdefault.jpg');
  background-size: contain;
}

.wrapper-container::after {
  top: 130%;
  background-image: url('./assets/frieren-frieren-3840x2160-15163.jpg');
  background-size: cover;
  z-index: 0;
}

/* Estilos para los productos */
#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  color: white;
}

#wrapper > div {
  border: inset black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: rgb(66, 132, 218);
}

/* Contenedor para los formularios y tablas */
.forms-tables-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
}

/* Estilos para los formularios */
.card {
  background-color: rgb(32, 121, 6);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(224, 8, 8, 0.1);
  padding: 20px;
  width: 100%;
}

.card h2 {
  margin-top: 0;
  color: white;
}

.card form {
  display: flex;
  flex-direction: column;
}

.card label {
  margin-bottom: 5px;
  font-weight: bold;
  color: white;
}

.card input,
.card textarea {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 4px;
}

.card input[type="submit"] {
  background-color: #1d4b38;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card input[type="submit"]:hover {
  background-color: #0552f7;
}

/* Estilos para la tabla */
.table-container {
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.table-container h3 {
  text-align: left;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #000000; /* Borde alrededor de la tabla */
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #000000; /* Bordes de las celdas */
}

th {
  background-color: #13681a;
  color: white;
}

.image-container {
  position: relative;
  width: 150px; /* Tamaño igual al del producto-item */
  height: 150px; /* Tamaño igual al del producto-item */
  margin-bottom: 10px; /* Espacio entre la imagen y el primer producto-item */
}

/* Imagen dentro del contenedor */
.image-overlay {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que la imagen cubra el contenedor sin distorsionarse */
}
/*   
Lo que hice aquí es crear una interfaz de usuario utilizando Vue.js, donde se muestran imágenes de personajes de anime junto con detalles específicos y formularios para que los usuarios envíen información personal y sobre su anime favorito. A continuación explico cada parte del código:

1. Estructura del template:
Encabezado y Descripción:

El componente comienza con un encabezado (<h1>Mundo Anime</h1>) y una breve descripción (<p>A tu favorito ponle una medalla</p>).
Contenedor Principal (#wrapper):

Dentro de este contenedor,  defini imágenes de personajes de anime y componentes personalizados llamados producto-item. Cada imagen está asociada a un producto-item que muestra el nombre y la descripción de un personaje de anime.

image-container: Este es el contenedor para cada imagen de anime, y la clase image-overlay ajusta la imagen para que cubra todo el contenedor.

producto-item: Este componente personalizado representa cada producto/anime con un nombre y una descripción.

Formulario y Tablas:

Formularios:
Formulario de Datos Personales: Permite al usuario ingresar su nombre, nick en MyAnimeList, y correo electrónico.
Formulario de Anime Favorito: Permite al usuario ingresar el nombre de su anime favorito y una breve sinopsis.
Tablas:
Tabla de Datos Personales: Muestra la información enviada desde el formulario de datos personales.
Tabla de Anime Favorito: Muestra los animes favoritos enviados por el usuario.

2. Script (Parte de la lógica):
data: Define el estado del componente, incluyendo los modelos para almacenar los datos de los formularios (form1 y form2) y las listas para almacenar los datos enviados (submittedData1 y submittedData2).

methods:

submitForm1: Maneja el envío del formulario de datos personales. Añade los datos ingresados a la lista submittedData1 y luego limpia el formulario.
submitForm2: Similar al anterior, pero para el formulario de anime favorito. Añade los datos ingresados a la lista submittedData2 y limpia el formulario.
3. Estilos (style):
Estilos Generales:

wrapper-container: Centra todo el contenido en la pantalla, con un fondo gris claro y un padding de 20px.
Marcas de Agua (::before y ::after):

Añadí dos marcas de agua utilizando los pseudo-elementos ::before y ::after en el contenedor wrapper-container. Estas marcas de agua son imágenes semi-transparentes que se colocan en el fondo, detrás del contenido principal, y no interfieren con la interacción del usuario debido a la propiedad pointer-events: none.
Estilos de Productos:

Defini un contenedor flexible (#wrapper) para los productos, permitiendo que se dispongan en una fila, con espacio entre ellos (gap: 20px).
Cada imagen tiene un contenedor (image-container) que ajusta la imagen para cubrir todo el espacio disponible.
Estilos de Formulario y Tabla:

container: Define un contenedor para los formularios y tablas, centrando y ajustando su tamaño.
card: Estiliza los formularios con un fondo verde claro, bordes redondeados, y una sombra.
Tablas: Se asegura que las tablas tengan un borde y las celdas estén bien definidas con bordes y padding.
Resumen:
He creado una interfaz que muestra productos relacionados con animes y permite al usuario interactuar con ella a través de formularios y tablas. Las imágenes de los personajes se muestran junto a sus detalles, y las marcas de agua mejoran el fondo visual. Usé una estructura modular con componentes de Vue.js para mantener el código organizado y reutilizable. */
</style>

