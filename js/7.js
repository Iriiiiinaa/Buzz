document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.picture1 img');
  const appearDelay = 150; // Задержка между появлением картинок (мс)

  // Соответствие класса картинки -> класса текста
  const textMap = {
    'pic5': 'text11',
    'pic12': 'text12',
    'pic14': 'text13',
    'pic15': 'text14',
    'pic22': 'text15',
    'pic26': 'text16'
  };

  // Скрываем все изображения и тексты вначале
  images.forEach(img => {
    img.style.display = 'none';
  });

  Object.values(textMap).forEach(textClass => {
    const els = document.querySelectorAll(`.${textClass}`);
    els.forEach(el => {
      el.style.display = 'none';
    });
  });

  // Функция для постепенного показа изображений и текста
  function showImagesSequentially(index = 0) {
    if (index >= images.length) return; // все показаны

    const img = images[index];
    img.style.display = 'block';

    // Проверяем, нужно ли показывать текст для этой картинки
    let textClassToShow = null;
    for (const picClass in textMap) {
      if (img.classList.contains(picClass)) {
        textClassToShow = textMap[picClass];
        break;
      }
    }

    if (textClassToShow) {
      const textEls = document.querySelectorAll(`.${textClassToShow}`);
      textEls.forEach(el => {
        el.style.display = 'block';
      });
    }

    setTimeout(() => {
      showImagesSequentially(index + 1);
    }, appearDelay);
  }

  showImagesSequentially();
});