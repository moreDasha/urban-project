const unwrap = (element) => {
    element.replaceWith(...element.children);
};
const cardWrap = document.querySelectorAll('.card-item-wrapper');

if (document.documentElement.clientWidth < 750) {
    cardWrap.forEach((e) => {
        unwrap(e);
    })
}

window.addEventListener('resize',function(){
    let windoWith = document.documentElement.clientWidth;
    if (windoWith < 750) {
        cardWrap.forEach((e) => {
            unwrap(e);
        })
    } else {
        location.reload();
    }
});



let lastScroll = 0;
const header = document.querySelector('.header');

const scrollPosition = () => document.documentElement.scrollTop;
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
