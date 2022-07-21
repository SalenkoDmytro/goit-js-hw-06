const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
};

refs.button.addEventListener('click', onButtonClick);

function onButtonClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.text.textContent = refs.body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
