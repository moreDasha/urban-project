import * as flsFunctions from "./modules/functions.js";

//проверка поддержки webp
flsFunctions.isWebp();

let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide()) {
        //scroll down
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
})

const button = document.querySelectorAll('.tabbar__button');

button.forEach(function(b) {
    b.addEventListener('click', function() {
        button.forEach(function(el) {
            el.classList.remove('activ-button')
        })
        b.classList.toggle('activ-button')
    } )
})
