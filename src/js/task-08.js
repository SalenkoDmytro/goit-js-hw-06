const formRef = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  for (const input of inputs) {
    if (input.value === '') {
      return alert(`Эй, ты же ещё не заполнил ${input.name}!`);
    }
  }

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  console.log(formData);
  formRef.reset();

  // const formData = new FormData(event.currentTarget);
  // const obj = {};

  // formData.forEach((value, name) => {
  //   obj[name] = value;
  // });
  // console.log(obj);
}
