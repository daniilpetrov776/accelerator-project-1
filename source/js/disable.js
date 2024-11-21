const buttons = document.querySelectorAll('.button');
const offerLinks = document.querySelectorAll('.offer-link');
const tabButtons = document.querySelectorAll('.faq-tab__button');
const accButtons = document.querySelectorAll('.accordeon-item__open-button');
const navLinks = document.querySelectorAll('.footer-nav__link');
const socialLinks = document.querySelectorAll('.socials__link');

// const blockDisabledButtons = () => {
//   buttons.forEach((button) => {
//     if (button.classList.contains('button--button-primary-disabled')) {
//       button.setAttribute('tabindex', '-1');
//       button.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });

//   buttons.forEach((button) => {
//     if (button.classList.contains('button--button-secondary-disabled')) {
//       button.setAttribute('tabindex', '-1');
//       button.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });
// };

// const blockDisabledOfferLinks = () => {
//   offerLinks.forEach((offerLink) => {
//     if (offerLink.classList.contains('offer-link--disabled')) {
//       offerLink.setAttribute('tabindex', '-1');
//       offerLink.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });
// };

// const blockDisabledTabButtons = () => {
//   tabButtons.forEach((button) => {
//     if (button.classList.contains('faq-tab__button--disabled')) {
//       button.setAttribute('tabindex', '-1');
//       button.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });
// };

// const blockDisabledAccButtons = () => {
//   accButtons.forEach((button) => {
//     if (button.classList.contains('accordeon-item__open-button--disabled')) {
//       button.setAttribute('tabindex', '-1');
//       button.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });
// };

// const blockDisabledNavLinks = () => {
//   navLinks.forEach((link) => {
//     if (link.classList.contains('footer-nav__link--disabled')) {
//       link.setAttribute('tabindex', '-1');
//       link.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });
// };

// const blockDisabledSocialLinks = () => {
//   socialLinks.forEach((link) => {
//     if (link.classList.contains('socials__link--disabled')) {
//       link.setAttribute('tabindex', '-1');
//       link.addEventListener('click', (evt) => {
//         evt.preventDefault();
//       });
//     }
//   });
// };

// export const blockDisabledElements = () => {
//   blockDisabledButtons();
//   blockDisabledOfferLinks();
//   blockDisabledTabButtons();
//   blockDisabledAccButtons();
//   blockDisabledNavLinks();
//   blockDisabledSocialLinks();
// };

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
