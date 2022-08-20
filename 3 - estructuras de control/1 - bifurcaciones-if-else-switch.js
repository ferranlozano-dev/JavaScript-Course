//Bifurcaciones if... else


//Si se cumple esta condición se ejecuta el código
if(true){
    console.log("Es verdadero");
}


//Si no se cumple la primera, se cumple la segunda
if(false){
    console.log("Es verdadero");
}else{
    console.log("No es verdadero")
}

//-----------------------------------------

// If else

let saldo = 50;
let efectivo = 50;

//Ejemplo de programa para sacar dinero
if(efectivo <= saldo){
    console.log("Puedes sacar dinero")
}else{
    console.log("No tienes suficiente saldo")
}

//----------------------------------------------

if(false){
    console.log("Es verdadero")
}else{
    console.log("Es falso")
}

//------------------------------------------------
let nota = 9;

switch(nota){
    case 5: 
        console.log("Excelente");
        break;
    case 4: 
        console.log("Notable");
        break;
    case 3: 
        console.log("Bien");
        break;
    case 2: 
        console.log("Suficiente");
        break;
    case 1: 
        console.log("Insuficiente");
        break;
        default:
            console.log("Error!, Introduce un número del 1 al 5")
        break;
}