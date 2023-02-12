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
    }
});
