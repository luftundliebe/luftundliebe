
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';

class IntroAnimation {
  constructor() {

    this.mountainLeft = document.querySelector('#js-mountain--left')
    this.mountainRight = document.querySelector('#js-mountain--right')

    this.logo = document.querySelector('#js-logo')
    this.heart = document.querySelector('#herz')
    this.mountainBack = document.querySelector('#berg--hinten')
    this.mountainCover = document.querySelector('#berg--abdeckung')
    this.mountainFront = document.querySelector('#berg--vorne')
    this.claim = document.querySelector('#claim')



    this.tlIntroSetup = new TimelineMax()
    this.tlIntro = new TimelineMax()

    // this.tlIntro
    //   .to(this.mountainBack, 1, { scale: 1, y: 0 }, '0')
    //   .to(this.mountainFront, 1, { transform: 'translateY(0) scale(1)'}, '0')

    this.tlIntroSetup
        .set(this.heart, { y: '100%', opacity: 0 })
        .set(this.mountainBack, { x: "-20%", opacity: 0 })
        .set(this.mountainCover, { x: "-55%" })
        .set(this.mountainFront, { x: "-70%", opacity: 0 })
        .set(this.claim, { y: "100%", opacity: 0 })

    this.tlIntro
        .to(this.mountainBack, 1, { x: '0%', opacity: 1 }, '0')
        .to(this.mountainCover, 1, { x: '0%' }, '0')
        .to(this.mountainFront, 1, { x: '0%', opacity: 1 }, '0')
        .to(this.claim, 1, { y: '0%', opacity: 1 }, '1')
        .to(this.heart, 1, { y: '0%', opacity: 1 }, '1')


    // Logo letters animation
    this.chars = document.querySelectorAll('.char')
    // this.logo = document.querySelector('#js-logo')
    // this.intro = document.querySelector('#js-intro')
    //
    this.tlCharsIntro = new TimelineMax()
    this.tlCharsIntro
        .fromTo(this.mountainLeft, .3, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut }, "0")
        .fromTo(this.mountainRight, .3, { opacity: 0 }, { opacity: 1, ease: Power1.easeOut }, "0")
        .fromTo(this.mountainLeft, 1, { x: "-60%" }, { x: '-50%', ease: Power1.easeOut }, "0")
        .fromTo(this.mountainRight, 1, { x: "-40%" }, { x: '-50%', ease: Power1.easeOut }, "0")
        .staggerTo(this.chars, 1, { opacity: 1, scale: 1, ease: Power1.easeOut }, .1, '1')

    this.tlCharsOutro = new TimelineMax()
    this.tlCharsOutro
        .to(this.mountainLeft,  1, { x: '-120%', opacity: 0, ease: Power1.easeOut }, "0")
        .to(this.mountainRight, 1, { x: '0%', opacity: 0, ease: Power1.easeOut }, "0")
        .staggerTo(this.chars, 1, { opacity: 0 }, .1, '0')
        .staggerTo(this.chars, 2, { y: '-400%', ease: Power1.easeOut }, .1, '0')
        // .to(this.logo, 10, { y: '80vh', color: '#343633'}, '0')

    // // Mountains animation
    // this.mountainLeft = document.querySelector('#js-mountain--left')
    // this.mountainRight = document.querySelector('#js-mountain--right')
    //
    // this.tlMountains = new TimelineMax()
    // this.tlMountains
    //     .to(this.mountainLeft, 3, { x: '-300vw', bottom: '-100vh', opacity: 0 }, '0')
    //     .to(this.mountainRight, 3, { x: '150vw', scale: 2, bottom: '-100vh', transformOrigin:'center bottom', opacity: 0 }, '0')

    // ScrollMagic controller
    this.ctrl = new ScrollMagic.Controller()

    this.IntroScene = new ScrollMagic.Scene({
      triggerElement: document.querySelector('#js-intro'),
      triggerHook: 0,
      duration: '90%'
    })
    .setTween(this.tlIntro)
    .addTo(this.ctrl)

    // Logo scene
    this.scene = new ScrollMagic.Scene({
      triggerElement: document.querySelector('#js-intro'),
      triggerHook: 0,
      duration: "50%"
    })
    // .setPin(document.querySelector('#js-logo-claim'))
    .setTween(this.tlCharsOutro)
    .addTo(this.ctrl)
    //
    // // Mountain scene
    // this.sceneMountains = new ScrollMagic.Scene({
    //   triggerElement: document.querySelector('#js-intro'),
    //   triggerHook: 0,
    //   duration: "50%"
    // })
    // .setTween(this.tlMountains)
    // .setPin(this.intro)
    // .addTo(this.ctrl)

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
