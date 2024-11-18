const accButtons = document.querySelectorAll('.accordeon-item__open-button');
const tabButtons = document.querySelectorAll('.faq-tab__button');
const accContentContainers = document.querySelectorAll('.accordeon-item__content');


const accButtonClickHandler = (button) => {
  const isActive = button.classList.toggle('accordeon-item__open-button--active');

  const parentContainer = button.closest('li');

  if (parentContainer) {
    const contentItem = parentContainer.querySelector('.accordeon-item__content--is-visible');

    if (contentItem) {
      const content = contentItem.querySelector('p');
      contentItem.classList.toggle('accordeon-item__content--active', isActive);

      content.style.maxHeight = isActive ? `${content.scrollHeight}px` : '0';
    }
  }
};

const handleAccButtonClick = () => {
  accButtons.forEach((button) => {
    button.addEventListener('click', () => accButtonClickHandler(button));
  });
};

const tabButtonClickHandler = (tab) => {
  const targetId = tab.id;

  accContentContainers.forEach((container) => {
    const isVisible = container.id === targetId;
    container.classList.toggle('accordeon-item__content--is-visible', isVisible);

    const paragraph = container.querySelector('p');

    if (!isVisible) {
      paragraph.removeAttribute('style');
    } else {
      const button = container.closest('li').querySelector('.accordeon-item__open-button--active');
      const isButtonActive = button !== null;

      container.classList.toggle('accordeon-item__content--active', isButtonActive);

      if (isButtonActive) {
        paragraph.style.maxHeight = `${paragraph.scrollHeight}px`;
      }
    }
  });
};

const handleTabButtonClick = () => {
  tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => tabButtonClickHandler(tab));
  });
};

export const updateFaqControls = () => {
  handleAccButtonClick();
  handleTabButtonClick();
};
