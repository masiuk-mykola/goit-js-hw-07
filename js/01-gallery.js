import { galleryItems } from "./gallery-items.js";

const makeGalleryItemsMarkup = (arrObj) => {
  return arrObj
    .map(
      (image) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
        </a>
        </div>`
    )
    .join("");
};

const galleryContainerRef = document.querySelector(".gallery");

const galleryItemsMarkup = makeGalleryItemsMarkup(galleryItems);

galleryContainerRef.insertAdjacentHTML("afterbegin", galleryItemsMarkup);

galleryContainerRef.addEventListener("click", openModal);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`
  );
  instance.show();

  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
