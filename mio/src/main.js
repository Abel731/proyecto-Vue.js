import { createApp } from 'vue'

import App from './App.vue'
import Comp1 from './components/Componente1.vue'
import Comp2 from './components/Componente2.vue'
import Comp3 from './components/Componente3.vue'

const app = createApp(App)
app.component('comp-1', Comp1)
app.component('comp-2', Comp2)
app.component('comp-3', Comp3)
app.mount('#app')