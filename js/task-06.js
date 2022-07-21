const inputRef = document.querySelector('input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {
  const value = event.currentTarget.value.trim();
  console.log(value.trim().length);
  if (event.currentTarget.value.trim().length >= Number(inputRef.dataset.length)) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}
