function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const onBtnChangeColor = document.querySelector('.change-color')
const valueColor = document.querySelector('.color')


onBtnChangeColor.addEventListener('click', () => {
  let colorRandom = getRandomHexColor()

  body.style.backgroundColor = colorRandom
  valueColor.textContent = colorRandom
})

