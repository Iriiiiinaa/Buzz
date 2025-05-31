document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.laptop img');

  const appearDelay = 200;           
  const disappearDelay = 250;        
  const visibleTime = 500;          

  // Словарь соответствия класса картинки -> класс текста
  const textMap = {
    'lap': 'text6',
    'lap4': 'text7',
    'lap15': 'text8',
    'lap29': 'text9',
    'lap39': 'text10'
  };

  // Скрываем все тексты из textMap вначале
  Object.values(textMap).forEach(textClass => {
    const els = document.querySelectorAll(`.${textClass}`);
    els.forEach(el => el.style.display = 'none');
  });

  images.forEach(img => {
    img.style.display = 'none';
    img.style.position = 'absolute';
    img.style.cursor = 'pointer';

    img.addEventListener('click', () => {
      window.open('https://iriiiiinaa.github.io/Web-poster-Buzz/', '_blank');
    });
  });

  let totalImages = images.length;

  function showImage(index) {
    const img = images[index];
    img.style.display = 'block';

    // Определяем, какой текст показывать, по классам картинки
    let textClassToShow = null;
    for (const key in textMap) {
      if (img.classList.contains(key)) {
        textClassToShow = textMap[key];
        break;
      }
    }

    // Показываем текст с нужным классом
    if (textClassToShow) {
      const textEls = document.querySelectorAll(`.${textClassToShow}`);
      textEls.forEach(el => el.style.display = 'block');
    }

    setTimeout(() => {
      hideImage(index);
    }, visibleTime + index * disappearDelay);
  }

  function hideImage(index) {
    const img = images[index];
    img.style.display = 'none';

    // Скрываем текст с соответствующим классом
    let textClassToHide = null;
    for (const key in textMap) {
      if (img.classList.contains(key)) {
        textClassToHide = textMap[key];
        break;
      }
    }

    if (textClassToHide) {
      const textEls = document.querySelectorAll(`.${textClassToHide}`);
      textEls.forEach(el => el.style.display = 'none');
    }
  }

  function animate() {
    for (let i = 0; i < totalImages; i++) {
      setTimeout(() => {
        showImage(i);
      }, i * appearDelay);
    }

    const cycleDuration = visibleTime + (totalImages - 1) * disappearDelay + 500;

    setTimeout(animate, cycleDuration);
  }

  animate();
});
