const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".list-nav");
const barras = document.querySelectorAll(".ham span")

ham.addEventListener("click", (event) => {
    enlaces.classList.toggle("activado");
    barras.forEach(child => {
        child.classList.toggle("animado");
    });
})
