import { TweenLite, TimelineLite } from "gsap"

class IntroAnimation {
  constructor() {

    this.tlIntro = new TimelineLite();

    this.logoHeart = document.querySelector('#logo__heart')
    this.logoMountainBack = document.querySelector('#logo__mountain--back')
    this.logoMountainCover = document.querySelector('#logo__mountain--cover')
    this.logoMountainFront = document.querySelector('#logo__mountain--front')

    console.log(this.logoMountainBack)
  }
}

export default IntroAnimation
