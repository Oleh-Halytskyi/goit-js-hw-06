const inputRef = document.querySelector('#validation-input')


    
inputRef.addEventListener('blur', (event) => {
    inputRef.classList.add('invalid')
                  
    if (Number(inputRef.dataset.length) === event.currentTarget.value.length) {
        

    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
    }

           
    })
    

