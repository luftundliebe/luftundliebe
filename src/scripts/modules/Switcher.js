

class Switcher {

  constructor() {

    this.switches = document.querySelectorAll('.switch__btn')
    this.contents = document.querySelectorAll('.img-overlay__content')
    this.maps = document.querySelectorAll('.map')


    this.switches.forEach((el) => {
      el.addEventListener('click', (e) => { this.switch(e) })
    })
  }

  switch(e) {

    // Go through all content elements
    this.contents.forEach((el) => {

      // If clicked element type matches the current element type,
      // set visible class otherwise remove visible class
      if (e.target.closest('.switch__btn').dataset.type === el.dataset.type) {
        el.classList.add('img-overlay__content--is-visible')
      }
      else {
        el.classList.remove('img-overlay__content--is-visible')
      }
    })

    // Go through all map elements
    this.maps.forEach((el) => {

      // If clicked element type matches the current element type,
      // set visible class otherwise remove visible class
      if (e.target.closest('.switch__btn').dataset.type === el.dataset.type) {
        el.classList.add('map--is-visible')
      }
      else {
        el.classList.remove('map--is-visible')
      }
    })
  }
}

export default Switcher
