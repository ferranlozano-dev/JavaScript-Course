//Como trabajar con Listas (Arrays)
let variable = 45
let array = [1,"hola", true, variable]

console.log(array)


//Acceder a los valores de un array a traves de su posicion
array[1]
console.log(array[3])


//Métodos para introducir nuevos valores en arrays (.push(), .unshift())
//Valores al final .push()
array.push("final")
console.log(array)

//Valores al inicio .unshift()
array.unshift("inicio")
console.log(array)


//Métodos eliminar valores en arrays --> .pop(), .shift()
//Valores al final --> Pop
const array2 = [1, 3, "hola", false]
array2.pop()
console.log(array2)

//Valores al principio --> Shift
array2.shift()
console.log(array2)


//Método para eliminar, modificar o añadir valores en nuestro array --> .splice()
const array3 = [1, 2, 3, 4, 5, 6]
//Indicamos posicion y cúantos valores
array3.splice(0, 1)
console.log(array3)

//Añadir valores con .splice()
array3.splice(2, 0, "HOLA")
console.log(array3)

//Modificar valores
array3.splice(2, 1, "CAMBIO")
console.log(array3)

