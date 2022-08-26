//Formas de importar/exportar módulos
// 1) CommonJS - require
// 2) Import ES6

//const moduloMatematicas = require("./modulos/matematicas.js")

//Para organinzarlo mejor
//const factorial = moduloMatematicas.factorial
//const suma = moduloMatematicas.suma

//Es lo mismo que lo de arriba
const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(4)
console.log(fact)

const sum = suma(149, 1)
console.log(sum)
