import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function createGalleryItem(item) {
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = item.original;

  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = item.preview;
  img.alt = item.description;

  a.appendChild(img);
  return a;
}

const galleryItemsHTML = galleryItems.map(createGalleryItem);
gallery.append(...galleryItemsHTML);

// Підключення бібліотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
