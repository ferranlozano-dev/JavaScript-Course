// Identificar si exsite un valor en un array de objetos -> .some()

const array = [ 3, 7, 2, 4, 7, 9, 42, 25, 7846, 23, -2]

const resultado = array.some(valor => valor < 0)
console.log(resultado)

const existe = array.some(valor => valor == 9)
console.log(existe)


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29}
]
//Comprobamos si Miguel está en la lista
const existeMiguel = listaObjetos.some(persona => persona.nombre == "Miguel")
console.log(existeMiguel)


//Obtener lista a partir de un objeto iterable
const string = "Hola soy Ferran"
console.log(string[9])

// .from()
const array_string = Array.from(string)
console.log(array_string)

//Otra forma de hacerlo -> .set()
const set = new Set([2, 3, "hola", 4])
const array_set = Array.from(set)
console.log(array_set)


//Obtener un iterable de todos los indices de nuestro array -> .keys()
const key = array.keys()
console.log(key)

const array_keys = Array.from(key)
console.log(array_keys)