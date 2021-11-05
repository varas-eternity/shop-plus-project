const filterSelect = document.querySelector('#page-title__filter');
const contentItem = document.querySelectorAll('.content-item');

let filterPrice = document.querySelectorAll('.item-price');
let filterName = document.querySelectorAll('.item-title');

const PRICE_UP = 'sort by price up';
const PRICE_DOWN = 'sort by price down';
const NAME = 'sort by name';
const DATE = 'sort by date';
const POPULARITY = 'sort by popularity';

let currentTypeFilter = null;

function priceFilterUp() {
    if (filterSelect.classList.contains('filter-active') === false) {
        console.log(filterSelect[filterSelect.selectedIndex].text);

        let booferPrice;
        let booferHTML;
        let priceArray = [];

        for (let i = 0; i < filterPrice.length; i++) {
            filterPrice = document.querySelectorAll('.item-price');
            priceArray[i] = filterPrice[i].innerText.replace('$', '').replace(' ', '.');
        }

        for (let i = 0; i < priceArray.length - 1; i++) {
            for (let j = i + 1; j < priceArray.length; j++) {
                if (+priceArray[i] > +priceArray[j]) {
                    booferPrice = priceArray[i];
                    priceArray[i] = priceArray[j];
                    priceArray[j] = booferPrice;

                    booferHTML = contentItem[i].innerHTML;
                    contentItem[i].innerHTML = contentItem[j].innerHTML;
                    contentItem[j].innerHTML = booferHTML;
                }
            }
        }

        currentTypeFilter = PRICE_UP;
    }
}

function priceFilterDown() {
    if (filterSelect.classList.contains('filter-active') === false) {
        console.log(filterSelect[filterSelect.selectedIndex].text);

        let booferPrice;
        let booferHTML;
        let priceArray = [];

        for (let i = 0; i < filterPrice.length; i++) {
            filterPrice = document.querySelectorAll('.item-price');
            priceArray[i] = filterPrice[i].innerText.replace('$', '').replace(' ', '.');
        }

        for (let i = 0; i < priceArray.length - 1; i++) {
            for (let j = i + 1; j < priceArray.length; j++) {
                if (+priceArray[i] < +priceArray[j]) {
                    booferPrice = priceArray[i];
                    priceArray[i] = priceArray[j];
                    priceArray[j] = booferPrice;

                    booferHTML = contentItem[i].innerHTML;
                    contentItem[i].innerHTML = contentItem[j].innerHTML;
                    contentItem[j].innerHTML = booferHTML;
                }
            }
        }

        currentTypeFilter = PRICE_DOWN;
    }
}

function nameFilter() {
    if (filterSelect.classList.contains('filter-active') === false) {
        console.log(filterSelect[filterSelect.selectedIndex].text);

        let booferName;
        let booferHTML;
        let nameArray = [];

        for (let i = 0; i < filterName.length; i++) {
            filterName = document.querySelectorAll('.item-title');
            nameArray[i] = filterName[i].textContent.replace(/#\d\s/, '');
        }

        for (let i = 0; i < nameArray.length - 1; i++) {
            for (let j = i + 1; j < nameArray.length; j++) {
                if (nameArray[i] > nameArray[j]) {
                    booferName = nameArray[i];
                    nameArray[i] = nameArray[j];
                    nameArray[j] = booferName;

                    booferHTML = contentItem[i].innerHTML;
                    contentItem[i].innerHTML = contentItem[j].innerHTML;
                    contentItem[j].innerHTML = booferHTML;
                }
            }
        }

        currentTypeFilter = NAME;
    }
}

function dateFilter() {
    if (filterSelect.classList.contains('filter-active') === false) {
        //console.log(filterSelect[filterSelect.selectedIndex].text);
        // ! not making
        currentTypeFilter = DATE;
    }
}

function popularityFilter() {
    if (filterSelect.classList.contains('filter-active') === false) {
        //console.log(filterSelect[filterSelect.selectedIndex].text);
        // ! not making
        currentTypeFilter = POPULARITY;
    }
}

function monitoringTypeFilter() {
    if (filterSelect[filterSelect.selectedIndex].text === currentTypeFilter) {
        filterSelect.classList.add('filter-active');
    } else if (filterSelect.classList.contains('filter-active') === true) {
        filterSelect.classList.remove('filter-active');
    }
}

function typeFilter() {
    monitoringTypeFilter();

    if (filterSelect.selectedIndex === 0) priceFilterUp();
    if (filterSelect.selectedIndex === 1) priceFilterDown();
    if (filterSelect.selectedIndex === 2) nameFilter();
    if (filterSelect.selectedIndex === 3) dateFilter();
    if (filterSelect.selectedIndex === 4) popularityFilter();
}

export const filter = () => {
    filterSelect.addEventListener('click', typeFilter);
}