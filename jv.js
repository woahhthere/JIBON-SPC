const title = document.querySelector(".about__nav li a");
const desc = document.querySelector(".about__nav-up");

title.addEventListener("click",() =>{
    desc.classList.toggle("open");
    title.classList.toggle("open");
})