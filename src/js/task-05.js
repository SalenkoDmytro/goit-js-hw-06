const inputEl = document.querySelector('#name-input');

const outputTitleEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => (outputTitleEl.textContent = event.currentTarget.value));
