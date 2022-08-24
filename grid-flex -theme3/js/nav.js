const chutku = document.querySelector(".nav__chutku");
const nav = document.querySelector(".nav");


chutku.addEventListener("click", () => {
    nav.classList.toggle("target");
    chutku.classList.toggle("target");
})


