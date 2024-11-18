import { blockDisabledElements } from './disable';
import { LazyLoadVideo } from './video';
import { displayPrices } from './price';
import { DEFAULT_SERVICE_TIME } from './const';
import { swiper } from './swiper';

blockDisabledElements();
LazyLoadVideo();
displayPrices(DEFAULT_SERVICE_TIME);
swiper.init();
// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

