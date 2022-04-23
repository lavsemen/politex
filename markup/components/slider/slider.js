document.addEventListener('DOMContentLoaded', () => {
   const initSlider = () => {
    return new Swiper('.slider', {
        slidesPerView: 3,
        spaceBetween: 42,
    })
   }

   initSlider();


    const tab = document.querySelectorAll('[role="tab"]')
    tab.forEach(item => {
        item.addEventListener('click', () => {
           setTimeout(() => window.dispatchEvent(new Event('resize')), 300)
        })
    })
})
