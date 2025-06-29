document.addEventListener("DOMContentLoaded", () => {
  const linn = document.querySelector('.linn');
  const linn1 = document.querySelector('.linn1');
  const linnn2 = document.querySelector('.linnn2');
  const immg = document.querySelector('.immg');
  const immmg = document.querySelector('.immmg');
  const account = document.querySelector('.account');
  const shopItems = Array.from(document.querySelectorAll('.shop1, .shop2, .shop3, .shop4, .shop5, .shop6, .shop7, .shop8, .shop9, .shop10, .shop11, .shop12, .shop13, .shop14, .shop15, .shop16'));
  const itemHeight = 14;
  const speed = -0.04; 

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

  const shopElements = document.querySelectorAll('[class^="shop"]');
  shopElements.forEach(shopElement => {
    const shopNumber = shopElement.className.match(/shop(\d+)/)[1];
    const shhopElement = document.querySelector(`.shhop${shopNumber}`);
    if (shhopElement) {
      handleShopHover(shopElement, shhopElement);
    }
  });

  function getCssVariable(variableName) {
    return parseFloat(getComputedStyle(document.documentElement).getPropertyValue(variableName));
  }

  let initialTops = {}; 

  function updateInitialTops() {
    initialTops = {
      'shop1': getCssVariable('--shop1-top'),
      'shop2': getCssVariable('--shop2-top'),
      'shop3': getCssVariable('--shop3-top'),
      'shop4': getCssVariable('--shop4-top'),
      'shop5': getCssVariable('--shop5-top'),
      'shop6': getCssVariable('--shop6-top'),
      'shop7': getCssVariable('--shop7-top'),
      'shop8': getCssVariable('--shop8-top'),
      'shop9': getCssVariable('--shop9-top'),
      'shop10': getCssVariable('--shop10-top'),
      'shop11': getCssVariable('--shop11-top'),
      'shop12': getCssVariable('--shop12-top'),
      'shop13': getCssVariable('--shop13-top'),
      'shop14': getCssVariable('--shop14-top'),
      'shop15': getCssVariable('--shop15-top'),
      'shop16': getCssVariable('--shop16-top')
    };
  }

  function resetShopItem(item) {
    let newTop;
    let currentItemNumber = parseInt(item.className.replace('shop', ''));
    let nextItemNumber = currentItemNumber + 1;
    if (nextItemNumber > 16) {
      nextItemNumber = 1;
    }

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

  function setInitialPositions() {
    updateInitialTops(); 
    shopItems.forEach(item => {
      const currentClass = item.className.split(' ')[0];
      item.style.top = `${initialTops[currentClass]}vw`;
    });
  }

  setInitialPositions();

  window.addEventListener('resize', () => {
    setInitialPositions();
  });

  animate();

  const clikElements = document.querySelectorAll('.clik');

  clikElements.forEach(clikElement => {
    clikElement.addEventListener('click', () => {
      linn.style.display = 'none';
      linn1.style.display = 'none';

      account.style.display = 'block';
      linnn2.style.display = 'block';
      immg.style.display = 'block';
      immmg.style.display = 'block';
    });
  });

  account.style.display = 'none';
  linnn2.style.display = 'none';
  immg.style.display = 'none';
  immmg.style.display = 'none';
});