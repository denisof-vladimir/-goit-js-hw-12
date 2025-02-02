import{a as h,S as y,i as d}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();const f=e=>`
         <li class="gallery-item list">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img
                    class="gallery-image"
                    width="150 px"
                    heigth="150 px"
                    src="${e.previewURL}"
                    data-source="${e.largeImageURL}"
                    alt="${e.tags}"
                />
                <div class="info-about">
                    <div class="info">
                        <span class="cl-name">Likes</span>
                        <span class="cl-number" >${e.likes}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Views</span>
                        <span class="cl-number" >${e.views}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Comments</span>
                        <span class="cl-number" >${e.comments}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Downloads</span>
                        <span class="cl-number" >${e.downloads}</span>
                        </div>
                </div>
            </a>
        </li>
        `,v="48542018-8722dafc38583a35c899e9bbe",L=(e,r,i)=>{const n={params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:i}};return h.get("https://pixabay.com/api/",n)};let a=1,c="",g=15,b=new y(".gallery a",{captionsData:"alt",captionDelay:250});const w=e=>{e.preventDefault();const r=e.currentTarget.elements.userQuery.value.trim();if(e.currentTarget.elements.userQuery.value="",r.length==0){d.show({title:"Attention !!",color:"red",position:"center",message:"Заполните поле для формирования запроса.."}),a=1;return}r!=c&&(l.innerHTML="",a=1,c=r),p()},p=async()=>{try{m.classList.add("active");const{data:e}=await L(c,a,g);m.classList.remove("active");const r=e.hits;if(o.classList.add("is-hidden"),r.length==0){d.show({title:"",color:"green",position:"center",message:"Sorry, there are no images matching your search query. Please try again!."}),l.innerHTML="",a=1,c="";return}const i=e.totalHits/g;a<i?o.classList.remove("is-hidden"):(o.classList.add("is-hidden"),d.show({title:"",color:"blu",position:"center",message:"We're sorry, but you've reached the end of search results.!."}));const n=r.map(t=>f(t)).join("");l.insertAdjacentHTML("beforeend",n),b.refresh();const s=l.getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch(e){l.innerHTML="",a=1,c="",d.show({title:"",color:"red",position:"center",message:"Sorry, Что-то пошло не так в запросе ! "}),console.log(e),m.classList.remove("active")}};function S(){a++,o.classList.add("is-hidden"),p()}const m=document.querySelector(".loader"),P=document.querySelector(".js-search-form");P.addEventListener("submit",w);const o=document.querySelector(".load-more-btn");o.classList.add("is-hidden");o.addEventListener("click",S);const l=document.querySelector(".js-gallery");
//# sourceMappingURL=index.js.map
