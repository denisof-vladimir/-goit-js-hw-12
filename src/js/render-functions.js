// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

export const createGaleryCard = pictInfo => {
    return `
         <li class="gallery-item list">
            <a class="gallery-link" href="${pictInfo.largeImageURL}">
                <img
                    class="gallery-image"
                    width="150 px"
                    heigth="150 px"
                    src="${pictInfo.previewURL}"
                    data-source="${pictInfo.largeImageURL}"
                    alt="${pictInfo.tags}"
                />
                <div class="info-about">
                    <div class="info">
                        <span class="cl-name">Likes</span>
                        <span class="cl-number" >${pictInfo.likes}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Views</span>
                        <span class="cl-number" >${pictInfo.views}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Comments</span>
                        <span class="cl-number" >${pictInfo.comments}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Downloads</span>
                        <span class="cl-number" >${pictInfo.downloads}</span>
                        </div>
                </div>
            </a>
        </li>
        `;
    };
