import { blockDisabledElements } from './disable';
import { LazyLoadVideo } from './video';
import { displayPrices } from './price';
import { DEFAULT_SERVICE_TIME } from './const';
import { swiper } from './swiper';
import { handleAccButtons } from './accordeon';

blockDisabledElements();
LazyLoadVideo();
displayPrices(DEFAULT_SERVICE_TIME);
swiper.init();
handleAccButtons();
// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

