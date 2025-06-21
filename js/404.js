document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.picture1 img');
  const appearDelay = 150; 
  const pauseAfterAllShown = 1500;

  const textMap = {
    'pic5': 'text11',
    'pic12': 'text12',
    'pic14': 'text13',
    'pic15': 'text14',
    'pic22': 'text15',
    'pic26': 'text16'
  };

  function hideAll() {
    images.forEach(img => {
      img.style.display = 'none';
    });
    Object.values(textMap).forEach(textClass => {
      const els = document.querySelectorAll(`.${textClass}`);
      els.forEach(el => {
        el.style.display = 'none';
      });
    });
  }

  function showImagesSequentially(index = 0) {
    if (index >= images.length) {
      setTimeout(() => {
        hideAll();
        showImagesSequentially(0);
      }, pauseAfterAllShown);
      return;
    }

    const img = images[index];
    img.style.display = 'block';

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

  hideAll();
  showImagesSequentially();
});