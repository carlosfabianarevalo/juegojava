const button = document.querySelector(btnVotar)

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;


let voto;
for(let i = 1; i < 30; i++)
{
    let voto = prompt("Ingrese el numero del candidato de su preferencia:\n1. Mateo 1.\n1. Marcos 2.\n1. Lucas 3.\n1. Juan 4.");

    switch (voto) {
        case "1":
            candidato1++;
            break;
        case "2":
            candidato2++;
            break;
        case "3":
            candidato3++;
            break;
        case "4":
            candidato4++;
            break;
    }
}

$mensaje = "El vocero del grupo es "
if(candidato1 > candidato2 && candidato1 > candidato3 && candidato1>candidato4)
{
    $mensaje += "Mateo"
}
else if(candidato2 > candidato1 && candidato2 > candidato3 && candidato1>candidato4)
{
    $mensaje += "Marcos"
}
else if(candidato3 > candidato1 && candidato3 > candidato2 && candidato3 >candidato4)
{
    $mensaje += "Lucas"
}
else if(candidato4 > candidato1 && candidato4 > candidato2 && candidato4 >candidato3)
{
    $mensaje += "Juan"
}
else
{
    $mensaje= "No hay ganador";
}


alert($mensaje);




// let contadorDelProyecto = 0;
// let dineroEnCaja = Number(prompt("Ingrese el monto del dinero"));
// while(dineroEnCaja > 0)
// {
//     let presupuestoProyecto = Number(prompt("Ingrese monto del poyecto"));
//     dineroEnCaja -= presupuestoProyecto;
//     contadorDelProyecto ++
//     console.log(contadorDelProyecto)
//     alert("Se asignaron recursos para su proyecto");
// }
// alert("Los proyectos aprobados fueron: " + contadorDelProyecto)
// alert("Se han agotado los recursos")



