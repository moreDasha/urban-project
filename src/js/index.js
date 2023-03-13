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

//кнопка вверх
const buttonUp = document.getElementById('button-up');
let pageHeight = document.documentElement.clientHeight;

buttonUp.addEventListener("click", function() {
    window.scrollTo({
        top: 0, 
        left: pageXOffset, 
        behavior: 'smooth',
    });
});

window.addEventListener("scroll", function() {
    if (window.pageYOffset > pageHeight) {
        buttonUp.style.opacity = '1'
        } else { 
            buttonUp.style.opacity = '0' }
    });

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

//аккордион
const accordionButton = document.querySelectorAll('.footer-nav-menu__title-button');
const accordionContent = document.querySelectorAll('.footer-nav-menu');
for (let currentAccordionButton of accordionButton) {
    currentAccordionButton.addEventListener("click", function() {
        accordionContent.forEach((el) => {
            if (el.classList.contains(currentAccordionButton.id)) {
                el.classList.toggle("footer-nav-menu-open");
            }
        })
    })
}

//сео
const seoButton = document.querySelector('.seo-text-part__button');
const seoText = document.querySelector('.seo-text-part__text-wrap');
seoButton.addEventListener("click", function() {
    seoText.classList.toggle("seo-text-open");
    if (seoText.classList.contains("seo-text-open")) {
        seoButton.textContent = 'Скрыть';
    } else {
        seoButton.textContent = 'Показать полностью';
    }
})


//=> window.pageYOffset || document.documentElement.scrollTop;