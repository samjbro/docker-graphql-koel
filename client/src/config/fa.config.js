import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faSearch
)

Vue.component('fa-icon', FontAwesomeIcon)