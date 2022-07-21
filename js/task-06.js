const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {
  if (event.currentTarget.value.trim().length === Number(inputRef.dataset.length)) {
    removeClass('invalid', 'valid');
  } else {
    removeClass('valid', 'invalid');
  }
}

function removeClass(del, add) {
  inputRef.classList.remove(del);
  inputRef.classList.add(add);
}
