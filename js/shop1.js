function animateShop() {
  const linn1 = document.querySelector('.linn1');
  const shopItems = Array.from(document.querySelectorAll('.shop17, .shop18, .shop19, .shop20, .shop21, .shop22, .shop23, .shop24, .shop25, .shop26, .shop27, .shop28, .shop29, .shop30, .shop31, .shop32'));

  const itemHeight = 14;
  const speed = -0.05;

  const initialTops = {
    'shop17': -111,
    'shop18': -97,
    'shop19': -83,
    'shop20': -69,
    'shop21': -55,
    'shop22': -41,
    'shop23': -27,
    'shop24': -13,
    'shop25': 1,
    'shop26': 15,
    'shop27': 29,
    'shop28': 43,
    'shop29': 57,
    'shop30': 71,
    'shop31': 85,
    'shop32': 99
  };

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

  const nextShopMap = {
    17: 18, 18: 19, 19: 20, 20: 21, 21: 22, 22: 23, 23: 24, 24: 25,
    25: 26, 26: 27, 27: 28, 28: 29, 29: 30, 30: 31, 31: 32, 32: 17
  };

  function resetShopItem(item) {
    let newTop;
    const currentItemNumber = parseInt(item.className.replace('shop', ''));
    const nextItemNumber = nextShopMap[currentItemNumber];

    const nextElement = document.querySelector(`.shop${nextItemNumber}`);

    if (!nextElement) {
      newTop = parseFloat(shopItems[shopItems.length - 1].style.top) + itemHeight;
    } else {
      newTop = parseFloat(nextElement.style.top) - itemHeight;
    }

    item.style.top = `${newTop}vw`;
  }

  function animate() {
    for (let i = 0; i < shopItems.length; i++) {
      const item = shopItems[i];
      let currentTop = parseFloat(item.style.top);
      item.style.top = `${currentTop - speed}vw`;
       if (currentTop > initialTops['shop32'] + itemHeight) {
        resetShopItem(item);
      }
    }
    requestAnimationFrame(animate);
  }

  shopItems.forEach(item => {
    const currentClass = item.className.split(' ')[0];
    item.style.top = `${initialTops[currentClass]}vw`;
    item.style.willChange = 'top'; 
    item.style.transform = 'translateZ(0)';
  });

  animate();
}

function maskTextarea() {
  const normalTextarea = document.getElementById("normalTextarea");
  const maskedTextarea = document.getElementById("maskedTextarea");

  maskedTextarea.addEventListener("input", function() {
    let value = maskedTextarea.value;
    let maskedValue = '';

    for (let i = 0; i < value.length; i++) {
      maskedValue += '●';
    }

    maskedTextarea.value = maskedValue;
  });
}

function animateImages() {
  const images1 = document.querySelectorAll('.immg img');
  const images2 = document.querySelectorAll('.immmg img');
  const allImages = [...images1, ...images2];

  let currentIndex = 0;
  let appearing = true;

  function animate() {
    if (appearing) {
      if (currentIndex < allImages.length) {
        allImages[currentIndex].classList.add('visible');
        currentIndex++;
        setTimeout(animate, 150);
      } else {
        appearing = false;
        setTimeout(() => {
          currentIndex = 0;
          animate();
        }, 800);
      }
    } else {
      if (currentIndex < allImages.length) {
        allImages[currentIndex].classList.remove('visible');
        currentIndex++;
        setTimeout(animate, 150);
      } else {
        appearing = true;
        setTimeout(() => {
          currentIndex = 0;
          animate();
        }, 800);
      }
    }
  }

  animate();
}

document.addEventListener("DOMContentLoaded", () => {
  animateShop();
  maskTextarea();
  animateImages();
});