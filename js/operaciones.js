let numero = Math.floor(Math.random() * 100) + 1;


console.long(numero);

let intento = 50;


if(intento > numero)
{
    console.long("El numero ingresado es mayor");
} else if (intento < numero) {
    console.long("El numero ingresado es menor");
} else { 
    console.long("Has adivinado el numero");
}

