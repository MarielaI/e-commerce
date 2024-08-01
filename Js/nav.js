
document.addEventListener("DOMContentLoaded", cargar);

"use strict"

function cargar() {
    document.querySelector(".boton_menu").addEventListener("click", toggleMenu);

    function toggleMenu() {
        document.querySelector(".lista_ul").classList.toggle("mostrar");
    }
}
