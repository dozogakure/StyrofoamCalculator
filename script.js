const insulatedSurace = document.querySelector('.insulated-surace');
const calcBtn = document.querySelector('.calcBtn');
const scoreSpan = document.querySelector('.score-span');
const stereSpan = document.querySelector('.stere-span');
const scoreParagraph = document.querySelector('.score-paragraph')
const millingChoice = document.querySelector('#milling');
const tchicknesChoice = document.querySelector('#tchickness-choice');
const styroMilling = document.querySelector('.styro-milling')
const normalStyro = document.querySelector('.styro-normal')
const wholeCalculatorBody = document.querySelector('.wrapper')



const listOfProducts = document.querySelector('.list-of-products')
const $liItem = listOfProducts.getElementsByTagName('li')
const orderRequest = document.getElementById('orderRequest')

const makeorderBtn = document.querySelector('.makeOrder')











let ID = 0;

const testBTN = document.querySelector('.test')
const $testLi1 = document.querySelector('.testLi')
const $newAddedLi = document.querySelector('.test2')
let newTab = []





// formularz zamówień 
const formWrapper = document.querySelector('.contact-form')
const closeFormBtn = document.querySelector('.fa-window-close')
const sendFormBtn = document.querySelector('.send-form-btn')

const sumScore = () => {
    const newSurace = insulatedSurace.value;


    let quantityPackage;
    let stereValue;

    // Liczymy ilość paczek na podstawie dzialania Ilość powierzchni do ocieplenia m2 / m2 krycia w danej paczce
    if (millingChoice.selectedIndex == 1) {
        if (tchicknesChoice.value == 1) {
            quantityPackage = newSurace / 28
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 2) {
            quantityPackage = newSurace / 15
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 3) {
            quantityPackage = newSurace / 10
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 4) {
            quantityPackage = newSurace / 7.5
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 5) {
            quantityPackage = newSurace / 6
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 6) {
            quantityPackage = newSurace / 5
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 7) {
            quantityPackage = newSurace / 4
            stereValue = quantityPackage * 0.28
        } else if (tchicknesChoice.value == 8) {
            quantityPackage = newSurace / 3.5
            stereValue = quantityPackage * 0.28
        } else if (tchicknesChoice.value == 9) {
            quantityPackage = newSurace / 3
            stereValue = quantityPackage * 0.27
        } else if (tchicknesChoice.value == 10) {
            quantityPackage = newSurace / 3
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 11) {
            quantityPackage = newSurace / 2.5
            stereValue = quantityPackage * 0.28
        } else if (tchicknesChoice.value == 12) {
            quantityPackage = newSurace / 2.5
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 13) {
            quantityPackage = newSurace / 2
            stereValue = quantityPackage * 0.26
        } else if (tchicknesChoice.value == 14) {
            quantityPackage = newSurace / 2
            stereValue = quantityPackage * 0.28
        } else if (tchicknesChoice.value == 15) {
            quantityPackage = newSurace / 2
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 16) {
            quantityPackage = newSurace / 1.5
            stereValue = quantityPackage * 0.24
        } else if (tchicknesChoice.value == 17) {
            quantityPackage = newSurace / 1.5
            stereValue = quantityPackage * 0.26
        } else if (tchicknesChoice.value == 18) {
            quantityPackage = newSurace / 1.5
            stereValue = quantityPackage * 0.27
        } else if (tchicknesChoice.value == 19) {
            quantityPackage = newSurace / 1.5
            stereValue = quantityPackage * 0.29
        } else if (tchicknesChoice.value == 20) {
            quantityPackage = newSurace / 1.5
            stereValue = quantityPackage * 0.30
        }
    } else {
        if (styroMilling.value == 5) {
            quantityPackage = newSurace / 5.37
            stereValue = quantityPackage * 0.29
        } else if (styroMilling.value == 6) {
            quantityPackage = newSurace / 4.78
            stereValue = quantityPackage * 0.29
        } else if (styroMilling.value == 7) {
            quantityPackage = newSurace / 3.82
            stereValue = quantityPackage * 0.27
        } else if (styroMilling.value == 8) {
            quantityPackage = newSurace / 3.34
            stereValue = quantityPackage * 0.27
        } else if (styroMilling.value == 9) {
            quantityPackage = newSurace / 3.34
            stereValue = quantityPackage * 0.30
        } else if (styroMilling.value == 10) {
            quantityPackage = newSurace / 2.87
            stereValue = quantityPackage * 0.29
        } else if (styroMilling.value == 11) {
            quantityPackage = newSurace / 2.39
            stereValue = quantityPackage * 0.26
        } else if (styroMilling.value == 12) {
            quantityPackage = newSurace / 2.39
            stereValue = quantityPackage * 0.29
        } else if (styroMilling.value == 13) {
            quantityPackage = newSurace / 1.91
            stereValue = quantityPackage * 0.25
        } else if (styroMilling.value == 14) {
            quantityPackage = newSurace / 1.91
            stereValue = quantityPackage * 0.27
        } else if (styroMilling.value == 15) {
            quantityPackage = newSurace / 1.91
            stereValue = quantityPackage * 0.29
        } else if (styroMilling.value == 16) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.23
        } else if (styroMilling.value == 17) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.24
        } else if (styroMilling.value == 18) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.26
        } else if (styroMilling.value == 19) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.27
        } else if (styroMilling.value == 20) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.29
        }
    }

    scoreParagraph.style.visibility = "visible"; // paragraf z wynikiem się ukazuje po obliczeniu
    scoreSpan.textContent = `${Math.ceil(quantityPackage)}`;
    stereSpan.textContent = `${stereValue.toFixed(2)}`

    createNewListItem(quantityPackage);
}

