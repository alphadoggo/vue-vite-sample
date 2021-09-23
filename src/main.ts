import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import InputText from 'primevue/inputtext'

import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/fluent-light/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App)
app.use(PrimeVue)
app.component('Calendar', Calendar)
app.component('Button', Button)
app.component('InputText', InputText)

app.mount('#app')
