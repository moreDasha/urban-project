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
});


//генерация карточек "популярное"
const cardsBlockFirst = document.getElementById("cards-part-first");
const cardsBlockSecond = document.getElementById("cards-part-second");
const cardsBlockThird = document.getElementById("cards-part-third");
const mainContainer = document.querySelector('.main-section__container');

const imgCardItems = [
    {
        link: 'detail_page.html',
        sign: 'Город',
        img: 'img/img1.png',
        tittle: 'Как продать квартиру в ипотеке?',
        openCount: 46,
        commentCount: 22
    },
    {
        link: '#',
        sign: 'Выбираем',
        img: 'img/img2.png',
        tittle: 'Объём выдачи жилищных кредитов за&nbsp;2021 год вырос на&nbsp;30%',
        openCount: 27,
        commentCount: 20
    },
    {
        link: '#',
        sign: 'Живем',
        img: 'img/news2.2.png',
        tittle: 'Как платить налог на недвижимость',
        openCount: 11,
        commentCount: 0
    },
    {
        link: '#',
        sign: 'Выбираем',
        img: 'img/news2.1.png',
        tittle: 'Перспективные районы Казани для покупки квартиры',
        openCount: 8,
        commentCount: 42
    },
    {
        link: '#',
        sign: 'Промо',
        img: 'img/news3.1.jpeg',
        tittle: 'Что можно и что нельзя делать с подаренной квартирой',
        openCount: 51,
        commentCount: 5
    },
    {
        link: '#',
        sign: 'Выбираем',
        img: 'img/news3.2.jpeg',
        tittle: 'Покупать ли квартиру, которую еще не построили?',
        openCount: 32,
        commentCount: 1
    }
];

const cardItems = [
    {
        sign: 'Промо',
        tittle: 'Глава ЦБ рассказала, в каком случае начнет снижаться ключевая ставка',
        openCount: 16,
        commentCount: 18
    },
    {
        sign: 'Живем',
        tittle: 'Доля льготной ипотеки в общем объёме выдачи составила 25%',
        openCount: 53,
        commentCount: 22
    },
    {
        sign: 'Промо',
        tittle: 'В Казани стартовал первый Всероссийский архитектурный форум',
        openCount: 42,
        commentCount: 10
    },
    {
        sign: 'Рейтинг',
        tittle: 'Топ лучших районов для жизни в Казани',
        openCount: 21,
        commentCount: 16
    },
    {
        sign: 'Промо',
        tittle: 'Глава ЦБ рассказала, в каком случае начнет снижаться ключевая ставка',
        openCount: 39,
        commentCount: 0
    },
    {
        sign: 'Живем',
        tittle: 'Доля льготной ипотеки в общем объёме выдачи составила 25%',
        openCount: 33,
        commentCount: 14
    },
    {
        sign: 'Рейтинг',
        tittle: 'Сравниваем все новостройки Казани по срокам старта продаж',
        openCount: 70,
        commentCount: 22
    },
    {
        sign: 'Вникаем',
        tittle: 'Какие документы должны быть у надёжного застройщика',
        openCount: 44,
        commentCount: 3
    },
    {
        sign: 'Живем',
        tittle: '4 истории девушек, которые сами купили себе квартиру в Казани',
        openCount: 47,
        commentCount: 1
    },
    {
        sign: 'Живем',
        tittle: 'Глава ЦБ рассказала, в каком случае начнет снижаться ключевая ставка',
        openCount: 98,
        commentCount: 63
    },
    {
        sign: 'Рейтинг',
        tittle: 'Сравниваем все новостройки Казани по срокам старта продаж',
        openCount: 513,
        commentCount: 22
    },
    {
        sign: 'Вникаем',
        tittle: 'Какие документы должны быть у надёжного застройщика',
        openCount: 71,
        commentCount: 3
    }
];

const imgCardItemsLittle = [
    {
        sign: 'Вникаем',
        img: 'img/img3.png',
        tittle: 'Как контролируют сделки с&nbsp;недвижимостью',
        openCount: 81,
        commentCount: 4
    },
    {
        sign: 'Живем',
        img: 'img/news2.3.jpeg',
        tittle: 'Как выбрать застройщика, чтобы не остаться без квартиры',
        openCount: 55,
        commentCount: 22
    },
    {
        sign: 'Вникаем',
        img: 'img/news3.3.jpeg',
        tittle: 'Как контролируют сделки с&nbsp;недвижимостью',
        openCount: 41,
        commentCount: 19
    }
];

function sortItems(items) {
    items.sort((a, b) => a.count < b.count ? 1 : -1);
};

