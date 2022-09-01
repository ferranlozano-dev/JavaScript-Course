const persona = {
    nombre: "Ferran",
    edad: 23
}
console.log("Edad antes: " + persona.edad)

function obtenDobleEdad(edad){
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)
console.log("Edad doble: " + dobleEdad)



function obtenArray(edad) {
    let arrayNumeros = []
    for(let i = 0; i < 10; i++){
        const numero = edad + i
        console.log(numero)
        arrayNumeros = [...arrayNumeros, numero]    
    }
    return arrayNumeros
}
const array = obtenArray(persona.edad)
console.log(arrayNumeros)