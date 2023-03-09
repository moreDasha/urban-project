import * as flsFunctions from "./modules/functions.js";

//проверка поддержки webp
flsFunctions.isWebp();

//выплывающий хэдр
let lastScroll = 0;
const header = document.querySelector('.header');

const getScrollPosition = () => window.scrollY;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(getScrollPosition() > lastScroll && !containHide()) {
        //scroll down
        header.classList.add('hide');
    }
    else if(getScrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('hide');
    }
    lastScroll = getScrollPosition();
})

//таб бар
const button = document.querySelectorAll('.tabbar__button');

button.forEach(function(b) {
    b.addEventListener('click', function() {
        button.forEach(function(el) {
            el.classList.remove('activ-button')
        })
        b.classList.toggle('activ-button')
    } )
})

//запрет скролла при открытом бургер-меню
let scrollPosition = 0;
const stopScroll =() => {
        scrollPosition = window.scrollY;
        document.body.style.cssText = `
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        `;
    };
const startScroll = () => {
    document.body.style.cssText = '';
    window.scroll({top: scrollPosition})
}

//бургер-меню
const burgerButton = document.querySelector('.burger-menu-button');
const burgerMenu = document.querySelector('.bottom-menu-section');
burgerButton.addEventListener('click', function() {
    burgerMenu.classList.toggle('burger-menu-open');
    burgerButton.classList.toggle('link-active');
    if (burgerMenu.classList.contains('burger-menu-open')) {
        stopScroll();
    } else {
        startScroll();
    }
})


//=> window.pageYOffset || document.documentElement.scrollTop;