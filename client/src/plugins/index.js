/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'

// Toast
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

// Vue Mask
// import VueMask from 'v-mask'

// router
import router from '../router'

// vuex store
import store from '../store'

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(router)
  app.use(ToastPlugin)
  // app.use(VueMask)
  app.use(store)
}
