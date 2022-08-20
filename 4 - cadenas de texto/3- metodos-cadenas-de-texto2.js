//Métodos de cadenas de texto

let input = "Géminis"
let db = "géminis"

//Métodos toLowerCase() toUpperCase()
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())


//Formas de concatenar dos cadenas de caracteres
let string_1 = "Hola soy la primera cadena. "
let string_2 = "Y yo soy la segunda cadena"

console.log(string_1.concat(string_2, ". Más texto"))
console.log(string_1 + string_2)
console.log(`${string_1} ${string_2}`)