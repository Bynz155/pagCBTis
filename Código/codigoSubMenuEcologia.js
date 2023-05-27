const buttonSubMenu = document.querySelector(".button__submenu__ecologia");
const ulSubMenu = document.querySelector(".ul__submenu__ecologia")

buttonSubMenu.addEventListener("click", () => {
    ulSubMenu.classList.toggle("activo");
})