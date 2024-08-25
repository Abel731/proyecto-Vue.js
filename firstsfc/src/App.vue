<template>
  <div class="app-container">
    <header class="header">
      <h3>Lista de Tareas</h3>
      <p>Aquí debes poner las cosas que vas a hacer durante el día o las compras.</p>
    </header>
    <div class="todo-panel">
      <ul class="todo-list">
        <todo-item
          v-for="x in items"
          :key="x"
          :item-name="x"
          @remove-item="removeItem(x)"
        />
      </ul>
      <div class="input-container">
        <input 
          type="text" 
          placeholder="Añade cosas para hacer aqui" 
          v-model="newItem" 
          @keydown.enter="addItem" 
          class="todo-input"
        />
        <button @click="addItem" class="add-button">Agregar</button>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'; // Asegúrate de importar el componente

export default {
  components: {
    TodoItem
  },
  data() { 
    return {
      newItem: '',
      items: []
    };
  },
  methods: {
    addItem() {
      if (this.newItem.trim()) {
        this.items.push(this.newItem.trim());
        this.newItem = '';
      }
    },
    removeItem(item) {
      this.items = this.items.filter(i => i !== item);
    }
  }
}
</script>

<style>
  body {
    background-color: #078b33; /* Fondo verde claro por si la imagen no carga */
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .app-container {
    max-width: 400px;
    margin: 50px auto; /* Centrar el panel verticalmente */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff; /* Fondo blanco para el panel de la lista */
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }

  .header h3 {
    margin: 0;
    color: #333;
  }

  .header p {
    color: #666;
    font-size: 14px;
  }

  .todo-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .todo-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .todo-list > todo-item {
    margin: 10px 0;
    background-color: #f1f8e9; /* Fondo verde claro para los ítems */
    border-radius: 4px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
  }

  .todo-input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }

  .add-button {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    font-size: 14px;
    cursor: pointer;
  }

  .add-button:hover {
    background-color: #218838;
  }
</style>
