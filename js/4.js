document.addEventListener("DOMContentLoaded", () => {
const wrapper = document.getElementById('posterWrapper');
let offset = 0;
const totalHeight = 150; // высота одной группы в vw
const speed = 0.05; // скорость движения (vw за кадр)

function animate() {
  offset += speed; // увеличиваем offset, чтобы сдвигать вниз
  if (offset >= totalHeight) offset = 0; // сброс, когда уходит вниз

  wrapper.style.transform = `translateY(${offset}vw)`; // сдвигаем вниз

  requestAnimationFrame(animate);
}
animate();



function initBannerClones({
  bannerSelector,
  originalImgSelector,
  maxClones = 5,
  offsetXStep = 2.5,
  offsetYStep = 3.5,
  useMargin = false // если true — сдвигаем через margin, иначе через top/left
}) {
  const banner = document.querySelector(bannerSelector);
  if (!banner) return;

  const originalImg = banner.querySelector(originalImgSelector);
  if (!originalImg) return;

  const clonesContainer = document.createElement('div');
  clonesContainer.style.position = 'absolute';
  clonesContainer.style.top = '0';
  clonesContainer.style.left = '0';
  clonesContainer.style.width = '100%';
  clonesContainer.style.height = '100%';
  banner.appendChild(clonesContainer);

  let clones = [];
  let intervalId = null;

  originalImg.style.cursor = 'default';

  banner.addEventListener('mouseenter', () => {
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

  banner.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    removeClones();
  });

  function createClone(index) {
    const clone = originalImg.cloneNode(true);
    clone.classList.add('clone');
    clone.style.position = 'absolute';

    const offsetX = offsetXStep * (index + 1);
    const offsetY = offsetYStep * (index + 1);

    if (useMargin) {
      // Получаем текущие margin-top и margin-left оригинала в vw
      const originalMarginTop = parseFloat(getComputedStyle(originalImg).marginTop) || 0;
      const originalMarginLeft = parseFloat(getComputedStyle(originalImg).marginLeft) || 0;

      clone.style.marginTop = `${originalMarginTop + offsetY}vw`;
      clone.style.marginLeft = `${originalMarginLeft + offsetX}vw`;
    } else {
      // Для top/left позиционирования
      // Берём текущие top/left из стилей или 0, если не заданы
      const originalTop = parseFloat(originalImg.style.top) || 0;
      const originalLeft = parseFloat(originalImg.style.left) || 0;

      clone.style.top = `${originalTop + offsetY}vw`;
      clone.style.left = `${originalLeft + offsetX}vw`;
    }

    // Чем больше индекс, тем ниже z-index (чтобы верхний был оригинал)
    clone.style.zIndex = 10 - index;

    clonesContainer.appendChild(clone);
    clones.push(clone);
  }

  function removeClones() {
    clones.forEach(clone => clonesContainer.removeChild(clone));
    clones = [];
  }
}

// Инициализируем три баннера с их параметрами:

// 1) Первый баннер (banner с ban1)
initBannerClones({
  bannerSelector: '.banner',
  originalImgSelector: '.ban1',
  maxClones: 5,
  offsetXStep: 2.5,
  offsetYStep: 3.5,
  useMargin: false
});

// 2) Второй баннер (banner2 с ban6)
// смещения отрицательные (влево и вверх), используем top/left
initBannerClones({
  bannerSelector: '.banner2',
  originalImgSelector: '.ban6',
  maxClones: 9,
  offsetXStep: -1.5,
  offsetYStep: -1.5,
  useMargin: false
});

// 3) Третий баннер (banner3 с ban8)
// смещения отрицательные, используем marginTop/marginLeft
initBannerClones({
  bannerSelector: '.banner3',
  originalImgSelector: '.ban8',
  maxClones: 7,
  offsetXStep: -2,
  offsetYStep: 2,
  useMargin: false
});




function setupScrollOnClick(posterClasses, targetClass, whitespace = 60) {
  const posters = document.querySelectorAll(posterClasses.join(', '));

  posters.forEach(poster => {
    poster.style.cursor = 'pointer';

    poster.addEventListener('click', e => {
      e.preventDefault();

      const target = document.querySelector(targetClass);
      if (!target) return;

      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - whitespace;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// Вызовы функции для каждой группы
setupScrollOnClick(['.poster1', '.poster2', '.poster15'], '.ban1');
setupScrollOnClick(['.poster4', '.poster5'], '.copyy');
setupScrollOnClick(['.poster3'], '.ban7');
setupScrollOnClick(['.poster6', '.poster7', '.poster8'], '.banner1');
setupScrollOnClick(['.poster9', '.poster10', '.poster11'], '.ban5');
setupScrollOnClick(['.poster12', '.poster13', '.poster14'], '.time4');
});