//карточки для первой секции
function generateCardsFirst() {
    const cardsFirst = [];
    sortItems(imgCardItems);
    sortItems(cardItems);
    sortItems(imgCardItemsLittle);
    cardsFirst.push(`
        <div class="card-item-wrapper">

            <div class="img-card-item element-hidden">
                <a class="img-card-item__link" href="${imgCardItems[0].link}">
                    <div class="img-card-item__img-wrapper">
                        <img class="img-card-item__img" src="${imgCardItems[0].img}" alt="news photo">
                    </div>
                    <div class="img-card-item__img-mask"></div>
                    <div class="card-item-sign">${imgCardItems[0].sign}</div>
                    <h2 class="img-card-item__title">
                        <a class="img-card-item__title-link" href="detail_page.html">
                        ${imgCardItems[0].tittle}
                        </a>
                    </h2>
                    <div class="img-card-item__button-box card-item-button-box">
                        <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                        </svg>
                        <p class="card-item-button-box__open-count">${imgCardItems[0].openCount}</p>
                        <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                        </svg>
                        <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                        </svg>
                        <p class="card-item-button-box__comment-count">${imgCardItems[0].commentCount}</p>
                    </div>
                </a>
            </div>
    
            <div class="card-item card-item_turquoise-color element-hidden">
                <div class="card-item-sign">${cardItems[0].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                        ${cardItems[0].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[0].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[0].commentCount}</p>
                </div>
            </div>
        </div>
    
        <div class="card-item-wrapper">
    
            <div class="card-item card-item_purple-color element-hidden">
                <div class="card-item-sign card-item-sign_white">${cardItems[1].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link card-item__title-link_white" href="#">
                    ${cardItems[1].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down card-item-button-box__button_white" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[1].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up card-item-button-box__button_white" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square card-item-button-box__button_white" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[1].commentCount}</p>
                </div>
            </div>
    
            <div class="img-card-item element-hidden">
                <a class="img-card-item__link" href="${imgCardItems[1].link}">
                <div class="img-card-item__img-wrapper">
                    <img class="img-card-item__img" src="${imgCardItems[1].img}" alt="news photo">
                </div>
                <div class="img-card-item__img-mask img-card-item__img-mask_dark"></div>
                <div class="card-item-sign card-item-sign_white">${imgCardItems[1].sign}</div>
                <h2 class="img-card-item__title">
                    <a class="img-card-item__title-link" href="#">
                    ${imgCardItems[1].tittle}
                    </a>
                </h2>
                <div class="img-card-item__button-box card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${imgCardItems[1].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${imgCardItems[1].commentCount}</p>
                </div>
                </a>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="img-card-item element-hidden">
                <div class="img-card-item__img-wrapper">
                    <img class="img-card-item__img" src="${imgCardItemsLittle[0].img}" alt="news photo">
                </div>
                <div class="img-card-item__img-mask"></div>
                <div class="card-item-sign">${imgCardItemsLittle[0].sign}</div>
                <h2 class="img-card-item__title img-card-item__title_third">
                    <a class="img-card-item__title-link" href="#">
                    ${imgCardItemsLittle[0].tittle}
                    </a>
                </h2>
                <div class="img-card-item__button-box card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${imgCardItemsLittle[0].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${imgCardItemsLittle[0].commentCount}</p>
                </div>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="card-item card-item_white-color element-hidden">
                <div class="card-item-sign">${cardItems[2].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                    ${cardItems[2].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[2].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[2].commentCount}</p>
                </div>
            </div>
            <div class="card-item card-item_blue-color element-hidden">
                <div class="card-item-sign">${cardItems[3].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                    ${cardItems[3].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[3].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[3].commentCount}</p>
                </div>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="img-card-item img-card-item_reclame element-hidden">
                <div class="img-card-item__img-wrapper img-card-item__img-wrapper_reclame">
                    <img class="img-card-item__img" src="img/img4.png" alt="news photo">
                </div>
                <div class="card-item-sign">Реклама</div>
            </div>
        </div>
        `);
        return cardsFirst
};
if (mainContainer.contains(cardsBlockFirst)) {
    cardsBlockFirst.innerHTML = generateCardsFirst();
}
//карточки для второй секции
function generateCardsSecond() {
    const cardsSecond = [];
    sortItems(imgCardItems);
    sortItems(cardItems);
    sortItems(imgCardItemsLittle);
    cardsSecond.push(`
        <div class="card-item-wrapper">

            <div class="img-card-item element-hidden">
                <a class="img-card-item__link" href="${imgCardItems[2].link}">
                    <div class="img-card-item__img-wrapper">
                        <img class="img-card-item__img" src="${imgCardItems[2].img}" alt="news photo">
                    </div>
                    <div class="img-card-item__img-mask"></div>
                    <div class="card-item-sign">${imgCardItems[2].sign}</div>
                    <h2 class="img-card-item__title">
                        <a class="img-card-item__title-link" href="detail_page.html">
                        ${imgCardItems[2].tittle}
                        </a>
                    </h2>
                    <div class="img-card-item__button-box card-item-button-box">
                        <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                        </svg>
                        <p class="card-item-button-box__open-count">${imgCardItems[2].openCount}</p>
                        <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                        </svg>
                        <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                        </svg>
                        <p class="card-item-button-box__comment-count">${imgCardItems[2].commentCount}</p>
                    </div>
                </a>
            </div>
    
            <div class="card-item card-item_turquoise-color element-hidden">
                <div class="card-item-sign">${cardItems[4].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                        ${cardItems[4].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[4].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[4].commentCount}</p>
                </div>
            </div>
        </div>
    
        <div class="card-item-wrapper">
    
            <div class="card-item card-item_purple-color element-hidden">
                <div class="card-item-sign card-item-sign_white">${cardItems[5].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link card-item__title-link_white" href="#">
                    ${cardItems[5].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down card-item-button-box__button_white" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[5].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up card-item-button-box__button_white" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square card-item-button-box__button_white" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[5].commentCount}</p>
                </div>
            </div>
    
            <div class="img-card-item element-hidden">
                <a class="img-card-item__link" href="${imgCardItems[3].link}">
                <div class="img-card-item__img-wrapper">
                    <img class="img-card-item__img" src="${imgCardItems[3].img}" alt="news photo">
                </div>
                <div class="img-card-item__img-mask img-card-item__img-mask_dark"></div>
                <div class="card-item-sign card-item-sign_white">${imgCardItems[3].sign}</div>
                <h2 class="img-card-item__title">
                    <a class="img-card-item__title-link" href="#">
                    ${imgCardItems[3].tittle}
                    </a>
                </h2>
                <div class="img-card-item__button-box card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${imgCardItems[3].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${imgCardItems[3].commentCount}</p>
                </div>
                </a>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="img-card-item element-hidden">
                <div class="img-card-item__img-wrapper">
                    <img class="img-card-item__img" src="${imgCardItemsLittle[1].img}" alt="news photo">
                </div>
                <div class="img-card-item__img-mask"></div>
                <div class="card-item-sign">${imgCardItemsLittle[1].sign}</div>
                <h2 class="img-card-item__title img-card-item__title_third">
                    <a class="img-card-item__title-link" href="#">
                    ${imgCardItemsLittle[1].tittle}
                    </a>
                </h2>
                <div class="img-card-item__button-box card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${imgCardItemsLittle[1].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${imgCardItemsLittle[1].commentCount}</p>
                </div>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="card-item card-item_white-color element-hidden">
                <div class="card-item-sign">${cardItems[6].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                    ${cardItems[6].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[6].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[6].commentCount}</p>
                </div>
            </div>
            <div class="card-item card-item_blue-color element-hidden">
                <div class="card-item-sign">${cardItems[7].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                    ${cardItems[7].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[7].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[3].commentCount}</p>
                </div>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="img-card-item img-card-item_reclame element-hidden">
                <div class="img-card-item__img-wrapper img-card-item__img-wrapper_reclame">
                    <img class="img-card-item__img" src="img/img4.png" alt="news photo">
                </div>
                <div class="card-item-sign">Реклама</div>
            </div>
        </div>
        `);
        return cardsSecond
};
if (mainContainer.contains(cardsBlockSecond)) {
    cardsBlockSecond.innerHTML = generateCardsSecond();
}
//карточки для третьей секции
function generateCardsThird() {
    const cardsThird = [];
    sortItems(imgCardItems);
    sortItems(cardItems);
    sortItems(imgCardItemsLittle);
    cardsThird.push(`
        <div class="card-item-wrapper">

            <div class="img-card-item element-hidden">
                <a class="img-card-item__link" href="${imgCardItems[4].link}">
                    <div class="img-card-item__img-wrapper">
                        <img class="img-card-item__img" src="${imgCardItems[4].img}" alt="news photo">
                    </div>
                    <div class="img-card-item__img-mask"></div>
                    <div class="card-item-sign">${imgCardItems[4].sign}</div>
                    <h2 class="img-card-item__title">
                        <a class="img-card-item__title-link" href="detail_page.html">
                        ${imgCardItems[4].tittle}
                        </a>
                    </h2>
                    <div class="img-card-item__button-box card-item-button-box">
                        <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                        </svg>
                        <p class="card-item-button-box__open-count">${imgCardItems[4].openCount}</p>
                        <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                        </svg>
                        <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                        </svg>
                        <p class="card-item-button-box__comment-count">${imgCardItems[4].commentCount}</p>
                    </div>
                </a>
            </div>
    
            <div class="card-item card-item_turquoise-color element-hidden">
                <div class="card-item-sign">${cardItems[8].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                        ${cardItems[8].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[8].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[8].commentCount}</p>
                </div>
            </div>
        </div>
    
        <div class="card-item-wrapper">
    
            <div class="card-item card-item_purple-color element-hidden">
                <div class="card-item-sign card-item-sign_white">${cardItems[9].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link card-item__title-link_white" href="#">
                    ${cardItems[9].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down card-item-button-box__button_white" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[9].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up card-item-button-box__button_white" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square card-item-button-box__button_white" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[9].commentCount}</p>
                </div>
            </div>
    
            <div class="img-card-item element-hidden">
                <a class="img-card-item__link" href="${imgCardItems[5].link}">
                <div class="img-card-item__img-wrapper">
                    <img class="img-card-item__img" src="${imgCardItems[5].img}" alt="news photo">
                </div>
                <div class="img-card-item__img-mask img-card-item__img-mask_dark"></div>
                <div class="card-item-sign card-item-sign_white">${imgCardItems[5].sign}</div>
                <h2 class="img-card-item__title">
                    <a class="img-card-item__title-link" href="#">
                    ${imgCardItems[5].tittle}
                    </a>
                </h2>
                <div class="img-card-item__button-box card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${imgCardItems[5].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${imgCardItems[5].commentCount}</p>
                </div>
                </a>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="img-card-item element-hidden">
                <div class="img-card-item__img-wrapper">
                    <img class="img-card-item__img" src="${imgCardItemsLittle[2].img}" alt="news photo">
                </div>
                <div class="img-card-item__img-mask"></div>
                <div class="card-item-sign">${imgCardItemsLittle[2].sign}</div>
                <h2 class="img-card-item__title img-card-item__title_third">
                    <a class="img-card-item__title-link" href="#">
                    ${imgCardItemsLittle[2].tittle}
                    </a>
                </h2>
                <div class="img-card-item__button-box card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${imgCardItemsLittle[2].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${imgCardItemsLittle[2].commentCount}</p>
                </div>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="card-item card-item_white-color element-hidden">
                <div class="card-item-sign">${cardItems[10].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                    ${cardItems[10].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[10].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[10].commentCount}</p>
                </div>
            </div>
            <div class="card-item card-item_blue-color element-hidden">
                <div class="card-item-sign">${cardItems[11].sign}</div>
                <h3 class="card-item__title">
                    <a class="card-item__title-link" href="#">
                    ${cardItems[11].tittle}
                    </a>
                </h3>
                <div class="card-item-button-box">
                    <svg class="card-item-button-box__button card-item-button-box__button_down" viewBox="0 0 29 30" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 11.8047L14.5 19.0547L21.75 11.8047"/>
                    </svg>
                    <p class="card-item-button-box__open-count">${cardItems[11].openCount}</p>
                    <svg class="card-item-button-box__button card-item-button-box__button_up" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.3789 19.0547L15.1289 11.8047L7.87891 19.0547"/>
                    </svg>
                    <svg class="card-item-button-box__button card-item-button-box__button_message-square" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5039 10.8789C15.5039 11.2546 15.3547 11.615 15.089 11.8806C14.8233 12.1463 14.463 12.2956 14.0872 12.2956H5.58724L2.75391 15.1289V3.79557C2.75391 3.41985 2.90316 3.05951 3.16884 2.79384C3.43451 2.52816 3.79485 2.37891 4.17057 2.37891H14.0872C14.463 2.37891 14.8233 2.52816 15.089 2.79384C15.3547 3.05951 15.5039 3.41985 15.5039 3.79557V10.8789Z"/>
                    </svg>
                    <p class="card-item-button-box__comment-count">${cardItems[11].commentCount}</p>
                </div>
            </div>
        </div>

        <div class="card-item-wrapper card-item-wrapper_third">

            <div class="img-card-item img-card-item_reclame element-hidden">
                <div class="img-card-item__img-wrapper img-card-item__img-wrapper_reclame">
                    <img class="img-card-item__img" src="img/img4.png" alt="news photo">
                </div>
                <div class="card-item-sign">Реклама</div>
            </div>
        </div>
        `);
        return cardsThird
};
if (mainContainer.contains(cardsBlockThird)) {
    cardsBlockThird.innerHTML = generateCardsThird();
}

//плавное появление секций
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
};

let options = {
    rootMargin: '120px',
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
const elemHidden = document.querySelectorAll('.element-hidden');

for (let elm of elemHidden) {
  observer.observe(elm);
};

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
if (document.body.contains(document.querySelector('.tabbar-section'))) {
    const tabbarPopular = document.getElementById('tabbar-popular');
    const buttonPopular = document.getElementById('buttonPopular');
    const buttonFresh = document.getElementById('buttonFresh');

    if (document.body.contains(tabbarPopular)) {
    buttonPopular.classList.add('activ-button');
    } else {
        buttonFresh.classList.add('activ-button');
    };
}


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
};

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
});

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
};

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
});