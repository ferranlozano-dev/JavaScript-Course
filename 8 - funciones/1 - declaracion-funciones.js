//Que son las funciones, como se declaran y como se utilizan

saludar("Ferran")

function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}


//Formas distintas de nombrar funciones
let nombre2 = "Juan"
despedir(nombre2)

function despedir(nombre) {
    console.log(`Adios, ${nombre}`)
}



let persona = {nombre: "Ferran", apellido: "Lozano!"}
saludarPersona(persona)

function saludarPersona(objeto) {
    console.log(`Hola, ${objeto.nombre} ${objeto.apellido}`)
}

//Da error porque esta intentando acceder a algo que no está definido
saludar()


//Función para imprimir un número
imprimir()

function imprimir(numero = 10){ // Parámetros por defecto
    console.log(`El número impreso es el: ${numero}`)
}



function imprimir2(...parametros){
    console.log(parametros) 
}
imprimir2(1, 3, 9, 2, "hola")



//Suma de todos los valores
function suma(...nums) {
    console.log(...nums)
    return nums.reduce((a, b) => a + b)
}
const s = suma(1, 2, 3, 4)

console.log(s)



let variable = "hola"
function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adios"
    console.log(variable_interna)
    return a * b
}
//Solo esta definida dentro y por lo tanto solo se puede imprimir desde dentro
console.log(variable_interna)
console.log(multiplicar(5, 6))