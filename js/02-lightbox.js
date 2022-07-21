import { galleryItems } from "./gallery-items.js";

const makeGalleryItemsMarkup = (arrObj) => {
  return arrObj
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>`
    )
    .join("");
};

const galleryContainerRef = document.querySelector(".gallery");

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
