// ==========================
// HEADER SCROLL EFFECT
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background = "#06142e";
header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

}else{

header.style.background = "#081a3a";
header.style.boxShadow = "none";

}

});


// ==========================
// SCROLL ANIMATION
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(".cat-card,.banner,.feature")
.forEach(el=>{

el.classList.add("hidden");
observer.observe(el);

});


// ==========================
// FLOAT HERO IMAGE
// ==========================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x = (window.innerWidth / 2 - e.clientX) / 40;
const y = (window.innerHeight / 2 - e.clientY) / 40;

heroImage.style.transform =
`translate(${x}px, ${y}px)`;

});

}


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

topBtn.classList.add("active");

}else{

topBtn.classList.remove("active");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});


// ==========================
// HERO BUTTON EFFECT
// ==========================

const buttons =
document.querySelectorAll(".btn-primary,.btn-secondary");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform = "translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform = "translateY(0px)";

});

});


// ==========================
// CATEGORY HOVER SOUND STYLE
// ==========================

document.querySelectorAll(".cat-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(244,182,63,.15),
white 50%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background = "#fff";

});

});


// ==========================
// LOADING EFFECT
// ==========================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
// SWIPER PRODUCTS

const productSwiper = new Swiper(".productSwiper", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

 breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6, // لكي يعرض 6 كروت متراصة تماماً كالصورة
      spaceBetween: 20,
    }
  }
});

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if(menuToggle && mainMenu){

menuToggle.addEventListener("click",()=>{

mainMenu.classList.toggle("active");

const icon = menuToggle.querySelector("i");

if(mainMenu.classList.contains("active")){

icon.classList.remove("fa-bars");
icon.classList.add("fa-xmark");

}else{

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

}

});


// إغلاق المنيو عند الضغط على أي رابط

mainMenu.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",()=>{

mainMenu.classList.remove("active");

const icon = menuToggle.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

});

});


// إغلاق المنيو عند الضغط خارجها

document.addEventListener("click",(e)=>{

if(
mainMenu.classList.contains("active") &&
!mainMenu.contains(e.target) &&
!menuToggle.contains(e.target)
){

mainMenu.classList.remove("active");

const icon = menuToggle.querySelector("i");

icon.classList.remove("fa-xmark");
icon.classList.add("fa-bars");

}

});

}

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");

if(menuToggle && mainMenu){

const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click",(e)=>{

e.stopPropagation();

mainMenu.classList.toggle("active");

if(mainMenu.classList.contains("active")){

menuIcon.classList.remove("fa-bars");
menuIcon.classList.add("fa-xmark");

}else{

menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

}

});


// إغلاق المنيو عند الضغط على الرابط

mainMenu.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",()=>{

mainMenu.classList.remove("active");

menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

});

});


// إغلاق المنيو عند الضغط خارجها

document.addEventListener("click",(e)=>{

if(
mainMenu.classList.contains("active") &&
!mainMenu.contains(e.target) &&
!menuToggle.contains(e.target)
){

mainMenu.classList.remove("active");

menuIcon.classList.remove("fa-xmark");
menuIcon.classList.add("fa-bars");

}

});

}
