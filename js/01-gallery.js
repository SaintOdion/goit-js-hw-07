import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </li>`
  )
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
  `);

  instance.show();

  document.addEventListener("keydown", onEscapeKeydown);

  function onEscapeKeydown(evt) {
    if (evt.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onEscapeKeydown);
    }
  }
}

console.log(galleryItems);
