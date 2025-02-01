import{a as y,i,S as h}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();const f=e=>`
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
        `,v="48542018-8722dafc38583a35c899e9bbe",L=(e,r,a)=>{const n={params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:a}};return y.get("https://pixabay.com/api/",n)};let o=1,c="",p=15;const b=e=>{e.preventDefault();const r=e.currentTarget.elements.userQuery.value.trim();if(e.currentTarget.elements.userQuery.value="",r.length==0){i.show({title:"Attention !!",color:"red",position:"center",message:"Заполните поле для формирования запроса.."}),o=1;return}r!=c&&(l.innerHTML="",o=1,c=r),g()},g=async()=>{try{m.classList.add("active");const{data:e}=await L(c,o,p);m.classList.remove("active");const r=e.totalHits/p;o<r?d.classList.remove("is-hidden"):i.show({title:"",color:"blu",position:"center",message:"We're sorry, but you've reached the end of search results.!."});const a=e.hits;if(a.length==0){i.show({title:"",color:"green",position:"center",message:"Sorry, there are no images matching your search query. Please try again!."}),l.innerHTML="",o=1,c="";return}const n=a.map(t=>f(t)).join(""),s=l.innerHTML+n;l.innerHTML=s,new h(".gallery-item a",{captionsData:"alt",captionDelay:250})}catch(e){i.show({title:"",color:"red",position:"center",message:"Sorry, Что-то пошло не так в запросе ! "}),console.log(e),m.classList.remove("active")}};function w(){o++,d.classList.add("is-hidden"),g()}const m=document.querySelector(".loader"),S=document.querySelector(".js-search-form");S.addEventListener("submit",b);const d=document.querySelector(".load-more-btn");d.classList.add("is-hidden");d.addEventListener("click",w);const l=document.querySelector(".js-gallery");
//# sourceMappingURL=index.js.map
