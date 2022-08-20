// Métodos de cadenas de texto (parte 3)
// https://regexr.com

let texto_largo = "Tito no es un mono cualquiera. A Tito no les gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

//Nos pasa la instancia dos veces
console.log(texto_largo.match(/Tito/g))

//Si encuentra la palabra devuelve true, si no un false
console.log(texto_largo.includes("mono"))
console.log(texto_largo.includes("terremoto"))


//Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito"))

//Saber si un texto termina con una palabra
console.log(texto_largo.endsWith("árboles."))