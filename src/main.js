// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import {createGaleryCard} from './js/render-functions';

import {getPhotos} from './js/pixabay-api';
import axios from 'axios';
let currentPage=1;
let dataUserQuery="";
let currentPerPage=15;

const TestAndSearch =  event => {
        event.preventDefault();
        const newUserQuery=event.currentTarget.elements.userQuery.value.trim();
        event.currentTarget.elements.userQuery.value="";
        if (newUserQuery.length ==0){
            iziToast.show({
                title: 'Attention !!',
                color: 'red',
                position:'center',
                message: 'Заполните поле для формирования запроса..'
            });
            currentPage=1;
            return;
        }
        if (newUserQuery != dataUserQuery){
            galleryUlList.innerHTML= '';
            currentPage=1;
            dataUserQuery=newUserQuery;
        }
        currentSearch();
    }

const currentSearch = async () => {
    try {
        loader.classList.add('active'); // on loader
        const {data} = await getPhotos(dataUserQuery, currentPage, currentPerPage);
        loader.classList.remove('active'); // off loader 
        const pictInfo = data.hits;
        
        if (pictInfo.length == 0) {
             iziToast.show({
                    title: '',
                    color: 'green',
                    position:'center',
                    message: 'Sorry, there are no images matching your search query. Please try again!.'
                });
            galleryUlList.innerHTML= '';
            currentPage=1;
            dataUserQuery="";
            return;
            }          
        const totalPage = data.totalHits/currentPerPage;
        
        if (currentPage < totalPage){
            loadMoreBtn.classList.remove('is-hidden'); // Показати кнопку пагінації
            }
        else {
            loadMoreBtn.classList.add('is-hidden'); // Off кнопку пагінації
            iziToast.show({
                title: '',
                color: 'blu',
                position:'center',
                message: "We're sorry, but you've reached the end of search results.!."

            });
        }  
        
        const gallerySmallCard = 
                    pictInfo.map(pictInfo => createGaleryCard(pictInfo)).join('');
    
        const allCard=  galleryUlList.innerHTML+gallerySmallCard;
        galleryUlList.innerHTML = allCard;

        new SimpleLightbox('.gallery-item a',{captionsData: 'alt', captionDelay:250});
        }
        catch (err) {
            galleryUlList.innerHTML= '';
            currentPage=1;
            dataUserQuery="";
            iziToast.show({
                title: '',
                color: 'red',
                position:'center',
                message: 'Sorry, Что-то пошло не так в запросе ! '
            });
            console.log(err);
            loader.classList.remove('active'); // off loader
        }
    }

function nextPageSearch()  {
    currentPage ++;
    loadMoreBtn.classList.add('is-hidden'); // Off кнопку пагінації
    currentSearch();
}

const loader = document.querySelector('.loader'); 

const startBtn = document.querySelector('.js-search-form');
startBtn.addEventListener('submit', TestAndSearch);

const loadMoreBtn = document.querySelector('.load-more-btn');
loadMoreBtn.classList.add('is-hidden'); // Off кнопку пагінації
loadMoreBtn.addEventListener('click', nextPageSearch);

const galleryUlList = document.querySelector('.js-gallery');


