import './index.html';
import './index.scss';
// 

const videoBg = document.querySelector('.video-bg');
videoBg.innerHTML = `
      <source srcset="video/video.webm" type="video/webm">
      <source srcset="video/video.mp4" type="video/mp4"> 
`;
