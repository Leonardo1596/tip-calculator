const bill = document.querySelector('#input-bill');
let billValue;
const buttons = document.querySelectorAll('.btn');
let percentageButtons;
const custom = document.querySelector('#custom');
const numberPeople = document.querySelector('#input-number-people');
let numberPeopleValue;
const tipAmount = document.querySelector('#value-tip-amount')
const total = document.querySelector('#value-total');
const btnReset = document.querySelector('#btn-reset');


let tipAmountResult;
let valueTotalResult;

var calcPercentage;

let flagButtonClicked = false;






function setBill() {
    const bill1 = document.querySelector('#input-bill');
    billValue = parseFloat(bill1.value);

    calc();
    showResults();
}


function setNumberPeople() {
    const numberPeople1 = document.querySelector('#input-number-people');
    numberPeopleValue = parseFloat(numberPeople1.value);

    calc();
    showResults();
}


function validBill() {
    billValue = parseFloat(bill.value);

    let flagValid = true;

    if (!bill.value) {
        // console.log('está vazio');
        flagValid = false;
        return;
    }

    return flagValid;
}


function validNumberPeople() {
    numberPeopleValue = parseFloat(numberPeople.value);

    let flagValid = true;

    if (!numberPeople.value) {
        // console.log('está vazio');
        flagValid = false;
        return;
    }


    return flagValid;
}


buttons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});


function handleClick(event) {
    buttons.forEach(btn => {
        btn.classList.remove('active');

        if (event.target.innerHTML === btn.innerHTML) {
            btn.classList.add('active');
        }

        // Save button percentage on variable percentage
        percentageButtons = event.target.innerHTML.replace('%', '');
        // console.log(percentageButtons);
    })

    flagButtonClicked = true;

    calc();
    showResults();
}


function setCustom() {
    flagButtonClicked = true;

    percentageButtons = '';
    percentageButtons = custom.value;


    // console.log(percentageButtons);

    calc();
    showResults();
}


function calc() {
    calcPercentage = (billValue / 100) * percentageButtons;
    tipAmountResult = calcPercentage / numberPeopleValue;
    valueTotalResult = (billValue + calcPercentage) / numberPeopleValue;
}


function displayTipAmount() {
    document.querySelector('#value-tip-amount').innerHTML = '$' + tipAmountResult.toFixed(2);
}


function displayValueTotalResult() {
    document.querySelector('#value-total').innerHTML = '$' + valueTotalResult.toFixed(2);
}


function showResults() {

    if (validBill() && validNumberPeople() && flagButtonClicked === true) {
        console.log('verdadeiro');
        displayTipAmount();
        displayValueTotalResult();
        changeStyleReset();
        showErrorNumberPeople()
        console.log(percentageButtons);
        return;
    } else {
        console.log('falso');
    }


}


function showErrorNumberPeople() {
    if (numberPeople.value === 0) {
        document.querySelector('#erro-number-people').style.display = "block";
    }
}


function reset() {
    document.querySelector('#value-tip-amount').innerHTML = '$0.00';
    document.querySelector('#value-total').innerHTML = '$0.00';

    document.querySelector('#input-bill').value = '';
    document.querySelector('#input-number-people').value = '';
    document.querySelector('#custom').value = '';
    percentageButtons = '';    

    btnReset.style.backgroundColor = 'hsl(185, 38%, 32%)';
    btnReset.style.color = 'hsl(183, 90%, 20%)';
}


function changeStyleReset() {
    btnReset.style.backgroundColor = 'hsl(172, 67%, 45%)';
    
}