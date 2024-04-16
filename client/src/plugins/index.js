/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'

// Toast
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(router)
  app.use(ToastPlugin)
}
