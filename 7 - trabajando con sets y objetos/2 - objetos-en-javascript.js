// Trabajando con objetos en JavaScript
const objeto = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    librosFavoritos: ["El metodo", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
}
console.log(objeto.nombre)
console.log(objeto["4-juegos"])

//Acceder a propiedades a través de variables
const propiedad = "isDeveloper"
console.log(objeto[propiedad])


const objeto2 = objeto
console.log(objeto2)

objeto2.nombre = "Iñigo"
console.log(objeto.nombre)
//También cambia el objeto original porque he definido un objeto a partir del otro -> const objeto2 = objeto
console.log(objeto.nombre)


//No pasa igual con los números que con los objetos
let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)


const objeto3 = { ...objeto}
console.log(objeto.nombre)
console.log(objeto3.nombre)

objeto3.nombre = "Ferran"
console.log(objeto.nombre)
console.log(objeto3.nombre)


//Cómo ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", anyo: 1939},
    {titulo: "Titanic", anyo: 1997},
    {titulo: "Moana", anyo: 2016},
    {titulo: "El efecto mariposa", anyo: 2004},
    {titulo: "TED", anyo: 2012}
]
console.log(listaPeliculas)

// Ordenamos las películas por año, de más antigua a más nueva
listaPeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaPeliculas)