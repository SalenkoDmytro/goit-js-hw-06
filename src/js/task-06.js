const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {
  if (Number(event.currentTarget.value) === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  }
  inputRef.classList.add('invalid');
}
