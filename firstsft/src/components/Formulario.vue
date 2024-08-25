<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nombre" required />
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="apellido" required />
        </div>
        <div>
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div v-if="submitted">
        <h2>Datos enviados:</h2>
        <p><strong>Nombre:</strong> {{ nombre }}</p>
        <p><strong>Apellido:</strong> {{ apellido }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        apellido: '',
        email: '',
        submitted: false
      };
    },
    methods: {
      submitForm() {
        this.submitted = true;
        console.log('Nombre:', this.nombre);
        console.log('Apellido:', this.apellido);
        console.log('Correo Electrónico:', this.email);
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 300px;
    margin: 0 auto;
  }
  
  div {
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 15px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #369f72;
  }
  </style>