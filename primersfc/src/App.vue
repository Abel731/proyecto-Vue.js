<template>
  <div class="wrapper-container">
    <h1>Mundo Anime</h1>
    <p>Marca tu Favorito</p>
    
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
      submittedData1: [], 
      submittedData2: []  
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
  border: 2px solid #000000; 
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #000000; 
}

th {
  background-color: #13681a;
  color: white;
}

.image-container {
  position: relative;
  width: 150px; 
  height: 150px; 
  margin-bottom: 10px; 
}

/* Imagen dentro del contenedor */
.image-overlay {
  width: 100%;
  height: 100%;
  object-fit: cover; 
}

</style>

