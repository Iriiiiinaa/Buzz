document.addEventListener('DOMContentLoaded', () => {
    // Получаем элементы из DOM. Удостоверьтесь, что у вас есть все эти элементы с соответствующими ID в HTML.
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

    // Определяем расстояния между элементами в viewport width (vw).
    const initialDistanceVW = 0.2; // расстояние между буквами
    const image1DistanceVW = 0.2; // Расстояние перед screen3
    const image2DistanceVW = 0.2; // Расстояние между screen3 и screen4

    // Создаем объект elements, содержащий информацию о каждом элементе
    const elements = {
        letter12: { element: letter12, initialWidthVW: 0, scale: 0 },
        letter13: { element: letter13, initialWidthVW: 0, scale: 0 },
        letter14: { element: letter14, initialWidthVW: 0, scale: 0 },
        letter15: { element: letter15, initialWidthVW: 0, scale: 0 },
        screen3: { element: screen3, initialWidthVW: 0, scale: 1 }, // scale: 1 означает, что не масштабируем
        screen4: { element: screen4, initialWidthVW: 0, scale: 1 }, // scale: 1 означает, что не масштабируем
        letter16: { element: letter16, initialWidthVW: 0, scale: 0 },
        letter17: { element: letter17, initialWidthVW: 0, scale: 0 },
        letter18: { element: letter18, initialWidthVW: 0, scale: 0 }, // Если не используешь - закомментируй
        letter19: { element: letter19, initialWidthVW: 0, scale: 0 },
        letter20: { element: letter20, initialWidthVW: 0, scale: 0 },
        letter21: { element: letter21, initialWidthVW: 0, scale: 0 },
        letter22: { element: letter22, initialWidthVW: 0, scale: 0 },
        screen5: { element: screen5, initialWidthVW: 0, scale: 1 }, // scale: 1 означает, что не масштабируем
        letter23: { element: letter23, initialWidthVW: 0, scale: 0 },
        letter24: { element: letter24, initialWidthVW: 0, scale: 0 },
        letter25: { element: letter25, initialWidthVW: 0, scale: 0 },
    };

    // Управляет прогрессом анимации. Значение от 0 до 1.
    let animationProgress = 0;
    // Длительность анимации в миллисекундах.
    const animationDuration = 4000; // длина анимации в мс

    // Запускаем код после небольшой задержки, чтобы убедиться, что все элементы DOM полностью загружены.
    setTimeout(() => {
        // Получаем начальные размеры
        for (const key in elements) {
            if (elements[key].element) { // Проверяем, что элемент существует
                elements[key].initialWidthVW = parseFloat(getComputedStyle(elements[key].element).width) / document.documentElement.clientWidth * 100;
            }
        }

        // Устанавливаем начальное положение элементов
        let currentLeft = 0;
        for (const key in elements) {
            if (key === 'letter12') {
                continue; // letter12 остается в позиции 0
            }

            let distance = initialDistanceVW;
            if (key === 'screen3') {
                distance = image1DistanceVW;
            } else if (key === 'screen4') {
                distance = image2DistanceVW;
            }

            const previousKey = Object.keys(elements)[Object.keys(elements).indexOf(key) - 1];
            if (elements[previousKey] && elements[key].element) {
                currentLeft += elements[previousKey].initialWidthVW * (elements[previousKey].scale === 0 ? 1 : elements[previousKey].scale) + distance;
                elements[key].element.style.left = `${currentLeft}vw`;
            }
        }

        // Функция анимации, которая вызывается requestAnimationFrame.
        function animate() {
            // Обновляем прогресс анимации.
            animationProgress += 16 / animationDuration;

            // Если прогресс превышает 1, возвращаем его к 0 (циклическая анимация).
            if (animationProgress > 1) {
                animationProgress = 0;
            }

            // Вычисляем масштаб для каждой буквы на основе прогресса анимации.
            elements.letter12.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.1);  // От 0 до 0.2
            elements.letter13.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.05); // От 0 до 0.4
            elements.letter14.scale = 0 + (Math.sin(animationProgress * Math.PI) * 0.1); // От 0 до 0.4
            elements.letter15.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.05); // От 0 до 0.4
            elements.letter16.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.05); // От 0 до 0.4
            elements.letter17.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.2); // От 0 до 0.4
            elements.letter18.scale = 0.4 - (Math.sin(animationProgress * Math.PI) * 0.3); // От 0 до 0.4
            elements.letter19.scale = 0.1 - (Math.sin(animationProgress * Math.PI) * 0.1); // От 0 до 0.4
            elements.letter20.scale = 0.1 + (Math.sin(animationProgress * Math.PI) * 0.01); // От 0 до 0.4
            elements.letter21.scale = 0.3 - (Math.sin(animationProgress * Math.PI) * 0.1); // От 0 до 0.4
            elements.letter22.scale = 0.08 + (Math.sin(animationProgress * Math.PI) * 0.17); // От 0 до 0.4
            elements.letter23.scale = 0.2 - (Math.sin(animationProgress * Math.PI) * 0.15); // От 0 до 0.4
            elements.letter24.scale = 0.3 - (Math.sin(animationProgress * Math.PI) * 0.1); // От 0 до 0.4
            elements.letter25.scale = 0 + (Math.sin(animationProgress * Math.PI) * 0.4); // От 0 до 0.4

            // Применяем трансформацию масштаба к буквам.
            for (const key in elements) {
                if (key !== 'screen3' && key !== 'screen4' && elements[key].element) { // Исключаем screen3 и screen4
                    elements[key].element.style.transform = `scaleX(${elements[key].scale})`;
                }
            }

            // Обновляем позицию элементов
            currentLeft = 0;

            for (const key in elements) {
                if (key === 'letter12') {
                    continue; // letter12 остается в позиции 0
                }

                let distance = initialDistanceVW;
                if (key === 'screen3') {
                    distance = image1DistanceVW;
                } else if (key === 'screen4') {
                    distance = image2DistanceVW;
                }

                const previousKey = Object.keys(elements)[Object.keys(elements).indexOf(key) - 1];
                if (elements[previousKey] && elements[key].element) {
                    currentLeft += elements[previousKey].initialWidthVW * elements[previousKey].scale + distance;
                    elements[key].element.style.left = `${currentLeft}vw`;
                }
            }

            // Запрашиваем следующий кадр анимации.
            requestAnimationFrame(animate);
        }

        // Запускаем анимацию.
        animate();
    }, 50);

     //  Здесь можно добавить новый шрифт.  Просто добавьте тег <link> для вашего шрифта в HTML (например, из Google Fonts).
    //  Затем используйте CSS, чтобы применить этот шрифт к элементам, которые вы хотите стилизовать.
    //  Например:
    //  document.body.style.fontFamily = '"Your Font Name", sans-serif';

    //  Чтобы добавить новые изображения, убедитесь, что у вас есть элементы <img> в вашем HTML.
    //  Установите атрибут 'src' этих изображений, чтобы указать на путь к вашим новым изображениям.
    //  Например:
    //  const newImage = document.createElement('img');
    //  newImage.src = 'path/to/your/image.jpg';
    //  document.body.appendChild(newImage); // Добавляем изображение в body или в любой другой элемент.
});
