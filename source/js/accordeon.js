import { ACC_BUTTON_HEIGHT, ACC_BUTTON_HEIGHT_OFFSET } from './const';

const tabButtons = document.querySelectorAll('.faq-tab__button');
const accordionContent = document.querySelectorAll('.accordeon-item__content');
const accordionButtons = document.querySelectorAll('.accordeon-item__open-button');

const state = {
  activeTab: 'center',
  activeAccButtons: {
    'center': ['1'],
    'subscription': [],
    'services': [],
    'rules': [],
  }
};

const translateCenteredButton = (container, button) => {
  const height = container.offsetHeight;
  const centerHeight = height / 2;
  const translateY = (centerHeight) - ACC_BUTTON_HEIGHT_OFFSET - ACC_BUTTON_HEIGHT;
  button.style.transform = `translateY(${-translateY}px)`;
};


const setAccConetnts = (tabId) => {
  accordionButtons.forEach((button) => {
    const buttonId = button.getAttribute('data-id');
    const parentContainer = button.closest('li');
    const contentItem = parentContainer.querySelector('.accordeon-item__content--is-visible');
    const content = contentItem.querySelector('p');

    button.classList.remove('accordeon-item__open-button--active');
    content.style.maxHeight = '0';
    const isActive = state.activeAccButtons[tabId].includes(buttonId);
    if (isActive) {
      button.classList.add('accordeon-item__open-button--active');
      content.style.maxHeight = `${content.scrollHeight}px`;
      setTimeout(() => {
        translateCenteredButton(parentContainer, button);
      }, 300);
    } else {
      button.style.transform = 'translateY(0)';
    }
  });
};

const handleTabButtons = () => {
  tabButtons.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabButtons.forEach((button) => button.classList.remove('faq-tab__button--active'));

      const tabId = tab.getAttribute('data-id');
      tab.classList.add('faq-tab__button--active');
      state.activeTab = tabId;

      accordionContent.forEach((content) => {
        content.classList.toggle(
          'accordeon-item__content--is-visible',
          content.getAttribute('data-id') === tabId
        );
      });
      setAccConetnts(tabId);
    });
  });
};


const handleAccButtons = () => {
  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const tabId = state.activeTab;
      const buttonId = button.getAttribute('data-id');
      const parentContainer = button.closest('li');
      const contentItem = parentContainer.querySelector('.accordeon-item__content--is-visible');
      const content = contentItem.querySelector('p');

      const isActive = state.activeAccButtons[tabId].includes(buttonId);

      if (isActive) {
        state.activeAccButtons[tabId] = state.activeAccButtons[tabId].filter((id) => id !== buttonId);

        button.style.transform = 'translateY(0)';

        button.classList.remove('accordeon-item__open-button--active');
        contentItem.classList.remove('accordeon-item__content--active');
        content.style.maxHeight = '0';
      } else {
        state.activeAccButtons[tabId].push(buttonId);
        button.classList.add('accordeon-item__open-button--active');
        contentItem.classList.add('accordeon-item__content--active');
        content.style.maxHeight = `${content.scrollHeight}px`;
        setTimeout(() => {
          translateCenteredButton(parentContainer, button);
        }, 300);
      }
    });
  });
};

export const handleFaqControls = () => {
  handleTabButtons();
  handleAccButtons();
};
