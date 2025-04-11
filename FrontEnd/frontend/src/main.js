import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';

import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labs from 'vuetify/labs/components'



const vuetify = createVuetify({
    components: {
      ...components,
      ...labs,
    },
    directives,
  })

createApp(App).use(router).use(vuetify).mount('#app')
