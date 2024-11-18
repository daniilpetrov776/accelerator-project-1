const buttons = document.querySelectorAll('.button');
const offerLinks = document.querySelectorAll('.offer-link');

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

export const blockDisabledElements = () => {
  blockDisabledButtons();
  blockDisabledOfferLinks();
};
