 document.addEventListener("DOMContentLoaded", () => {
      const burDiv = document.getElementById('bur');
      const burgDiv = document.getElementById('burg');

      console.log(burDiv); // Проверка
      console.log(burgDiv); // Проверка

      burDiv.addEventListener('click', function() {
        burgDiv.classList.toggle('show');
      });
    });