//Ejercicio

//Una función sin parámetros que devuelva siempre "true"
function sinParametros(){
    return true
}

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
setTimeout (function(){
    console.log("Hola, soy una promesa")
}, 5000)

//Una función generadora de índices pares automáticos
function* generadoraIndices(){
        let i = 0;
        while(true) {
            i++
            //Cada vez que se ejecuta, nos envía un número
            if (i == 10){
                return i % 2 == 0
            }
            yield i  //Esperando hasta que se vuelva a llamar
        }  
    }//Esperando hasta que se vuelva a llamar

const ejecutarFuncion = generadoraIndices()

console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
console.log(ejecutarFuncion.next().value)
