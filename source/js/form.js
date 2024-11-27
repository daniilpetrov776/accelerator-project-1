import { Messages } from './const';

const form = document.querySelector('.apply__form-field');
const formInputs = form.querySelectorAll('.apply__input');

const handleEmptyForm = (input) => {
  const errorElement = input.nextElementSibling;
  const errorMessage = input.value.length === 0 ? Messages.empty : Messages[input.name];

  if (errorElement) {
    errorElement.textContent = errorMessage;
  }
};

const formSumbitHandler = (evt) => {
  evt.preventDefault();
  formInputs.forEach((input) => {
    input.classList.remove('apply__input--invalid');
    handleEmptyForm(input);
  });

  let isFormValid = true;

  formInputs.forEach((input) => {
    if (!input.validity.valid) {
      input.classList.add('apply__input--invalid');
      isFormValid = false;
    }
  });
  if (isFormValid) {
    form.submit();
  }
};

const inputChangeHandler = (evt) => {
  const input = evt.target;
  if (input.value.length === 0) {
    input.classList.remove('apply__input--invalid');
  }
};

const handleInputsChange = () => {
  formInputs.forEach((input) => {
    input.addEventListener('input', inputChangeHandler);
    input.addEventListener('focus', inputChangeHandler);
  });
};

export const handleFormValidation = () => {
  form.addEventListener('submit', formSumbitHandler);
  handleInputsChange();
};
