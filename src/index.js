import './index.html';
import 'swiper/scss';  //  подключам свайпер сладйер
import 'swiper/scss/pagination';
import './index.scss';
import { slidersInit } from './modules/sliders';



slidersInit('.about__slider', {  // сладер для "О компании"
            pagination: {
                  el: '.about__slider-pagination',
            }
      }
);



slidersInit('.career__slider ', {  // сладер для "Карьера"
      pagination: {
            el: '.career__slider-pagination',
      },
      breakpoints: {
            
            768: {
              slidesPerView: 'auto',  // кол-во слайдв на странице
              spaceBetween: 20,
              pagination: false  // отклбчли пагинацию
            },

           
            1024: {
              slidesPerView: 'auto', //3
              spaceBetween: 26,
              pagination: false
            },

            
            1240: {
              slidesPerView: 'auto', // 4
              spaceBetween: 30,
              pagination: false
            }
          }
      }
);



const videoBg = document.querySelector('.video-bg');
videoBg.innerHTML = `
      <source src="video/video.webm" type="video/webm">
      <source src="video/video.mp4" type="video/mp4"> 
`;



// const videoBgLocation = document.querySelector('.video-bg-location');
// videoBgLocation.innerHTML = `
//       <source src="video/video.webm" type="video/webm">
//       <source src="video/video.mp4" type="video/mp4"> 
// `;
