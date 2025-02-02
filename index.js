import{a as h,i as d,S as y}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=o(s);fetch(s.href,t)}})();const f=e=>`
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
        `,L="48542018-8722dafc38583a35c899e9bbe",v=(e,r,o)=>{const n={params:{key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:o}};return h.get("https://pixabay.com/api/",n)};let a=1,l="",p=15;const b=e=>{e.preventDefault();const r=e.currentTarget.elements.userQuery.value.trim();if(e.currentTarget.elements.userQuery.value="",r.length==0){d.show({title:"Attention !!",color:"red",position:"center",message:"Заполните поле для формирования запроса.."}),a=1;return}r!=l&&(i.innerHTML="",a=1,l=r),g()},g=async()=>{try{m.classList.add("active");const{data:e}=await v(l,a,p);m.classList.remove("active");const r=e.hits;if(r.length==0){d.show({title:"",color:"green",position:"center",message:"Sorry, there are no images matching your search query. Please try again!."}),i.innerHTML="",a=1,l="";return}const o=e.totalHits/p;a<o?c.classList.remove("is-hidden"):(c.classList.add("is-hidden"),d.show({title:"",color:"blu",position:"center",message:"We're sorry, but you've reached the end of search results.!."}));const n=r.map(t=>f(t)).join(""),s=i.innerHTML+n;i.innerHTML=s,new y(".gallery-item a",{captionsData:"alt",captionDelay:250})}catch(e){i.innerHTML="",a=1,l="",d.show({title:"",color:"red",position:"center",message:"Sorry, Что-то пошло не так в запросе ! "}),console.log(e),m.classList.remove("active")}};function w(){a++,c.classList.add("is-hidden"),g()}const m=document.querySelector(".loader"),S=document.querySelector(".js-search-form");S.addEventListener("submit",b);const c=document.querySelector(".load-more-btn");c.classList.add("is-hidden");c.addEventListener("click",w);const i=document.querySelector(".js-gallery");
//# sourceMappingURL=index.js.map
