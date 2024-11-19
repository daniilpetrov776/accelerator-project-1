const buttons = document.querySelectorAll('.button');
const offerLinks = document.querySelectorAll('.offer-link');
const tabButtons = document.querySelectorAll('.faq-tab__button');
const accButtons = document.querySelectorAll('.accordeon-item__open-button');

const blockDisabledButtons = () => {
  buttons.forEach((button) => {
    if (button.classList.contains('button--button-primary-disabled')) {
      button.setAttribute('tabindex', '-1');
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });

  buttons.forEach((button) => {
    if (button.classList.contains('button--button-secondary-disabled')) {
      button.setAttribute('tabindex', '-1');
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });
};

const blockDisabledOfferLinks = () => {
  offerLinks.forEach((offerLink) => {
    if (offerLink.classList.contains('offer-link--disabled')) {
      offerLink.setAttribute('tabindex', '-1');
      offerLink.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });
};

const blockDisabledTabButtons = () => {
  tabButtons.forEach((button) => {
    if (button.classList.contains('faq-tab__button--disabled')) {
      button.setAttribute('tabindex', '-1');
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });
};

const blockDisabledAccButtons = () => {
  accButtons.forEach((button) => {
    if (button.classList.contains('accordeon-item__open-button--disabled')) {
      button.setAttribute('tabindex', '-1');
      button.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });
};

export const blockDisabledElements = () => {
  blockDisabledButtons();
  blockDisabledOfferLinks();
  blockDisabledTabButtons();
  blockDisabledAccButtons();
};
