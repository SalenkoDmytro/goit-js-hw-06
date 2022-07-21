const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
const divSize = 30;

refs.createBtn.addEventListener('click', onCreateBtnClick);

refs.destroyBtn.addEventListener('click', destroyBoxes);

function onCreateBtnClick() {
  if (refs.input.value.trim() === '') {
    return;
  }

  const amount = Number(refs.input.value);

  createBoxes(amount);
}

function createBoxes(amount) {
  const sizes = countSize(amount);
  const markup = sizes
    .map(
      size =>
        `<div   style=" width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`
    )
    .join('');

  refs.boxes.insertAdjacentHTML('afterbegin', markup);
}

function destroyBoxes() {
  refs.input.value = '';
  refs.boxes.innerHTML = '';
}

function countSize(number) {
  const sizes = [divSize];

  for (let i = 1; i < number; i++) {
    sizes.push(sizes[i - 1] + 10);
  }
  return sizes;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
