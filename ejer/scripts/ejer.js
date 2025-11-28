let parrafocolor = document.getElementById("parrafocolor");
let btncolor = document.getElementById("btncolor");
let colorOriginal = true;

btncolor.onclick = function () {
    if (colorOriginal) {
        parrafocolor.style.color = "blue";
    } else {
        parrafocolor.style.color = "white";
    }
    colorOriginal = !colorOriginal;
};



let text = document.getElementById("text");
let btnmostrar = document.getElementById("btnmostrar");

btnmostrar.onclick = function () {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
};


let contador = document.getElementById("contator");
let btnMas = document.getElementById("btnmore");
let btnMenos = document.getElementById("btnless");
let valor = 0;

btnmore.onclick = function () {
    valor++;
    contator.textContent = valor;
};

btnless.onclick = function () {
    valor--;
    contator.textContent = valor;
};


let imagen = document.getElementById("imagen");
let btnImagen = document.getElementById("btnImagen");

let img1 = "statics/faker.jpg";
let img2 = "statics/pollo.jpg";
let cambiada = false;

btnImagen.onclick = function () {
    if (cambiada) {
        imagen.src = img1;
    } else {
        imagen.src = img2;
    }
    cambiada = !cambiada;
};


let lista = document.getElementById("lista");
let btnAgregar = document.getElementById("btnAgregar");
let contadorElementos = 1;

btnAgregar.onclick = function () {
    let li = document.createElement("li");
    li.textContent = "Elemento " + contadorElementos;
    lista.appendChild(li);
    contadorElementos++;
};