document.addEventListener('DOMContentLoaded', () => {
  const letter1 = document.getElementById('letter1');
  const letter2 = document.getElementById('letter2');
  const letter3 = document.getElementById('letter3');
  const letter4 = document.getElementById('letter4');
  const letter5 = document.getElementById('letter5');
  const letter6 = document.getElementById('letter6');
  const letter7 = document.getElementById('letter7');
  const image1 = document.getElementById('screen1');
  const letter8 = document.getElementById('letter8');
  const letter9 = document.getElementById('letter9');
  const letter10 = document.getElementById('letter10');
  const letter11 = document.getElementById('letter11');
  const image2 = document.getElementById('screen2'); // Добавлено

  const initialDistanceVW = 0.2;
  const image1DistanceVW = 0.2;
  const image2DistanceVW = 0.2;

  const elements = {
    letter1: { element: letter1, initialWidthVW: 0, scale: 0 },
    letter2: { element: letter2, initialWidthVW: 0, scale: 0 },
    letter3: { element: letter3, initialWidthVW: 0, scale: 0 },
    letter4: { element: letter4, initialWidthVW: 0, scale: 0 },
    letter5: { element: letter5, initialWidthVW: 0, scale: 0 },
    letter6: { element: letter6, initialWidthVW: 0, scale: 0 },
    letter7: { element: letter7, initialWidthVW: 0, scale: 0 },
    image1: { element: image1, initialWidthVW: 0, scale: 1 }, // scale: 1 означает, что не масштабируем
    letter8: { element: letter8, initialWidthVW: 0, scale: 0 },
    letter9: { element: letter9, initialWidthVW: 0, scale: 0 },
    letter10: { element: letter10, initialWidthVW: 0, scale: 0 },
    letter11: { element: letter11, initialWidthVW: 0, scale: 0 },
    image2: { element: image2, initialWidthVW: 0, scale: 1 } // scale: 1 означает, что не масштабируем
  };

  let animationProgress = 0;
  const animationDuration = 7000;

  setTimeout(() => {
    // Получаем начальные размеры
    for (const key in elements) {
      elements[key].initialWidthVW = parseFloat(getComputedStyle(elements[key].element).width) / document.documentElement.clientWidth * 100;
    }

    // Устанавливаем начальное положение элементов
    let currentLeft = 0;
    for (const key in elements) {
      if (key === 'letter1') {
        continue; // letter1 остается в позиции 0
      }

      let distance = initialDistanceVW;
      if (key === 'image1') {
        distance = image1DistanceVW;
      } else if (key === 'image2') {
         distance = image2DistanceVW;
      }

      currentLeft += elements[key === 'image1' ? 'letter7' : (key === 'image2' ? 'letter11' : Object.keys(elements)[Object.keys(elements).indexOf(key) - 1])].initialWidthVW + distance;
      elements[key].element.style.left = `${currentLeft}vw`;
    }

    function animate() {
      animationProgress += 16 / animationDuration;

      if (animationProgress > 1) {
        animationProgress = 0;
      }

      // Определяем scale для каждой буквы.
      elements.letter1.scale = 0.2 + (Math.sin(animationProgress * Math.PI) * 0.2);
      elements.letter2.scale = 0.3 - (Math.sin(animationProgress * Math.PI) * 0.2);
      elements.letter3.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter4.scale = 0.3 - (Math.sin(animationProgress * Math.PI) * 0.2);
      elements.letter5.scale = 0.3 + (Math.sin(animationProgress * Math.PI) * 0.3);
      elements.letter6.scale = 0.4 - (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter7.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter8.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 1);
      elements.letter9.scale = 0.58 - (Math.sin(animationProgress * Math.PI) * 0.44);
      elements.letter10.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.4);
      elements.letter11.scale = 0.48 - (Math.sin(animationProgress * Math.PI) * 0.48);


      // Применяем transform
      for (const key in elements) {
        if (key !== 'image1' && key !== 'image2'){
             elements[key].element.style.transform = `scaleX(${elements[key].scale})`;
        }
      }

      // Обновляем позицию элементов
      currentLeft = 0;

      for (const key in elements) {
        if (key === 'letter1') {
          continue; // letter1 остается в позиции 0
        }
                let distance = initialDistanceVW;
        if (key === 'image1') {
          distance = image1DistanceVW;
        } else if (key === 'image2') {
          distance = image2DistanceVW;
        }

        const previousKey = key === 'image1' ? 'letter7' : (key === 'image2' ? 'letter11' : Object.keys(elements)[Object.keys(elements).indexOf(key) - 1]);
        currentLeft += elements[previousKey].initialWidthVW * elements[previousKey].scale + distance;
        elements[key].element.style.left = `${currentLeft}vw`;
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, 50);
});
