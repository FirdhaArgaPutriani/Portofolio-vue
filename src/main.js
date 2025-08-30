import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from '@iconify/vue'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Countup from 'vue-countup-v3'

createApp(App).component('Icon',Icon).component('Countup',Countup).mount('#app')

Aos.init({ duration:1000 });