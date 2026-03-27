import { createApp } from 'vue'
import App from './App.vue'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faChevronDown, faAngleDoubleUp, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(faEnvelope, faChevronDown, faAngleDoubleUp, faBars, faLinkedin, faGithubAlt)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)
  }
})

app.mount('#app')
