function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector('#boxes')
const controlsRef = document.querySelector('#controls')
const inputRef = document.querySelector('input')

function createBoxes(amount) {

  let long = 30

  for (let i = 0; i <  amount; i = i + 1) {

    const newEl = document.createElement('div')
    newEl.style.width = `${long + i*10}px`;
    newEl.style.height = `${long+ i*10}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    console.log(newEl);
    boxesRef.append(newEl)
  }
}

function destroyBoxes() {
  boxesRef.remove()
}
let value = 0;
const onInputValue = (event) => {
    value = inputRef.value;
}

inputRef.addEventListener('input', onInputValue)

// console.log(onInputValue);

controlsRef.children[1].addEventListener('click', (event) => {
  createBoxes(value)   
})

controlsRef.children[2].addEventListener('click', (event) => {
  destroyBoxes()
})


