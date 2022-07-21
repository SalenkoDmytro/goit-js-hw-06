const counterEl = document.querySelector('#counter');

const text = document.querySelector('#value');

const buttons = counterEl.querySelectorAll('button');

let counterValue = 0;

buttons[0].addEventListener('click', onDecreaseBtnClick);

buttons[1].addEventListener('click', onIncreaseBtnClick);

function onDecreaseBtnClick() {
  counterValue -= 1;
  text.textContent = counterValue;
}

function onIncreaseBtnClick() {
  counterValue += 1;
  text.textContent = counterValue;
}
