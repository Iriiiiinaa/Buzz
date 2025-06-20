
document.addEventListener("DOMContentLoaded", () => {
    const linn = document.querySelector('.linn');
    const linn1 = document.querySelector('.linn1');

    // Элементы для .linn
    const shopItems = Array.from(document.querySelectorAll('.linn .shop1, .linn .shop2, .linn .shop3, .linn .shop4, .linn .shop5, .linn .shop6, .linn .shop7, .linn .shop8, .linn .shop9, .linn .shop10, .linn .shop11, .linn .shop12, .linn .shop13, .linn .shop14, .linn .shop15, .linn .shop16'));

    // Элементы для .linn1
    const shopItems1 = Array.from(document.querySelectorAll('.linn1 .shop17, .linn1 .shop18, .linn1 .shop19, .linn1 .shop20, .linn1 .shop21, .linn1 .shop22, .linn1 .shop23, .linn1 .shop24, .linn1 .shop25, .linn1 .shop26, .linn1 .shop27, .linn1 .shop28, .linn1 .shop29, .linn1 .shop30, .linn1 .shop31, .linn1 .shop32'));


    const itemHeight = 14; // Приблизительная высота одного элемента .shop (в vw)

    // Скорость движения для каждой линии
    const speed1 = -0.3; // Скорость для .linn
    const speed2 = -0.4; // Скорость для .linn1

    // Функция для обработки наведения (универсальная)
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

    // Инициализация обработчиков наведения для всех элементов .linn
    const shopElements = document.querySelectorAll('.linn [class^="shop"]');
    shopElements.forEach(shopElement => {
        const shopNumber = shopElement.className.match(/shop(\d+)/)[1];  // Извлекаем номер из класса (shop1, shop2, ...)
        const shhopElement = document.querySelector(`.shhop${shopNumber}`);
        if (shhopElement) {
            handleShopHover(shopElement, shhopElement);
        }
    });

    // Инициализация обработчиков наведения для всех элементов .linn1
    const shopElements1 = document.querySelectorAll('.linn1 [class^="shop"]');
    shopElements1.forEach(shopElement => {
        const shopNumber = shopElement.className.match(/shop(\d+)/)[1];  // Извлекаем номер из класса (shop1, shop2, ...)
        const shhopElement = document.querySelector(`.shhop${shopNumber}`);
        if (shhopElement) {
            handleShopHover(shopElement, shhopElement);
        }
    });



    // Сохраняем начальные значения top для .linn
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

    // Сохраняем начальные значения top для .linn1
    const initialTops1 = {
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

    // Функция для сброса элемента .linn
    function resetShopItem(item, shopItemsArray, initialTopsObject) {
        let newTop;
        let currentItemNumber = parseInt(item.className.replace('shop', ''));
        let nextItemNumber = currentItemNumber + 1;
        let maxShopNumber = Object.keys(initialTopsObject).length; // Получаем максимальный номер shop

        if (nextItemNumber > maxShopNumber) {
            nextItemNumber = Object.keys(initialTopsObject).reduce((minKey, key) => { // Находим минимальный ключ
                return key < minKey ? key : minKey;
            });
            nextItemNumber = parseInt(nextItemNumber.replace('shop', ''));
        }

        //Найдем индекс следующего элемента:
        let nextElementIndex = shopItemsArray.findIndex(item => item.classList.contains('shop' + nextItemNumber));

        if (nextElementIndex === -1) {
            newTop = parseFloat(shopItemsArray[shopItemsArray.length - 1].style.top) + itemHeight;
        } else {
            newTop = parseFloat(shopItemsArray[nextElementIndex].style.top) - itemHeight;
        }

        item.style.top = `${newTop}vw`;
    }


    function animate() {
        // Анимация для .linn
        for (let i = 0; i < shopItems.length; i++) {
            const item = shopItems[i];
            let currentTop = parseFloat(item.style.top);

            item.style.top = `${currentTop + speed1}vw`; // Используем speed1

            if (currentTop > initialTops['shop16'] + itemHeight) {
                resetShopItem(item, shopItems, initialTops);
            }
        }

        // Анимация для .linn1
        for (let i = 0; i < shopItems1.length; i++) {
            const item = shopItems1[i];
            let currentTop = parseFloat(item.style.top);

            item.style.top = `${currentTop + speed2}vw`; // Используем speed2

            if (currentTop > initialTops1['shop32'] + itemHeight) {
                resetShopItem(item, shopItems1, initialTops1);
            }
        }


        requestAnimationFrame(animate);
    }

    // Инициализация начального положения элементов для .linn
    shopItems.forEach(item => {
        const currentClass = item.className.split(' ')[0].split(' ')[0];
        item.style.top = `${initialTops[currentClass]}vw`;
    });

    // Инициализация начального положения элементов для .linn1
    shopItems1.forEach(item => {
        const currentClass = item.className.split(' ')[0].split(' ')[0];
        item.style.top = `${initialTops1[currentClass]}vw`;
    });


    animate();
});
