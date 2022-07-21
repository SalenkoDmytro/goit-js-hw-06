const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
