document.addEventListener("DOMContentLoaded", () => {
const mainImage = document.querySelector('img.centre');

const thumbnails = document.querySelectorAll('img[class^="space"]');

const dubleImages = [
  document.querySelector('img.duble1'),
  document.querySelector('img.duble2'),
  document.querySelector('img.duble3'),
  document.querySelector('img.duble4'),
  document.querySelector('img.duble5'),
  document.querySelector('img.duble6'),
  document.querySelector('img.duble7'),
  document.querySelector('img.duble8'),
  document.querySelector('img.duble9'),
  document.querySelector('img.duble10'),
  document.querySelector('img.duble11'),
  document.querySelector('img.duble12'),
  document.querySelector('img.duble13')
];

thumbnails.forEach(img => {
  img.addEventListener('click', () => {

    mainImage.src = img.src;

    dubleImages.forEach(dubleImg => {
      if (dubleImg) { 
        dubleImg.src = img.src;
      }
    });
  });
});

const images = document.querySelectorAll('img[class^="lin"]');

function showRandomImages() {
  images.forEach(img => img.style.display = 'none');

  const countToShow = Math.floor(Math.random() * 2) + 5; 

  const indices = Array.from(images.keys());

  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  for (let i = 0; i < countToShow; i++) {
    images[indices[i]].style.display = 'block';
  }
}

showRandomImages();

setInterval(showRandomImages, 800);
})