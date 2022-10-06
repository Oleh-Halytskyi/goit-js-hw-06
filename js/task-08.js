const form = document.querySelector('.login-form')
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля форми мають бути заповнені')
  }

  const formRef = event.target
  const formData = new FormData(formRef);

  const data = {};
  formData.forEach((value, key) => {
    
     data[key] = value;
    });

  console.log(data);
  
  form.reset()
}