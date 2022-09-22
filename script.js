const display = document.getElementById("display");
const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const acBtn= document.getElementById('ac-btn');
const addBtn= document.getElementById('add-btn');
const subBtn= document.getElementById('sub-btn');
const multiBtn= document.getElementById('multi-btn');
const divBtn= document.getElementById('div-btn');
const equalBtn= document.getElementById('equal-btn');
const backBtn= document.getElementById('back-btn');


let displayValue = '';
let a;
let op = '';

zero.onclick = () => setDisplayValue(0);
one.onclick = () => setDisplayValue(1);
two.onclick = () => setDisplayValue(2);
three.onclick = () => setDisplayValue(3);
four.onclick = () => setDisplayValue(4);
five.onclick = () => setDisplayValue(5);
six.onclick = () => setDisplayValue(6);
seven.onclick = () => setDisplayValue(7);
eight.onclick = () => setDisplayValue(8);
nine.onclick = () => setDisplayValue(9);
acBtn.onclick = () => clearDisplay();
addBtn.onclick = () => storeValue('add');
subBtn.onclick = () => storeValue('subtract');
multiBtn.onclick = () => storeValue('multiply');
divBtn.onclick = () => storeValue('divide');
equalBtn.onclick = () => equals(op);
backBtn.onclick = () => backspace();

const backspace = function() {
    displayValue.toString();
    displayValue = displayValue.slice(0,-1);
    display.innerHTML = displayValue;
}

const storeValue = function(operation) {
    let c = '';

    if (op !== '') {
        console.log(displayValue);
        console.log(a);
        console.log(op);

        // operate(op, a, displayValue);
        // console.log(operate(op, a, parseInt(displayValue)));
        displayValue = operate(op, a, parseInt(displayValue));
        console.log(displayValue);
        c = displayValue;
    }

    a = parseInt(displayValue);
    op = operation;
    displayValue = '';
    display.innerHTML = c;
}

const equals = function(op) {
    // without an operation
    if (op === '') {
        return;
    }

    let b = parseInt(displayValue);
    displayValue = '';
    display.innerHTML = displayValue;
    setDisplayValue(operate(op,a,b));
    
}

const clearDisplay = function() {
    displayValue = '';
    display.innerHTML = displayValue;
    op = '';
    a = '';
}

const setDisplayValue = function(n) {
    displayValue = displayValue.toString() + n.toString();
    console.log("displayValue set to " + displayValue);
    display.innerHTML = displayValue;
}

const operate = function(op, a, b) {
    switch(op) {
        case('add'):
            return add(a,b);
        case('subtract'):
            return subtract(a,b);
        case('divide'):
            return divide(a,b);
        case('multiply'):
            return multiply(a,b);
    }
}

const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const divide = function(a,b) {
    return a/b; 
};

const multiply = function(a,b) {
    return a*b;
};