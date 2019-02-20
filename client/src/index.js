import Vue from 'vue'
import apolloProvider from './apollo'
import App from './components/App'
import './config/fa.config'

import "#/main.scss"

new Vue({
  apolloProvider,
  el: '#root',
  render: h => h(App)
})