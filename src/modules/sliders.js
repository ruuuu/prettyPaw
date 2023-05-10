import  {Swiper, Pagination, Autoplay} from "swiper";

const params = {

      spaceBetween: 20,  // расстояние между слайдами
      loop: true,  // зацикленный слайдер
      autoplay: {
            delay: 3500,  //  зажержка между слайдами в сек
            disableOnInteraction: false,  // после взаимодействия со сладйером, он продолжит рабоать
      },
      slidesPerView: 1, // число отображаемыз слайдов на странице
      pagination: {
            el: '.swiper-pagination'
      },
      modules: [  Autoplay, Pagination ]
};




export const slidersInit = (selectorSlider, newParams) => {

      new Swiper(selectorSlider,  {
            ...params,
            ...newParams,
      }
      );

};