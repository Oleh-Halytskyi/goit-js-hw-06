const inputNameRef = document.querySelector('#name-input')
const outputNameRef = document.querySelector('#name-output')


inputNameRef.addEventListener('input', (event) => {
    
    outputNameRef.textContent = 'Anonymous'
  
    if (event.currentTarget.value !== "") {
        outputNameRef.textContent = event.currentTarget.value
    }
})


