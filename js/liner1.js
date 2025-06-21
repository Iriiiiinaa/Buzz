
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
  const image2 = document.getElementById('screen2');

  const initialDistanceVW = 0.2; 
  const image1DistanceVW = 0.2; 
  const image2DistanceVW = 0.2; 

  const animationDuration = 7000; 
  const startDelay = 50; 

  const elements = {
    letter1: { element: letter1, initialWidthVW: 0, scale: 0 },
    letter2: { element: letter2, initialWidthVW: 0, scale: 0 },
    letter3: { element: letter3, initialWidthVW: 0, scale: 0 },
    letter4: { element: letter4, initialWidthVW: 0, scale: 0 },
    letter5: { element: letter5, initialWidthVW: 0, scale: 0 },
    letter6: { element: letter6, initialWidthVW: 0, scale: 0 },
    letter7: { element: letter7, initialWidthVW: 0, scale: 0 },
    image1: { element: image1, initialWidthVW: 0, scale: 1 },
    letter8: { element: letter8, initialWidthVW: 0, scale: 0 },
    letter9: { element: letter9, initialWidthVW: 0, scale: 0 },
    letter10: { element: letter10, initialWidthVW: 0, scale: 0 },
    letter11: { element: letter11, initialWidthVW: 0, scale: 0 },
    image2: { element: image2, initialWidthVW: 0, scale: 1 }
  };

  const getElementWidthInVW = (element) => {
    return parseFloat(getComputedStyle(element).width) / document.documentElement.clientWidth * 100;
  };

  setTimeout(() => {
    for (const key in elements) {
      elements[key].initialWidthVW = getElementWidthInVW(elements[key].element);
    }

    const setInitialPositions = () => {
      let currentLeft = 0;

      for (const key in elements) {
        if (key === 'letter1') continue;

        let distance = initialDistanceVW;
        if (key === 'image1') distance = image1DistanceVW;
        else if (key === 'image2') distance = image2DistanceVW;

        const prevKey = Object.keys(elements)[Object.keys(elements).indexOf(key) - 1];
        const previousElement = elements[prevKey].element;

        currentLeft += getElementWidthInVW(previousElement) * elements[prevKey].scale + distance;
        elements[key].element.style.left = `${currentLeft}vw`;
      }
    };

    setInitialPositions();

    let animationProgress = 0;

    const animate = () => {
      animationProgress += 16 / animationDuration; 
      if (animationProgress > 1) animationProgress = 0; 

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

      for (const key in elements) {
        if (key !== 'image1' && key !== 'image2') {
          elements[key].element.style.transform = `scaleX(${elements[key].scale})`;
        }
      }

      let currentLeft = 0;

      for (const key in elements) {
        if (key === 'letter1') continue;

        let distance = initialDistanceVW;
        if (key === 'image1') distance = image1DistanceVW;
        else if (key === 'image2') distance = image2DistanceVW;

        const prevKey = Object.keys(elements)[Object.keys(elements).indexOf(key) - 1];
        const previousElement = elements[prevKey].element;

        currentLeft += getElementWidthInVW(previousElement) * elements[prevKey].scale + distance;
        elements[key].element.style.left = `${currentLeft}vw`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, startDelay);
});
