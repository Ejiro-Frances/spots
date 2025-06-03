var e={};const t=new URL(import.meta.resolve("hNJUz")).href;var i={};const n=new URL(import.meta.resolve("dKJrz")).href;var r={};const l=new URL(import.meta.resolve("3KJz1")).href;var o={};const c=new URL(import.meta.resolve("1esIE")).href;var d={};const s=new URL(import.meta.resolve("3QMWV")).href;var a={};const m=[{imgSrc:t,imgAlt:"Snow-covered mountains in Val Thorens",title:"Val Thorens"},{imgSrc:n,imgAlt:"Restaurant terrace with a view",title:"Restaurant terrace"},{imgSrc:l,imgAlt:"Outdoor cafe with people",title:"An outdoor cafe"},{imgSrc:c,imgAlt:"A long bridge over a forest",title:"A very long bridge, over the forest..."},{imgSrc:s,imgAlt:"A man walking in a tunnel with morning light shining through",title:"Tunnel with morning light"},{imgSrc:new URL(import.meta.resolve("7ViZC")).href,imgAlt:"Mountain house",title:"Mountain house"}],u=document.createElement("style");u.textContent=`
    .like-icon:focus {
      outline: none;
    }

    .like-icon.liked path {
      fill: red;
      stroke: red;
    }
      
    .card-img-container {
    overflow: hidden;
    }

  .card-img {
    transition: transform 0.3s ease-in-out;
  }

  .card.focused .card-img {
    transform: scale(1.1);
  }
  `,document.head.appendChild(u);const g=document.querySelector(".modal"),v=document.querySelector("#editForm"),L=document.querySelector("#profileName"),h=document.querySelector("#profileTitle"),f=document.getElementById("profileImage"),p=document.getElementById("editName"),w=document.getElementById("editDesc"),E=document.getElementById("editImage"),y=document.querySelector("#name-error"),k=document.querySelector("#description-error"),S=document.getElementById("postModal"),b=document.getElementById("newPostForm"),B=document.getElementById("postImage"),C=document.getElementById("post-title"),I=document.getElementById("post-title-error"),A=document.getElementById("post-img-error"),M=document.getElementById("customUpload"),q=document.getElementById("uploadPreview"),R=document.getElementById("uploadText");M.addEventListener("click",()=>{B.click()}),B.addEventListener("change",()=>{let e=B.files[0];if(e){let t=new FileReader;t.onload=function(e){q.src=e.target.result,q.classList.remove("hidden"),R.classList.add("hidden")},t.readAsDataURL(e)}});const x=document.querySelector(".modal"),T=document.getElementById("editBtn"),U=document.getElementById("cancelBtn"),$=document.getElementById("postModal"),H=document.querySelector("#post-btn"),D=document.getElementById("closeModal"),F=document.querySelector(".container");F&&(F.innerHTML="",m.forEach(e=>{let t=`
      <article class="card">
        <div class="card-img-container">
          <img
            src="${e.imgSrc}"
            alt="${e.imgAlt}"
            class="card-img"
            loading="lazy"
          />
        </div>

        <div class="card-description">
          <p class="card-title">${e.title}</p>
          <div class="like">
            <svg
              class="like-icon"
              role="button"
              tabindex="0"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Like button"
            >
              <path
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                stroke="#212121"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </article>
    `;F.insertAdjacentHTML("beforeend",t),console.log(e.imgSrc)}),F.addEventListener("click",e=>{let t=e.target.closest(".like-icon");t&&t.classList.toggle("liked")})),v.addEventListener("submit",e=>{e.preventDefault();let t=!1;if(p.value.trim().length<2?(y.classList.remove("hidden"),y.textContent="Minimum of 2 characters",t=!0):y.classList.add("hidden"),w.value.trim().length<2?(k.classList.remove("hidden"),k.textContent="Minimum of 2 characters",t=!0):k.classList.add("hidden"),!t){if(L.textContent=p.value.trim(),h.textContent=w.value.trim(),E.files&&E.files[0]){let e=new FileReader;e.onload=function(e){f.src=e.target.result},e.readAsDataURL(E.files[0])}g.close(),v.reset()}}),function(e){let t=document.querySelector(e),i=document.querySelector(".previewable-modal"),n=!1,r=null;function l(e){let t=e.target.closest(".previewable-images"),i=r&&e.target===r;t||i||o()}function o(){n&&(n=!1,i.close(),document.body.removeEventListener("click",l),r=null)}t.addEventListener("click",e=>{let t=e.target.closest("img");if(!t)return;let c=t.getAttribute("src"),d=c.split("/").pop(),s=m.find(e=>e.imgSrc.split("/").pop()===d);if(!s)return void console.warn("No card found for image:",c);r=t,i.innerHTML="",i.showModal(),n=!0,setTimeout(()=>{i.classList.add("show"),document.body.addEventListener("click",l)},0);let a=document.createElement("div");a.innerHTML=`
         <div class="previewable-images">
          <div class="card-img-container">
            <img
              src="${s.imgSrc}"
              alt="${s.imgAlt}"
              class="card-img preview-img"
            />
          </div>
         <p class="previewable-title">${s.title}</p>
      </div>
         `,i.appendChild(a);let u=document.createElement("img");u.src="./assets/icons/x-close-delete-svgrepo-com.svg",u.classList.add("delete-icon"),u.addEventListener("click",()=>{o()}),i.appendChild(u)})}(".container"),b.addEventListener("submit",function(e){e.preventDefault();let t=C.value.trim();if(!t)return void I.classList.remove("hidden");if(!B.files||!B.files[0])return void A.classList.remove("hidden");let i=new FileReader;i.onload=function(e){let i=e.target.result;m.unshift({imgSrc:i,imgAlt:t,title:t});let n=document.createElement("div");n.className="card",n.innerHTML=`
        <div class="card-img-container">
          <img class="card-img" src="${i}" alt="${t}" />
        </div>
        <div class="card-description">
          <p class="card-title">${t}</p>
           <div class="like">
            <svg
              class="like-icon"
              role="button"
              tabindex="0"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Like button"
            >
              <path
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                stroke="#212121"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      `,document.querySelector(".container").prepend(n),n.querySelector(".card-img"),S.close(),b.reset(),q.classList.add("hidden"),q.src="",R.classList.remove("hidden")},i.readAsDataURL(B.files[0])}),function(e){let t=document.querySelector(e);if(!t)return;let i=t.querySelector(".card");i&&i.classList.add("focused"),t.addEventListener("mouseover",e=>{let i=e.target.closest(".card");i&&(t.querySelectorAll(".card").forEach(e=>{e.classList.remove("focused")}),i.classList.add("focused"))}),t.addEventListener("mouseleave",()=>{t.querySelectorAll(".card").forEach(e=>{e.classList.remove("focused")})})}(".container"),T.addEventListener("click",()=>{x.showModal()}),U.addEventListener("click",()=>x.close()),H.addEventListener("click",()=>$.showModal()),D.addEventListener("click",()=>$.close()),window.addEventListener("click",e=>{(e.target===$||e.target===x)&&($.close(),x.close())});
//# sourceMappingURL=altschool-circle1-insta-spot-assignment-02.f5196084.js.map
