document.addEventListener('DOMContentLoaded', () => {
  const letter12 = document.getElementById('letter12');
  const letter13 = document.getElementById('letter13');
  const letter14 = document.getElementById('letter14');
  const letter15 = document.getElementById('letter15');
  const screen3 = document.getElementById('screen3');
  const screen4 = document.getElementById('screen4');
  const letter16 = document.getElementById('letter16');
  const letter17 = document.getElementById('letter17');
  const letter18 = document.getElementById('letter18');
  const letter19 = document.getElementById('letter19');
  const letter20 = document.getElementById('letter20');
  const letter21 = document.getElementById('letter21');
  const letter22 = document.getElementById('letter22');
  const screen5 = document.getElementById('screen5');
  const letter23 = document.getElementById('letter23');
  const letter24 = document.getElementById('letter24');
  const letter25 = document.getElementById('letter25');

  const initialDistanceVW = 0.2; 
  const image1DistanceVW = 0.2; 
  const image2DistanceVW = 0.2;
  const animationDuration = 4000;
  const startDelay = 50;

  const elements = {
    letter12: { element: letter12, initialWidthVW: 0, scale: 0 },
    letter13: { element: letter13, initialWidthVW: 0, scale: 0 },
    letter14: { element: letter14, initialWidthVW: 0, scale: 0 },
    letter15: { element: letter15, initialWidthVW: 0, scale: 0 },
    screen3: { element: screen3, initialWidthVW: 0, scale: 1 },
    screen4: { element: screen4, initialWidthVW: 0, scale: 1 },
    letter16: { element: letter16, initialWidthVW: 0, scale: 0 },
    letter17: { element: letter17, initialWidthVW: 0, scale: 0 },
    letter18: { element: letter18, initialWidthVW: 0, scale: 0 },
    letter19: { element: letter19, initialWidthVW: 0, scale: 0 },
    letter20: { element: letter20, initialWidthVW: 0, scale: 0 },
    letter21: { element: letter21, initialWidthVW: 0, scale: 0 },
    letter22: { element: letter22, initialWidthVW: 0, scale: 0 },
    screen5: { element: screen5, initialWidthVW: 0, scale: 1 },
    letter23: { element: letter23, initialWidthVW: 0, scale: 0 },
    letter24: { element: letter24, initialWidthVW: 0, scale: 0 },
    letter25: { element: letter25, initialWidthVW: 0, scale: 0 },
  };

  const getElementWidthInVW = (element) => {
    if (!element) return 0; 
    return parseFloat(getComputedStyle(element).width) / document.documentElement.clientWidth * 100;
  };

  setTimeout(() => {
    for (const key in elements) {
      elements[key].initialWidthVW = getElementWidthInVW(elements[key].element);
    }

    const setInitialPositions = () => {
      let currentLeft = 0;

      for (const key in elements) {
        if (key === 'letter12') continue; 

        let distance = initialDistanceVW;
        if (key === 'screen3') distance = image1DistanceVW;
        else if (key === 'screen4') distance = image2DistanceVW;

        const element = elements[key].element;
        const prevKey = Object.keys(elements)[Object.keys(elements).indexOf(key) - 1];
        const previousElement = elements[prevKey]?.element;

        if (element && previousElement) {
          const previousElementWidth = getElementWidthInVW(previousElement);
          const previousElementScale = elements[prevKey].scale;
          currentLeft += previousElementWidth * previousElementScale + distance;
          element.style.left = `${currentLeft}vw`;
        }
      }
    };

    let animationProgress = 0;

    const animate = () => {
      animationProgress += 16 / animationDuration; 
      if (animationProgress > 1) animationProgress = 0;

      elements.letter12.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter13.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.05);
      elements.letter14.scale = 0 + (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter15.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.05);
      elements.letter16.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.05);
      elements.letter17.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.2);
      elements.letter18.scale = 0.4 - (Math.sin(animationProgress * Math.PI) * 0.3);
      elements.letter19.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter20.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.01);
      elements.letter21.scale = 0.3 - (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter22.scale = 0.08 + (Math.sin(animationProgress * Math.PI) * 0.17);
      elements.letter23.scale = 0.2 - (Math.sin(animationProgress * Math.PI) * 0.15);
      elements.letter24.scale = 0.3 - (Math.sin(animationProgress * Math.PI) * 0.1);
      elements.letter25.scale = 0 + (Math.sin(animationProgress * Math.PI) * 0.4);

      for (const key in elements) {
        const element = elements[key].element;
        if (element && key !== 'screen3' && key !== 'screen4' && key !== 'screen5') {
          element.style.transform = `scaleX(${elements[key].scale})`;
        }
      }
       setInitialPositions();

      requestAnimationFrame(animate);
    };

    setInitialPositions();

    animate();

  }, startDelay); 

});
