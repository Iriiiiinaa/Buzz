document.addEventListener("DOMContentLoaded", () => {
  function initBookClones({
    bookSelector,
    originalImgSelector,
    maxClones = 5,
    offsetXStep = 2.5,
    offsetYStep = 3.5,
    useMargin = false,
    zIndexBase = 1, 
  }) {
    const book = document.querySelector(bookSelector);
    if (!book) {
      console.warn(`Книга с селектором "${bookSelector}" не найдена.`);
      return;
    }

    const originalImg = book.querySelector(originalImgSelector);
    if (!originalImg) {
      console.warn(`Оригинальное изображение с селектором "${originalImgSelector}" не найдено в "${bookSelector}".`);
      return;
    }

    const clonesContainer = document.createElement('div');
    clonesContainer.style.position = 'absolute';
    clonesContainer.style.top = '0';
    clonesContainer.style.left = '0';
    clonesContainer.style.width = '100%';
    clonesContainer.style.height = '100%';
    clonesContainer.style.pointerEvents = 'none';
    book.appendChild(clonesContainer);

    let clones = [];
    let intervalId = null;

    originalImg.style.cursor = 'default';

    originalImg.addEventListener('mouseenter', () => {
      let createdClones = 0;

      intervalId = setInterval(() => {
        if (createdClones === maxClones) {
          clearInterval(intervalId);
          return;
        }
        createClone(createdClones);
        createdClones++;
      }, 30);
    });

    originalImg.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      removeClones();
    });

    function createClone(index) {
      const clone = originalImg.cloneNode(true);
      clone.classList.add('clone');
      clone.style.position = 'absolute';
      clone.style.pointerEvents = 'none';

      const offsetX = offsetXStep * (index + 1);
      const offsetY = offsetYStep * (index + 1);

      if (useMargin) {
        const originalMarginTop = parseFloat(getComputedStyle(originalImg).marginTop) || 0;
        const originalMarginLeft = parseFloat(getComputedStyle(originalImg).marginLeft) || 0;

        clone.style.marginTop = `${originalMarginTop + offsetY}vw`;
        clone.style.marginLeft = `${originalMarginLeft + offsetX}vw`;
      } else {
        const originalTop = parseFloat(getComputedStyle(originalImg).top) || 0;
        const originalLeft = parseFloat(getComputedStyle(originalImg).left) || 0;
        clone.style.top = `calc(${originalTop}px + ${offsetY}vw)`;
        clone.style.left = `calc(${originalLeft}px + ${offsetX}vw)`;
      }

      clone.style.zIndex = zIndexBase - index;

      clonesContainer.appendChild(clone);
      clones.push(clone);
    }

    function removeClones() {
      clones.forEach(clone => clonesContainer.removeChild(clone));
      clones = [];
    }
  }

  initBookClones({
    bookSelector: '.bookk1',
    originalImgSelector: '.book14',
    maxClones: 6,
    offsetXStep: -2,
    offsetYStep: -2,
    useMargin: false,
    zIndexBase: 9
  });

  initBookClones({
    bookSelector: '.bookk',
    originalImgSelector: '.book6',
    maxClones: 5,
    offsetXStep: -2,
    offsetYStep: 2,
    useMargin: false,
    zIndexBase: 6
  });

  initBookClones({
    bookSelector: '.bookk1',
    originalImgSelector: '.book9',
    maxClones: 7,
    offsetXStep: 2,
    offsetYStep: 2,
    useMargin: false,
    zIndexBase: 9
  });

  initBookClones({
    bookSelector: '.bookk1',
    originalImgSelector: '.book13',
    maxClones: 5,
    offsetXStep: -2,
    offsetYStep: -2,
    useMargin: false,
    zIndexBase: 9
  });

  initBookClones({
    bookSelector: '.bookk1',
    originalImgSelector: '.book22',
    maxClones: 3,
    offsetXStep: -2,
    offsetYStep: 2,
    useMargin: false,
    zIndexBase: 9
  });

  initBookClones({
    bookSelector: '.bookk2',
    originalImgSelector: '.book24',
    maxClones: 5,
    offsetXStep: 2,
    offsetYStep: -2,
    useMargin: false,
    zIndexBase: 9
  });

const targetMap = {
        'book7': 'paragraph1',
        'book19': 'paragraph2',
        'book23': 'paragraph3',
        'book20': 'paragraph4',
        'book29': 'paragraph5',
        'paragraph1': 'book7',
        'paragraph2': 'book19',
        'paragraph3': 'book23',
        'paragraph4': 'book20',
        'paragraph5': 'book29'
    };

    function scrollToElement(elementId, offsetVW = 0) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPixels = (offsetVW / 100) * window.innerWidth;
            const offsetPosition = elementPosition - offsetPixels;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    for (const key in targetMap) {
        const element = document.getElementById(key);
        if (element) {
            element.addEventListener('click', function() {
                const offsetVWDistance = 8;
                scrollToElement(targetMap[key], offsetVWDistance);
            });
        }
    }
})