import { createApp } from 'vue'

import App from './App.vue'
import ProductosAdrian from './componentes/ProductosAdrian.vue'

const app = createApp(App)
app.component('producto-item', ProductosAdrian)
app.mount('#app')