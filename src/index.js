import './index.html';
import 'swiper/scss';  //  подключам свайпер
import 'swiper/scss/pagination';


import './index.scss';


const videoBg = document.querySelector('.video-bg');
videoBg.innerHTML = `
      <source src="video/video.webm" type="video/webm">
      <source src="video/video.mp4" type="video/mp4"> 
`;
