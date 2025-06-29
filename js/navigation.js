 document.addEventListener("DOMContentLoaded", () => {
      const burDiv = document.getElementById('bur');
      const burgDiv = document.getElementById('burg');

      console.log(burDiv);
      console.log(burgDiv);

      burDiv.addEventListener('click', function() {
        burgDiv.classList.toggle('show');
      });
    });