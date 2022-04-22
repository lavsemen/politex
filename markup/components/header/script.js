document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('.header__menu-close');

    closeBtn.addEventListener('click', () => {
        menu.classList.remove('active')
    })
    openBtn.addEventListener('click', () => {
        menu.classList.add('active');
    })

    window.addEventListener('resize', () => {
        if (document.documentElement.clientWidth > 768) {
            menu.classList.remove('active')
        }
    })
})
