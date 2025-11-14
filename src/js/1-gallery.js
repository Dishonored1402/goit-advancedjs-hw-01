//import SimpleLightbox from 'simplelightbox';
//import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');

if (!galleryList) {
  console.warn('Gallery root not found on this page');
} else {
  const galleryItems = [
    {
      preview: new URL('../img/gallery-1.jpg', import.meta.url).href,
      original: new URL('../img/gallery-1.jpg', import.meta.url).href,
      description: 'Team planning interface',
    },
    {
      preview: new URL('../img/gallery-2.jpg', import.meta.url).href,
      original: new URL('../img/gallery-2.jpg', import.meta.url).href,
      description: 'Light bulb and plant on table',
    },
    {
      preview: new URL('../img/gallery-3.jpg', import.meta.url).href,
      original: new URL('../img/gallery-3.jpg', import.meta.url).href,
      description: 'Phone with design notes',
    },
    {
      preview: new URL('../img/gallery-4.jpg', import.meta.url).href,
      original: new URL('../img/gallery-4.jpg', import.meta.url).href,
      description: 'Modern office interior',
    },
    {
      preview: new URL('../img/gallery-5.jpg', import.meta.url).href,
      original: new URL('../img/gallery-5.jpg', import.meta.url).href,
      description: 'Colorful office space',
    },
    {
      preview: new URL('../img/gallery-6.jpg', import.meta.url).href,
      original: new URL('../img/gallery-6.jpg', import.meta.url).href,
      description: 'Open workspace with people',
    },
    {
      preview: new URL('../img/gallery-7.jpg', import.meta.url).href,
      original: new URL('../img/gallery-7.jpg', import.meta.url).href,
      description: 'Coffee and laptop on desk',
    },
    {
      preview: new URL('../img/gallery-8.jpg', import.meta.url).href,
      original: new URL('../img/gallery-8.jpg', import.meta.url).href,
      description: 'Person in yellow sweater',
    },
    {
      preview: new URL('../img/gallery-9.jpg', import.meta.url).href,
      original: new URL('../img/gallery-9.jpg', import.meta.url).href,
      description: 'Team presentation in office',
    },
  ];

  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join('');

  galleryList.innerHTML = markup;

 // const lightbox = new SimpleLightbox('.gallery a', {
 //   captions: true,
 //   captionsData: 'alt',
 //   captionPosition: 'bottom',
 //   captionDelay: 250,
 // });

  console.log('Gallery initialized');
}
