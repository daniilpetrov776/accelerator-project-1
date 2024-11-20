import { blockDisabledElements } from './disable';
import { LazyLoadVideo } from './video';
import { displayPrices } from './price';
import { DEFAULT_SERVICE_TIME } from './const';
import { juriSwiper, reviewsSwiper } from './swiper';
import { updateFaqControls } from './accordeon';

blockDisabledElements();
LazyLoadVideo();
displayPrices(DEFAULT_SERVICE_TIME);
juriSwiper.init();
reviewsSwiper.init();
updateFaqControls();
// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

