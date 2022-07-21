const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
