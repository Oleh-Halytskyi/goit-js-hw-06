const counterValue = document.querySelector('#value')
const buttonDecrement = document.querySelector('button[data-action="decrement"]')
const buttonIncrement = document.querySelector('button[data-action="increment"]')

let value = 0;

buttonDecrement.addEventListener('click', () => {
    value -= 1;
    counterValue.textContent = value;
})

buttonIncrement.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
})