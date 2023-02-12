// const calculator = document.querySelector('.calculator');
// const display = document.querySelector('.display');
// const keys = calculator.querySelectorAll('button');

// const calculate = (n1, operator, n2) => {
//   switch (operator) {
//     case 'add':
//       return n1 + n2;
//     case 'subtract':
//       return n1 - n2;
//     case 'multiply':
//       return n1 * n2;
//     case 'divide':
//       return n1 / n2;
//     default:
//       return NaN;
//   }
// };

// keys.forEach(key => {
//   key.addEventListener('click', e => {
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     let displayedNum = display.textContent;
//     const prevKeyType = calculator.dataset.previousKeyType;
//     let firstValue = calculator.dataset.firstValue;
//     let operator = calculator.dataset.operator;
//     let modValue = calculator.dataset.modValue;

//     if (!action) {
//       if (displayedNum === '0' || prevKeyType === 'operator' || prevKeyType === 'calculate') {
//         displayedNum = keyContent;
//       } else {
//         displayedNum += keyContent;
//       }
//       calculator.dataset.previousKeyType = 'number';
//     }

//     if (['add', 'subtract', 'multiply', 'divide'].includes(action)) {
//       key.classList.add('is-depressed');
//       calculator.dataset.previousKeyType = 'operator';
//       calculator.dataset.firstValue = displayedNum;
//       calculator.dataset.operator = action;
//       displayedNum = '';
//     }

//     if (action === 'decimal') {
//       if (!displayedNum.includes('.')) {
//         displayedNum += '.';
//       }
//     }

//     if (action === 'clear') {
//       displayedNum = '0';
//       calculator.dataset.previousKeyType = '';
//       calculator.dataset.firstValue = '';
//       calculator.dataset.operator = '';
//       calculator.dataset.modValue = '';
//     }

//     if (action === 'calculate') {
//       if (firstValue && operator && displayedNum) {
//         displayedNum = parseFloat(displayedNum);
//         firstValue = parseFloat(firstValue);
//         const result = calculate(firstValue, operator, displayedNum);

//         if (modValue) {
//           firstValue = calculate(parseFloat(modValue), operator, result);
//           displayedNum = firstValue;
//         } else {
//           displayedNum = result;
//         }

//         calculator.dataset.modValue = firstValue;
//       }

//       calculator.dataset.previousKeyType = 'calculate';
//     }

//     if (action === 'square-root') {
//       displayedNum = Math.sqrt(displayedNum).toFixed(10);
//     }

//     display.textContent = displayedNum;
//   });
// });
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
let operatorClicked = false;
let operator = '';
let firstValue = '';
let secondValue = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.innerHTML;
    if (value === 'C') {
      display.innerHTML = 0;
      operatorClicked = false;
      operator = '';
      firstValue = '';
      secondValue = '';
    } else if (value === '&#8730;') {
      display.innerHTML = Math.sqrt(display.innerHTML);
    } else if (value === 'x' || value === '/' || value === '-' || value === '+') {
      operatorClicked = true;
      operator = value;
      firstValue = display.innerHTML;
    } else if (value === '.') {
      if (!display.innerHTML.includes('.')) {
        display.innerHTML += value;
      }
    } else if (value === '=') {
      secondValue = display.innerHTML;
      if (operator === '+') {
        display.innerHTML = parseFloat(firstValue) + parseFloat(secondValue);
      } else if (operator === '-') {
        display.innerHTML = parseFloat(firstValue) - parseFloat(secondValue);
      } else if (operator === 'x') {
        display.innerHTML = parseFloat(firstValue) * parseFloat(secondValue);
      } else if (operator === '/') {
        display.innerHTML = parseFloat(firstValue) / parseFloat(secondValue);
      }
    } else {
      if (operatorClicked === true) {
        display.innerHTML = value;
        operatorClicked = false;
      } else {
        if (display.innerHTML === '0') {
          display.innerHTML = value;
        } else {
          display.innerHTML += value;
        }
      }
    }
  });
});

