
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

class IntroAnimation {
  constructor() {

    // Fetch all DOM elements
    this.section = document.querySelector('.intro')
    this.logo = document.querySelector('#js-logo')
    this.heart = document.querySelector('#logo__heart')
    this.mountainBack = document.querySelector('#logo__mountain--back')
    this.mountainCover = document.querySelector('#logo__mountain--cover')
    this.mountainFront = document.querySelector('#logo__mountain--front')

    // ScrollMagic controller
    this.ctrl = new ScrollMagic.Controller()

    // GSAP timeline
    this.tlLogo = new TimelineMax()

    this.tlLogo
      .set(this.logo, { x: "20%", y:"-78%", scale: 1.5 })
      .set(this.heart, { opacity: 0 })
      .set(this.mountainBack, { fill: '#50524F', stroke: "transparent" })
      .set(this.mountainCover, { opacity: 0 })
      .set(this.mountainFront, {
        fill: '#D7BCAE',
        stroke: "transparent",
        x: "40%",
        scale: 2,
        transformOrigin: "center bottom" })
      .to(this.logo, 1, { x: "0%", y: "0%", scale: 1 }, "first")
      .to(this.mountainFront, 1, { x: "0%", scale: 1 }, "first")
      .to(this.mountainBack, 1, { fill: 'transparent', stroke: "#C2D6C8" }, "first")
      .to(this.mountainCover, 1, { opacity: 1 }, "first")
      .to(this.mountainFront, 1, { fill: 'transparent', stroke: "#89A491" }, "first")
      .to(this.heart, 1, { opacity: 1 }, "second")

    // ScrollMagic scene
    this.scene = new ScrollMagic.Scene({
      triggerElement: document.querySelector('body'),
      triggerHook: 0,
      duration: "80%"
    })
    .setTween(this.tlLogo)
    .addTo(this.ctrl)
  }
}

export default IntroAnimation
