//Funciones generadoras
function* generarId(){
    let numeros = 0;
    while(true) {
        numeros++
        //Cada vez que se ejecuta, nos envía un número
        if (numeros == 10){
            return numeros
        }
        yield numeros  //Esperando hasta que se vuelva a llamar
    }   
}

//Guardamos la función dentro de una constante
const generadora = generarId()

console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)
console.log(generadora.next().value)