import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const loaderText = document.querySelector('.loader-text');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  if (!galleryContainer) return;
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <ul>
            <li><h3>Likes</h3><p>${image.likes}</p></li>
            <li><h3>Views</h3><p>${image.views}</p></li>
            <li><h3>Comments</h3><p>${image.comments}</p></li>
            <li><h3>Downloads</h3><p>${image.downloads}</p></li>
          </ul>
        </div>
      </li>`
    )
    .join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
}

export function showLoader() {
  if (loader) {
    loader.classList.remove('hidden');
  }
}

export function hideLoader() {
  if (loader) {
    loader.classList.add('hidden');
  }
}

export function showLoadMoreButton() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.remove('hidden');
  }
}

export function hideLoadMoreButton() {
  if (loadMoreBtn) {
    loadMoreBtn.classList.add('hidden');
  }
}

export function showLoaderText() {
  if (loaderText) {
    loaderText.classList.remove('hidden');
  }
}

export function hideLoaderText() {
  if (loaderText) {
    loaderText.classList.add('hidden');
  }
}
