const refs = {
  inputEl: document.querySelector('#name-input'),
  outputTitleEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputChangeText);

function onInputChangeText(event) {
  return event.currentTarget.value.trim() === ''
    ? (refs.outputTitleEl.textContent = 'Anonymous')
    : (refs.outputTitleEl.textContent = event.currentTarget.value);
}
