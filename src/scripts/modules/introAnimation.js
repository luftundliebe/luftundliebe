
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

class IntroAnimation {
  constructor() {

    // Logo letters animation
    this.chars = document.querySelectorAll('.char')
    this.logo = document.querySelector('#js-logo')
    this.intro = document.querySelector('#js-intro')

    this.tlCharsIntro = new TimelineMax()
    this.tlCharsIntro.staggerTo(this.chars, 1, { opacity: 1, scale: 1, ease: Power1.easeOut }, .1)

    this.tlCharsOutro = new TimelineMax()
    this.tlCharsOutro
        // .staggerTo(this.chars, 1, { opacity: 0 }, .1, '0')
        // .staggerTo(this.chars, 2, { y: '-200%', ease: Power1.easeOut }, .1, '0')
        .to(this.logo, 10, { y: '80vh', color: '#343633'}, '0')

    // Mountains animation
    this.mountainLeft = document.querySelector('#js-mountain--left')
    this.mountainRight = document.querySelector('#js-mountain--right')

    this.tlMountains = new TimelineMax()
    this.tlMountains
        .to(this.mountainLeft, 3, { x: '-300vw', bottom: '-100vh', opacity: 0 }, '0')
        .to(this.mountainRight, 3, { x: '150vw', scale: 2, bottom: '-100vh', transformOrigin:'center bottom', opacity: 0 }, '0')

    // ScrollMagic controller
    this.ctrl = new ScrollMagic.Controller()

    // Logo scene
    this.scene = new ScrollMagic.Scene({
      triggerElement: document.querySelector('#js-intro'),
      triggerHook: 0,
      duration: "200%"
    })
    .setTween(this.tlCharsOutro)
    .addTo(this.ctrl)

    // Mountain scene
    this.sceneMountains = new ScrollMagic.Scene({
      triggerElement: document.querySelector('#js-intro'),
      triggerHook: 0,
      duration: "50%"
    })
    .setTween(this.tlMountains)
    .setPin(this.intro)
    .addTo(this.ctrl)

    // Fetch all DOM elements
    // this.section = document.querySelector('.intro')
    // this.logo = document.querySelector('#js-logo')
    // this.heart = document.querySelector('#logo__heart')
    // this.mountainBack = document.querySelector('#logo__mountain--back')
    // this.mountainCover = document.querySelector('#logo__mountain--cover')
    // this.mountainFront = document.querySelector('#logo__mountain--front')
    //
    //
    //
    // // GSAP timeline
    // this.tlLogo = new TimelineMax()
    //
    // this.tlLogo
    //   .set(this.logo, { x: "20%", y:"-78%", scale: 1.5 })
    //   .set(this.heart, { opacity: 0 })
    //   .set(this.mountainBack, { fill: '#50524F', stroke: "transparent" })
    //   .set(this.mountainCover, { opacity: 0 })
    //   .set(this.mountainFront, {
    //     fill: '#D7BCAE',
    //     stroke: "transparent",
    //     x: "40%",
    //     scale: 2,
    //     transformOrigin: "center bottom" })
    //   .to(this.logo, 1, { x: "0%", y: "0%", scale: 1 }, "first")
    //   .to(this.mountainFront, 1, { x: "0%", scale: 1 }, "first")
    //   .to(this.mountainBack, 1, { fill: 'transparent', stroke: "#C2D6C8" }, "first")
    //   .to(this.mountainCover, 1, { opacity: 1 }, "first")
    //   .to(this.mountainFront, 1, { fill: 'transparent', stroke: "#89A491" }, "first")
    //   .to(this.heart, 1, { opacity: 1 }, "second")
    //
  }
}

export default IntroAnimation
