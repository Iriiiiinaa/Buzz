document.addEventListener("DOMContentLoaded", () => {
const mainImage = document.querySelector('img.centre');

// Получаем все миниатюрные картинки с классом, начинающимся на "space"
const thumbnails = document.querySelectorAll('img[class^="space"]');

// Получаем все картинки с классами duble1, duble2, ..., duble7
const dubleImages = [
  document.querySelector('img.duble1'),
  document.querySelector('img.duble2'),
  document.querySelector('img.duble3'),
  document.querySelector('img.duble4'),
  document.querySelector('img.duble5'),
  document.querySelector('img.duble6'),
  document.querySelector('img.duble7'),
  document.querySelector('img.duble8'),
  document.querySelector('img.duble9'),
  document.querySelector('img.duble10'),
  document.querySelector('img.duble11'),
   document.querySelector('img.duble12'),
  document.querySelector('img.duble13')
];

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    // Меняем src главной картинки
    mainImage.src = img.src;

    // Меняем src для каждой из duble-картинок
    dubleImages.forEach(dubleImg => {
      if (dubleImg) { // проверяем, что элемент существует
        dubleImg.src = img.src;
      }
    });
  });
});

const images = document.querySelectorAll('img[class^="lin"]');

function showRandomImages() {
  // Скрываем все картинки
  images.forEach(img => img.style.display = 'none');

  // Решаем, показывать 1 или 2 картинки (рандомно)
  const countToShow = Math.floor(Math.random() * 2) + 5; // 1 или 2

  // Создаем массив индексов картинок
  const indices = Array.from(images.keys());

  // Перемешиваем массив индексов (Fisher-Yates shuffle)
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Показываем первые countToShow картинок из перемешанного массива
  for (let i = 0; i < countToShow; i++) {
    images[indices[i]].style.display = 'block';
  }
}

// Показываем случайные картинки сразу при загрузке
showRandomImages();

// Меняем показываемые картинки каждые 3 секунды
setInterval(showRandomImages, 800);
})