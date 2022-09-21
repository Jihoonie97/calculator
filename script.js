const display = document.getElementById("display");
let displayValue = 0;



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

// window.onload = () => {
//     setupGrid();
// }

console.log(operate('add',1,2));
console.log(operate('subtract', 4,7));
console.log(operate('multiply', 2,3));
console.log(operate('divide', 6,3));
