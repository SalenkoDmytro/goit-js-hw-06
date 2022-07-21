const refs = {
  inputEl: document.querySelector('#name-input'),
  outputTitleEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChangeText);

function onInputChangeText(event) {
  refs.outputTitleEl.textContent = event.currentTarget.value;
}
