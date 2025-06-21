
document.addEventListener('DOMContentLoaded', () => {
  const letter26 = document.getElementById('letter26');
  const letter27 = document.getElementById('letter27');
  const letter28 = document.getElementById('letter28');
  const letter29 = document.getElementById('letter29');
  const screen6 = document.getElementById('screen6');
  const letter30 = document.getElementById('letter30');
  const letter31 = document.getElementById('letter31');
  const letter32 = document.getElementById('letter32');
  const letter33 = document.getElementById('letter33');
  const letter34 = document.getElementById('letter34');
  const letter35 = document.getElementById('letter35');
  const letter36 = document.getElementById('letter36');
  const letter37 = document.getElementById('letter37');
  const letter38 = document.getElementById('letter38');
  const letter39 = document.getElementById('letter39');
  const letter40 = document.getElementById('letter40');
  const letter41 = document.getElementById('letter41');

  const initialDistanceVW = 0.2;
  const image1DistanceVW = 0.2;
  const animationDuration = 5500;
  const startDelay = 50;

  const elements = {
    letter26: { element: letter26, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter27: { element: letter27, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter28: { element: letter28, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter29: { element: letter29, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    screen6: { element: screen6, initialWidthVW: 0, scale: 1, scaleY: 1 },
    letter30: { element: letter30, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter31: { element: letter31, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter32: { element: letter32, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter33: { element: letter33, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter34: { element: letter34, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter35: { element: letter35, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter36: { element: letter36, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter37: { element: letter37, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter38: { element: letter38, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter39: { element: letter39, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter40: { element: letter40, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
    letter41: { element: letter41, initialWidthVW: 0, scale: 0.1, scaleY: 1 },
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
        if (key === 'letter26') continue; 

        let distance = initialDistanceVW;
        if (key === 'screen6') distance = image1DistanceVW;

        const prevKey = Object.keys(elements)[Object.keys(elements).indexOf(key) - 1];
        const previousElement = elements[prevKey].element;
        const currentElement = elements[key].element;

        if (previousElement && currentElement) {
          currentLeft += getElementWidthInVW(previousElement) * elements[prevKey].scale + distance;
          currentElement.style.left = `${currentLeft}vw`;
        }
      }
    };

    let animationProgress = 0;

    const animate = () => {
      animationProgress += 16 / animationDuration;
      if (animationProgress > 1) animationProgress = 0;

      elements.letter26.scale = 0.1 + Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter27.scale = 0.2 - Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter28.scale = 0.1 + Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter29.scale = 0.2 - Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter30.scale = 0.4 - Math.sin(animationProgress * Math.PI) * 0.2;
      elements.letter31.scale = 0.2 - Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter32.scale = 0 + Math.sin(animationProgress * Math.PI) * 0.5;
      elements.letter33.scale = 0.3 - Math.sin(animationProgress * Math.PI) * 0.2;
      elements.letter34.scale = 0.1 + Math.sin(animationProgress * Math.PI) * 0.2;
      elements.letter35.scale = 0.5 - Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter36.scale = 0 + Math.sin(animationProgress * Math.PI) * 0.1;
      elements.letter37.scale = 0.25 - Math.sin(animationProgress * Math.PI) * 0.2;
      elements.letter38.scale = 0.2 + Math.sin(animationProgress * Math.PI) * 0.2;
      elements.letter39.scale = 0.2 - Math.sin(animationProgress * Math.PI) * 0.15;
      elements.letter40.scale = 0.4 + Math.sin(animationProgress * Math.PI) * 0.15;
      elements.letter41.scale = 0.3 - Math.sin(animationProgress * Math.PI) * 0.3;

      elements.letter32.scaleY = 0.86;

      for (const key in elements) {
        const el = elements[key].element;
        if (!el) continue;

        if (key === 'letter32') {
          el.style.transform = `scaleX(${elements[key].scale}) scaleY(${elements[key].scaleY})`;
        } else {
          el.style.transform = `scaleX(${elements[key].scale})`;
        }
      }
      setInitialPositions()

      requestAnimationFrame(animate);
    };

    setInitialPositions();

    animate();
  }, startDelay);
});
