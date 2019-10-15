
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

class IntroAnimation {
  constructor() {

    // Fetch all DOM elements
    this.section = document.querySelector('.intro')
    this.heart = document.querySelector('#logo__heart')
    this.mountainBack = document.querySelector('#logo__mountain--back')
    this.mountainCover = document.querySelector('#logo__mountain--cover')
    this.mountainFront = document.querySelector('#logo__mountain--front')

    // ScrollMagic controller
    this.ctrl = new ScrollMagic.Controller()

    // GSAP timeline
    this.tlIntro = new TimelineMax()

    this.tlIntro
      .set(this.heart, { opacity: 0 })
      .to(this.heart, 1, { opacity: 1 })

    // ScrollMagic scene
    this.scene = new ScrollMagic.Scene({
      triggerElement: this.section,
      triggerHook: "onLeave",
      duration: "100%"
    })
    .setTween(this.tlIntro)
    .setPin(this.section)
    .addTo(this.ctrl)

    console.log(this.ctrl)
  }
}

export default IntroAnimation
