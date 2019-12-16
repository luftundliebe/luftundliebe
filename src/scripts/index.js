import IntroAnimation from './modules/introAnimation.js'
import Switcher from './modules/Switcher.js'
import IntersectionObserver from './modules/IntersectionObserver.js'

//
// On DOM loaded
// ------------------------------------------------------------- //
document.addEventListener('DOMContentLoaded', (event) => {

  let intro = new IntroAnimation()
  let switcher = new Switcher()
  let io = new IntersectionObserver()
  document.querySelector('body').classList.remove('no-js')
})
