const insulatedSurace = document.querySelector('.insulated-surace');
const calcBtn = document.querySelector('.calcBtn');
const scoreSpan = document.querySelector('.score-span');
const stereSpan = document.querySelector('.stere-span');
const millingChoice = document.querySelector('#milling');
const tchicknesChoice = document.querySelector('#tchickness-choice');





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
        if (tchicknesChoice.value == 1) {
            quantityPackage = newSurace / 0
            stereValue = quantityPackage * 0
        } else if (tchicknesChoice.value == 2) {
            quantityPackage = newSurace / 0
            stereValue = quantityPackage * 0
        } else if (tchicknesChoice.value == 3) {
            quantityPackage = newSurace / 0
            stereValue = quantityPackage * 0
        } else if (tchicknesChoice.value == 4) {
            quantityPackage = newSurace / 0
            stereValue = quantityPackage * 0
        } else if (tchicknesChoice.value == 5) {
            quantityPackage = newSurace / 5.37
            stereValue = quantityPackage * 0.29
        } else if (tchicknesChoice.value == 6) {
            quantityPackage = newSurace / 4.78
            stereValue = quantityPackage * 0.29
        } else if (tchicknesChoice.value == 7) {
            quantityPackage = newSurace / 3.82
            stereValue = quantityPackage * 0.27
        } else if (tchicknesChoice.value == 8) {
            quantityPackage = newSurace / 3.34
            stereValue = quantityPackage * 0.27
        } else if (tchicknesChoice.value == 9) {
            quantityPackage = newSurace / 3.34
            stereValue = quantityPackage * 0.30
        } else if (tchicknesChoice.value == 10) {
            quantityPackage = newSurace / 2.87
            stereValue = quantityPackage * 0.29
        } else if (tchicknesChoice.value == 11) {
            quantityPackage = newSurace / 2.39
            stereValue = quantityPackage * 0.26
        } else if (tchicknesChoice.value == 12) {
            quantityPackage = newSurace / 2.39
            stereValue = quantityPackage * 0.29
        } else if (tchicknesChoice.value == 13) {
            quantityPackage = newSurace / 1.91
            stereValue = quantityPackage * 0.25
        } else if (tchicknesChoice.value == 14) {
            quantityPackage = newSurace / 1.91
            stereValue = quantityPackage * 0.27
        } else if (tchicknesChoice.value == 15) {
            quantityPackage = newSurace / 1.91
            stereValue = quantityPackage * 0.29
        } else if (tchicknesChoice.value == 16) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.23
        } else if (tchicknesChoice.value == 17) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.24
        } else if (tchicknesChoice.value == 18) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.26
        } else if (tchicknesChoice.value == 19) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.27
        } else if (tchicknesChoice.value == 20) {
            quantityPackage = newSurace / 1.43
            stereValue = quantityPackage * 0.29
        }
    }


    scoreSpan.textContent = `${Math.round(quantityPackage)}`;
    stereSpan.textContent = `${stereValue.toFixed(2)}`

}

calcBtn.addEventListener('click', sumScore)