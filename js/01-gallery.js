import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const li = document.createElement('li');
  li.classList.add('gallery__item');

  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = item.original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.dataset.source = item.original;
  img.alt = item.description;

  a.appendChild(img);
  li.appendChild(a);
  return li;
}

const galleryItemsHTML = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsHTML);

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const source = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${source}" alt="Image description">`);
    instance.show();
  }
});
