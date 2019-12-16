
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

    this.tlIntroSetup
        .set(this.heart, { scale: .5, transformOrigin: 'left bottom', y: '100%', opacity: 0 })
        .set(this.mountainBack, { x: "-20%", opacity: 0 })
        .set(this.mountainCover, { x: "-55%" })
        .set(this.mountainFront, { x: "-70%", opacity: 0 })
        .set(this.claim, { scale: 0, transformOrigin: 'center center', opacity: 0 })

    this.tlIntro
        .to(this.mountainBack, 1, { x: '0%', opacity: 1 }, '0')
        .to(this.mountainCover, 1, { x: '0%' }, '0')
        .to(this.mountainFront, 1, { x: '0%', opacity: 1 }, '0')
        .to(this.claim, 1, { scale: 1, opacity: 1 }, '0')
        .to(this.heart, 1, { scale: 1, y: '0%', transformOrigin: 'left bottom', opacity: 1 }, '0')


    // Logo letters animation
    this.chars = document.querySelectorAll('.char')

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
    .setTween(this.tlCharsOutro)
    .addTo(this.ctrl)
  }
}

export default IntroAnimation
