const formRef = document.querySelector('.login-form');
const inputs = document.querySelectorAll('input');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === '' || password === '') {
    return alert(`Эй, ты же ещё не заполнил!!!`);
  }

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
