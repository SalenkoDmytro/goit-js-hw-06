const counterEl = document.querySelector('#counter');

const counterValue = document.querySelector('#value');

const buttons = counterEl.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

buttons[1].addEventListener('click', () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
