

class IO {
  constructor() {
    //
    // Intersection observer
    // ------------------------------------------------------------- //

    if ('IntersectionObserver' in window) {

      const io = new IntersectionObserver(entries => {
        for (const entry of entries) {
          // Toggle class if intersects
          entry.target.classList.toggle('in-view', entry.isIntersecting)
          // console.log(entry.target)
          // console.log(`${entry.target.id} is in view: ${entry.isIntersecting}`)

          if(entry.isIntersecting) {
            entry.target.classList.remove('appear--bottom')
            if(entry.target.classList.contains('video')) {
              entry.target.src = entry.target.dataset.src
            }
          }
        }
      },{
        threshold: .5
      })

      if(document.querySelector('.js-io')) {
        document.querySelectorAll('.js-io').forEach(el => { io.observe(el) })
      }
    }
  }
}

export default IO
