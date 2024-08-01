
document.addEventListener("DOMContentLoaded", cargar);
"use strict"

function cargar() {
    let compras = [];

    function agregar() {
        let producto = document.querySelector("#producto").value;
        let cantidad = parseInt(document.querySelector("#cantidad").value);
        let precioUni = parseInt(document.querySelector("#precio_unit").value);
        let item = {
            "producto": producto,
            "cantidad": cantidad,
            "precioUni": precioUni,
            "total": precioUni * cantidad,
        }
        compras.push(item);
        console.table(compras);
        mostrar();
    }

    function sumar_resaltar() {
        let cantidad = 0;
        let total = 0;
        for (let item of compras) {
            total += item.total;
            cantidad += item.cantidad;
        }
        let tabla = document.querySelector("#t_din");
        let pie_tabla = document.querySelector(".total_resaltado");
        let fila = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerHTML = "Total";
        let col2 = document.createElement("td");
        col2.innerHTML += cantidad;
        let col3 = document.createElement("td");
        col3.innerText = 0;
        let col4 = document.createElement("td");
        col4.innerText += +total;
        pie_tabla.appendChild(fila);
        fila.appendChild(col1);
        fila.appendChild(col2);
        fila.appendChild(col3);
        fila.appendChild(col4);
        if (total >= 30000) {
            pie_tabla.classList.toggle("resaltar");
        }
    }

    function reset() {
        compras = [];
        console.table(compras);
        let pie_tabla = document.querySelector(".total_resaltado");
        pie_tabla.innerHTML = ""
        mostrar();
    }

    function mostrar() {
        let tabla = document.querySelector("#t_din");
        console.table(compras);
        tabla.innerHTML = "";
        for (let item of compras) {
            let fila = document.createElement("tr");
            let col1 = document.createElement("td");
            col1.innerText = item.producto;
            let col2 = document.createElement("td");
            col2.innerText = item.cantidad;
            let col3 = document.createElement("td");
            col3.innerText = item.precioUni;
            let col4 = document.createElement("td");
            col4.innerText = item.total;
            tabla.appendChild(fila);
            fila.appendChild(col1);
            fila.appendChild(col2);
            fila.appendChild(col3);
            fila.appendChild(col4);
        }
    }

    function oferta() {
        let promo1 = {
            "producto": "Socks Turquesa",
            "cantidad": 1,
            "precioUni": 500,
            "total": 500,
        }
        let promo2 =
        {
            "producto": "Socks Rayados",
            "cantidad": 1,
            "precioUni": 500,
            "total": 500,
        }
        let promo3 =
        {
            "producto": "Socks grises",
            "cantidad": 1,
            "precioUni": 500,
            "total": 500,
        }
        compras.push(promo1);
        compras.push(promo2);
        compras.push(promo3);
        console.table(compras);
        mostrar();
    }

    document.querySelector("#boton_agregar").addEventListener("click", agregar);
    document.querySelector("#boton_sumar").addEventListener("click", sumar_resaltar);
    document.querySelector("#boton_reset").addEventListener("click", reset);
    document.querySelector("#boton_oferta").addEventListener("click", oferta);

}