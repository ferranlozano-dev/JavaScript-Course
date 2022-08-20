//Calcular el foctorial de 10 utilizando solo un bucle for



const factorial = 10; // Número del que queremos calcular el factorial
let r = 1;
for(let i = factorial; i>0; i--){
    r *= i;
}
console.log(r);