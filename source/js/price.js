import { Pricing, DESKTOP_RESOLUTION, DEFAULT_SERVICE_TIME } from './const';

const priceOptions = document.querySelectorAll('.price-select__option-button');
const priceContainer = document.querySelector('.price-select__options-wrapper');
const pricingTexts = document.querySelectorAll('.price-card__price');
const pricingShadows = document.querySelectorAll('.price-card__price-shadow');
const purchaseButtons = document.querySelectorAll('.price-card__buy-button');
const priceCards = document.querySelectorAll('.price-card');
const scrollTriggerButton = document.querySelector('.promo-info__button');

const toggleCardFocus = (card, addFocus) => {
  card?.classList.toggle('price-card--button-is-focused', addFocus);
};

const toggleCardDisabledState = (card, isDisabled) => {
  card?.classList.toggle('price-card--button-is-disabled', isDisabled);
};

purchaseButtons.forEach((button) => {
  const card = button.closest('.price-card');
  const isDisabled = button.classList.contains('button--button-primary-disabled');
  toggleCardDisabledState(card, isDisabled);

  button.addEventListener('focusin', (evt) => toggleCardFocus(evt.target.closest('.price-card'), true));
  button.addEventListener('focusout', (evt) => toggleCardFocus(evt.target.closest('.price-card'), false));
});

export const displayPrices = (option) => {
  const selectedPrices = Pricing[option];

  pricingTexts.forEach((textElement) => {
    const serviceType = textElement.dataset.service;
    const price = selectedPrices[serviceType];

    if (price !== undefined) {
      textElement.textContent = `${price}`;
    }
  });

  const isBiggerShadow = parseInt(option, 10) > DEFAULT_SERVICE_TIME;
  pricingShadows.forEach((shadow) => {
    const serviceType = shadow.dataset.service;
    shadow.textContent = selectedPrices[serviceType] ?? '';
    shadow.classList.toggle('price-card__price-shadow--bigger', isBiggerShadow);
  });
};

priceContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('price-select__option-button')) {
    priceOptions.forEach((tab) => tab.classList.remove('price-select__option-button--active'));
    evt.target.classList.add('price-select__option-button--active');
    displayPrices(evt.target.dataset.months);
  }
});

const animateCardHighlight = () => {
  priceCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('price-card--button-is-focused');
      setTimeout(() => card.classList.remove('price-card--button-is-focused'), 500);
    }, index * 600);
  });
};

const handleScrollButtonClick = () => {
  if (window.innerWidth >= DESKTOP_RESOLUTION) {
    setTimeout(animateCardHighlight, 800);
  }
};

scrollTriggerButton.addEventListener('click', handleScrollButtonClick);
