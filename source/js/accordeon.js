const accButtons = document.querySelectorAll('.accordeon-item__open-button');

const accButtonClickHandler = (button) => {
  button.classList.toggle('accordeon-item__open-button--active');

  const parentContainer = button.closest('li');

  if (parentContainer) {
    const contentItem = parentContainer.querySelector('.accordeon-item__content--is-visible');
    const content = parentContainer.querySelector('.accordeon-item__content p');

    if (contentItem) {
      const isActive = contentItem.classList.toggle('accordeon-item__content--active');

      content.style.maxHeight = isActive ? `${content.scrollHeight}px` : '0';
    }
  }
};

export const handleAccButtons = () => {
  accButtons.forEach((button) => {
    button.addEventListener('click', () => accButtonClickHandler(button));
  });
};
