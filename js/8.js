document.addEventListener("DOMContentLoaded", () => {
  const linn = document.querySelector('.linn');
  const linn1 = document.querySelector('.linn1');
  const linnn2 = document.querySelector('.linnn2'); // Получаем ссылку на linnn2
  const immg = document.querySelector('.immg'); // Получаем ссылку на immg
  const immmg = document.querySelector('.immmg'); // Получаем ссылку на immmg
  const account = document.querySelector('.account');
  const shopItems = Array.from(document.querySelectorAll('.shop1, .shop2, .shop3, .shop4, .shop5, .shop6, .shop7, .shop8, .shop9, .shop10, .shop11, .shop12, .shop13, .shop14, .shop15, .shop16'));
  const itemHeight = 14; // Приблизительная высота одного элемента .shop (в vw)
  const speed = -0.04; // Скорость движения (Отрицательное значение для движения вверх)

  // Функция для обработки наведения
  function handleShopHover(shopElement, shhopElement) {
    shopElement.addEventListener('mouseenter', () => {
      shhopElement.style.display = 'block';
      setTimeout(() => {
        shhopElement.style.opacity = '1';
      }, 0);
    });

    shopElement.addEventListener('mouseleave', () => {
      shhopElement.style.opacity = '0';
      setTimeout(() => {
        shhopElement.style.display = 'none';
      }, 300);
    });
  }

  // Инициализация обработчиков наведения для всех элементов
  const shopElements = document.querySelectorAll('[class^="shop"]');
  shopElements.forEach(shopElement => {
    const shopNumber = shopElement.className.match(/shop(\d+)/)[1];  // Извлекаем номер из класса (shop1, shop2, ...)
    const shhopElement = document.querySelector(`.shhop${shopNumber}`);
    if (shhopElement) {
      handleShopHover(shopElement, shhopElement);
    }
  });

  // Сохраняем начальные значения top
  const initialTops = {
    'shop1': -111,
    'shop2': -97,
    'shop3': -83,
    'shop4': -69,
    'shop5': -55,
    'shop6': -41,
    'shop7': -27,
    'shop8': -13,
    'shop9': 1,
    'shop10': 15,
    'shop11': 29,
    'shop12': 43,
    'shop13': 57,
    'shop14': 71,
    'shop15': 85,
    'shop16': 99
  };

  function resetShopItem(item) {
    let newTop;
    let currentItemNumber = parseInt(item.className.replace('shop', ''));
    let nextItemNumber = currentItemNumber + 1;
    if (nextItemNumber > 16) {
      nextItemNumber = 1;
    }

    //Найдем индекс следующего элемента:
    let nextElementIndex = shopItems.findIndex(item => item.classList.contains('shop' + nextItemNumber));

    if (nextElementIndex === -1) {
      newTop = parseFloat(shopItems[shopItems.length - 1].style.top) + itemHeight;
    } else {
      newTop = parseFloat(shopItems[nextElementIndex].style.top) - itemHeight;
    }

    item.style.top = `${newTop}vw`;
  }

  function animate() {
    for (let i = 0; i < shopItems.length; i++) {
      const item = shopItems[i];
      let currentTop = parseFloat(item.style.top);

      item.style.top = `${currentTop - speed}vw`;

      if (currentTop > initialTops['shop16'] + itemHeight) {
        resetShopItem(item);
      }
    }
    requestAnimationFrame(animate);
  }

  // Инициализация начального положения элементов
  shopItems.forEach(item => {
    const currentClass = item.className.split(' ')[0];
    item.style.top = `${initialTops[currentClass]}vw`;
  });

  animate();

  const clikElements = document.querySelectorAll('.clik');

  clikElements.forEach(clikElement => {
    clikElement.addEventListener('click', () => {
      // Скрываем .linn и .linn1
      linn.style.display = 'none';
      linn1.style.display = 'none';

      // Показываем .account, .linnn2, .immg и .immmg
      account.style.display = 'block';
      linnn2.style.display = 'block'; // Показываем linnn2
      immg.style.display = 'block';   // Показываем immg
      immmg.style.display = 'block';  // Показываем immmg
    });
  });

  // Изначально скрываем .account, .linnn2, .immg и .immmg
  account.style.display = 'none';
  linnn2.style.display = 'none'; // Скрываем linnn2
  immg.style.display = 'none';   // Скрываем immg
  immmg.style.display = 'none';  // Скрываем immmg
});