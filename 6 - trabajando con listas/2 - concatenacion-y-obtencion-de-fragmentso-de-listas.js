//Concatenacion y obtencion de fragmentos de listas
//Cómo unir dos listas .concat(lista)

lista1 = ["hola", 2, false, null]
lista2 = ["adios", 8, true, undefined]

console.log(lista1.concat(lista2))

const lista3 = lista1.concat(lista2)
console.log(lista3)


//Como unir dos listas con el factor de propagación
//Trata los valores de la lsita por separado
console.log(...lista3)
const lista4 = [...lista1, ...lista2]
console.log(lista4)


//Como obtener una lista a partir de otra --> .slice()
const array_ = ["hola", 1, 2, 3, true, null, "adios"]

//NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
//Le añadimos la posicion inicial y final que queremos que empieaq y termine
console.log(array_.slice(2, 5))