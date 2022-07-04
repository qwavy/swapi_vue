import { createApp } from 'vue'
import App from './App.vue'
import swapiService from './services/swapiServices'

createApp(App).mount('#app')

swapiService.getPeople()
swapiService.getPerson(10)