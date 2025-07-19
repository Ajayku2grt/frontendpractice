import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar, QCard, QCardSection, QBtn } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

createApp(App)
  .use(Quasar, {
    components: {
      QCard,
      QCardSection,
      QBtn
    }
  })
  .use(router)
  .mount('#app');
