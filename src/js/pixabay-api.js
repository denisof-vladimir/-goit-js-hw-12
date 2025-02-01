// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from 'axios';

const API_KEY = '48542018-8722dafc38583a35c899e9bbe'; 
export const  getPhotos = (query, page, per_page) => {
  const axiosOptions = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: per_page,
    },
  };
  return  axios.get("https://pixabay.com/api/", axiosOptions);
};

