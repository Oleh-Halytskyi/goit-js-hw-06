const inputRange = document.querySelector('#font-size-control');
const testRef = document.querySelector('#text')


inputRange.addEventListener('input', () => {
    let fontSize = inputRange.value
    testRef.style.fontSize = `${fontSize}px`;
})