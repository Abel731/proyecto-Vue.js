<template>
  <li class="todo-item">
    <span class="item-content">
      <span class="item-dot"></span>
      {{ itemName }}
    </span>
    <button @click="handleRemove" class="remove-button">Quitar</button>
  </li>
</template>

<script>
export default {
  props: {
    itemName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleRemove() {
      this.$emit('remove-item');
    }
  }
}
</script>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f1f8e9; /* Fondo verde claro */
    border-radius: 4px;
    margin-bottom: 10px;
    position: relative;
  }

  .item-content {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .item-dot {
    width: 8px;
    height: 8px;
    background-color: #4caf50; /* Color verde para el punto */
    border-radius: 50%;
    margin-right: 10px;
  }

  .remove-button {
    background: none;
    border: none;
    color: #f44336;
    font-size: 16px;
    cursor: pointer;
  }

  .remove-button:hover {
    color: #d32f2f;
  }
</style>
