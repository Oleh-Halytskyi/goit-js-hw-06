function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes')
const controlsRef = document.querySelector('#controls')

function onInputValue (event) {
  const amount = event.currentTarget.value;
  return amount
}


controlsRef.children[0].addEventListener('input', onInputValue);


// controlsRef.children[1].addEventListener('click', createBoxes)
