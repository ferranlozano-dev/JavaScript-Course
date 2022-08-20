// Como comparar listas -> .every()
const array = [4, 6, 7, 8, 3, 6, 3, 1, -4, -7, 12, 5, -40]

const resultado = array.every(valor => {
    if (typeof valor == "number") {
        return true
    } else {
        return false
    }
})

// Forma más eficiente de hacerlo
const result = array.every(valor => typeof valor == "number")
console.log(result)


// Comparacion de listas
const lista = [1, 2, 3, 4]
const lista2 = [1, 2, 3, 4]

console.log(lista == lista2)

// Función para checar si dos arrays son iguales
// Primero creamos una funcion donde le pasamos los dos arrays que vamos a comparar
const comparacionArrays = (array1, array2) => {
    //Comparamos las longitudes. Si son diferentes va a salir y devuelve un false
    if (array1.length != array2.length) return false
    //Si son iguales, vamos a comparar cada uno de los valores entre si. Devuelve un true o false
    const resultadoFinal = array1.every((valor, i) => valor == array2[i])
        return resultadoFinal
}
console.log(comparacionArrays(lista, lista2))