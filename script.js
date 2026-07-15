const displayContador = document.getElementById("contador");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");

let conteo = 0;

function actualizarPantalla(){

    displayContador.innerText = conteo;

    if (conteo === 10) {
        displayContador.classList.add("limite");
    } else {
        displayContador.classList.remove("limite");
    }
};

btnSumar.addEventListener("click", function(){
    conteo = conteo +  1;
    actualizarPantalla();
} )

btnRestar.addEventListener("click", function(){
    conteo = conteo -  1;
    actualizarPantalla();
} )