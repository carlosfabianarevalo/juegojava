const numClicDOM = document.getElementById("numClic");
const btnRestablecer =document.getElementById("btnRestablecer");

let numeroClic = 0;

function contadorDeClic()
{
    //Cuerpo de la funcion 
    numeroClic += 1;
    numClicDOM.textContent = numeroClic;
}

function restablecer()
{
    numClicDOM.textContent = 0;
}
btnRestablecer.addEventListener("click",restablecer);



