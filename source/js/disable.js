const blockDisabledElementsBySelector = (selector, disabledClass) => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    if (element.classList.contains(disabledClass)) {
      element.setAttribute('tabindex', '-1');
      element.addEventListener('click', (evt) => {
        evt.preventDefault();
      });
    }
  });
};

export const blockDisabledElements = () => {
  blockDisabledElementsBySelector('.button', 'button--button-primary-disabled');
  blockDisabledElementsBySelector('.button', 'button--button-secondary-disabled');
  blockDisabledElementsBySelector('.offer-link', 'offer-link--disabled');
  blockDisabledElementsBySelector('.faq-tab__button', 'faq-tab__button--disabled');
  blockDisabledElementsBySelector('.accordeon-item__open-button', 'accordeon-item__open-button--disabled');
  blockDisabledElementsBySelector('.footer-nav__link', 'footer-nav__link--disabled');
  blockDisabledElementsBySelector('.socials__link', 'socials__link--disabled');
};
