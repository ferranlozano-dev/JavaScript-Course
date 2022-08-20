// Sets o conjuntos
const array = [1, 2, 3, 4, 5, 1, 4, 2]

// La diferencia entre set y array esque los set nunca va a dejar añadir valores repetidos
const miSet = new Set(array)
console.log(miSet)

// Cómo añadir valores .add()
miSet.add(9)
console.log(miSet)

// Cómo eliminar valores .delete()
miSet.delete(9)
console.log(miSet)

// Vaciar .clear()
//miSet.clear()
console.log(miSet)

// Saber si incluye un valor -> .has()
console.log(array.includes(2))
console.log(miSet.has(4))

// Saber el tamaño de un .set()
console.log(miSet.size)

// Cómo iterar
miSet.forEach(valor => {
    console.log(valor)
})

const iterar = miSet.values()
console.log(iterar)

//Efecto propagacion
const ar_miSet = [...miSet]
console.log(ar_miSet[1])

