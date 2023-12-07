const linkBtn = document.getElementById('link');
const inputArray = Array.from(document.querySelectorAll('.input')); 
const errorMsg = document.getElementById('error-msg');

linkBtn.addEventListener('click', (event) => {
  const allFieldsFilled = inputArray.every(inputField => inputField.value !== '');

  if (!allFieldsFilled) {
    event.preventDefault();
    errorMsg.classList.add('active');
  }
});

inputArray.forEach((inputField) => {
  inputField.addEventListener('input', () => {
    if (inputArray.every(inputField => inputField.value !== '')) {
      linkBtn.href = 'index.html';
      errorMsg.classList.remove('active');
    } else {
      linkBtn.removeAttribute('href');
      errorMsg.classList.add('active');
    }
  });
});

