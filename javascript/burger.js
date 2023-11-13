const burger = document.querySelector('.mobile-btn')
const nav = document.querySelector('.nav')
const backdrop = document.querySelector('.backdrop')

burger.addEventListener('click', () => {
    burger.classList.toggle('show-mobile-btn')
    nav.classList.toggle('show-nav')
    backdrop.classList.toggle('show-backdrop')
})

