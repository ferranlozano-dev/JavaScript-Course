//const suma
//import { eleva, suma, nombre } from'./modulos/matematicas.js'

//Importar todo, otra forma hde hacerlo
import * as moduloMatematicas from './modulos/matematicas.js'
import getAutor, { libro } from './modulos/literatura.js'

const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 6)
console.log(potencia)

//Ejemplo con string
console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(libro)