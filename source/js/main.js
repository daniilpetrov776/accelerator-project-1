import { blockDisabledElements } from './disable';
import { LazyLoadVideo } from './video';
import { displayPrices } from './price';
import { DEFAULT_SERVICE_TIME } from './const';
import { juriSwiper, reviewsSwiper } from './swiper';
import { handleFaqControls } from './accordeon';
import './form';

blockDisabledElements();
LazyLoadVideo();
displayPrices(DEFAULT_SERVICE_TIME);
juriSwiper.init();
reviewsSwiper.init();
handleFaqControls();
