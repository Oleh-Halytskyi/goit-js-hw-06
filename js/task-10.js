function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector('#boxes')
const controlsRef = document.querySelector('#controls')

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


controlsRef.children[0].addEventListener('input', () => {

  const valueInput = controlsRef.children[0].value

  controlsRef.children[1].addEventListener('click', (event) => {
  createBoxes(valueInput)   
  })

  controlsRef.children[2].addEventListener('click', (event) => {
    destroyBoxes()
  })

});