// funkcja która będzie dodawać wynik do listy. Działanie na zasadzie:
// 1. Potrzebujesz 150 paczek Styropianu o grubości 20 cm, niefrezowanego
// 2. Potrzebujesz 30 paczek styropianu o grubości 8 cm, niefrezowanego
// Dzięki temu przyszły klient będzie mógł w łatwy sposób policzyć ile styropianu potrzebuje na budowę domu. 
const createNewListItem = (quantityPackage) => {
    const newLiItem = document.createElement('li')
    listOfProducts.appendChild(newLiItem)
    newLiItem.setAttribute('id', ID)
    newLiItem.classList.add('test2')

    millingChoice.selectedIndex == 0 ? newLiItem.innerHTML = `<i class="far fa-circle"></i> Musisz zamówić ${Math.ceil(quantityPackage)} paczek styropianu frezowanego o grubości ${styroMilling.value} cm <button class="deleteBtn"><i class="far fa-times-circle"></i></button>  ` : newLiItem.innerHTML = `<i class="far fa-circle"></i> Musisz zamówić ${Math.ceil(quantityPackage)} paczek styropianu niefrezowanego o grubości ${tchicknesChoice.value} cm <button class="deleteBtn"><i class="far fa-times-circle"></i></button>`

    // wyświetla przycisk do złożenia zamówienia/zapytania
    makeorderBtn.style.opacity = '1'

    // tablica która wypisuje wyniki w textarea
    newTab.push({ text: `${newLiItem.innerText}`, id: ID });
    orderRequest.innerText = newTab;
    ID++;
}

const getOrderFromTab = () => {
    let orderString = "";
    for (let i in newTab) {
        orderString += `${newTab[i].text} `;
    }

    orderRequest.innerHTML = orderString;
}

// funkcja która sprawdza jaki został wybrany rodzaj styropianu i podmienia selecta

const checkTypeStyro = () => {
    millingChoice.selectedIndex == 1 ? (styroMilling.style.display = 'none') && (normalStyro.style.display = 'flex') : (styroMilling.style.display = 'flex') && (normalStyro.style.display = 'none');

}

// funkcja za której pomocą usuwamy pozycje z listy
const checkClick = (e) => {
    if (e.target.closest('button').className === 'deleteBtn') {
        deleteListItem(e)
    } else {
        console.log('cos poszlo nie tak');
    }
}

const deleteListItem = (e) => {
    const deleteItem = e.target.closest('li');
    const id = deleteItem.id;
    newTab = newTab.filter(styropianSingleRequest => styropianSingleRequest.id != id);
    deleteItem.remove();
}

// funkcja która pokazuje formularz

const showOrderForm = () => {
        formWrapper.style.top = "5000px"
        wholeCalculatorBody.style.top = '-5000px';
        sendFormBtn.style.opacity = '1'
        getOrderFromTab();

    }
    // funkcja która zamyka formularz

const closeForm = () => {
    formWrapper.style.top = "-5000px"
    wholeCalculatorBody.style.top = '0px';
}

listOfProducts.addEventListener('click', checkClick)
millingChoice.addEventListener('change', checkTypeStyro)
calcBtn.addEventListener('click', sumScore)
closeFormBtn.addEventListener('click', closeForm)
makeorderBtn.addEventListener('click', showOrderForm)