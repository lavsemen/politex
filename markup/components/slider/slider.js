document.addEventListener('DOMContentLoaded', () => {
   const initSlider = () => {
    return new Swiper('.slider', {
        slidesPerView: 3,
        spaceBetween: 42,
        navigation: {
            prevEl: '.slider__navigation-prev',
            nextEl: '.slider__navigation-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    })
   }

   initSlider();


    const tab = document.querySelectorAll('[role="tab"]')
    tab.forEach(item => {
        item.addEventListener('click', () => {
           setTimeout(() => window.dispatchEvent(new Event('resize')), 250)
        })
    })
})
