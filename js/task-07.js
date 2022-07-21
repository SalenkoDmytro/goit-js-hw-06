const refs = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.input.addEventListener('change', onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = event.currentTarget.value + 'px';
}
