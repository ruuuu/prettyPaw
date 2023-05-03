import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";


await imagemin(['src/img/*.{jpg,png}'], {
      destination: 'src/img', // куда положить файлы после конвертации
      plugins: [
            imageminWebp({quality: 70}),  // плагин конвертирует картинки jpg,png в webp
      ]
});

console.log('Конвертация в webp завершена');
// в package.json написали команду для запуска  "webp": "node webp-convert.mjs", 