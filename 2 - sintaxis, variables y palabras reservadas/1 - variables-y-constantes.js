var variable;
let variableLet;


//Constantes
const constante = "Hola soy una constante";

//----------------------------------------------------------------------------

//Variables VAR
var a = 1;
console.log(a)

a = 4;
console.log(a)

console.log(constante)
//constante = "Adiós"; // Da error porque es una constante y su valor no puede cambiar

//-----------------------------------------------------------------------------

//Variables LET
let b = 3;
console.log(b);

b = 5;
console.log(b)

//-----------------------------------------------------------------------------

//Diferencia entre var y let
//Var afecta a todo el código y let sólo al bloque donde esta siendo declarado

var variable = "Hola soy una variable VAR";

for(var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}
console.log(variable)


let variableLET = "Hola soy una variable LET";

for(let i = 0; i < 3; i++) {
    let variableLET = "Soy la segunda variable"
}
console.log(variableLET)


//----------------------------------------------------------------------------
//Typeof nos dice el tipo de variable que le pasamos

console.log(typeof 1)
console.log(typeof "Hola")
console.log(typeof true)
console.log(typeof undefined)



