
document.addEventListener("DOMContentLoaded", cargar);

"use strict"
function cargar() {

    let valor1 = Math.floor((Math.random() * 10) + 1);
    let valor2 = Math.floor((Math.random() * 10) + 1);
    let valor_a_ingresar = valor1 + valor2;
    document.getElementById("resultado").innerHTML = valor1;
    document.getElementById("resultadob").innerHTML = valor2;
    let form = document.querySelector("#form");
    form.addEventListener('submit', prevent);


    function prevent(e) {
        e.preventDefault();
        console.log('ok');
        validarDatos();
        validarCaptcha();
    }
    function validarCaptcha() {
        let ingresado = document.querySelector("#captcha_usuario").value;
        let mens_usuario = document.querySelector("#mensaje");
        if (ingresado == valor_a_ingresar) {
            console.log("entro");
            mens_usuario.innerHTML = "Registración exitosa";
        } else {
            mens_usuario.innerHTML = "Vuelve a intentarlo";
        }
    }

    function validarDatos() {
        let formData = new FormData(form);
        let email = formData.get('email');
        let nombre = formData.get('nombre');
        let apellido = formData.get('apellido');
        let password = formData.get('password');
        console.log(email, nombre, password);
    }
}



