// Ejercicio examen

const listaCompra = ["bread", "oil", "chicken", "salad", "rice"]
console.log(listaCompra)

// Cómo añadir un elemento
listaCompra.splice(0, 0, "aceite de girasol")
console.log(listaCompra)

// Cómo eliminar un elemento
listaCompra.shift()
console.log(listaCompra)


//Lista de peliculas con el año título y director
const listaPeliculas = [
    {year: 1950, titulo: "The Avengers", director: "Alfred"},
    {year: 2015, titulo: "Lost", director: "Margaret"},
    {year: 2010, titulo: "Superpower", director: "John"}
]

//Lista de peliculas mayor a 2010
console.log(listaPeliculas)
const listaMayor = listaPeliculas.filter(year => year.year > 2010)
console.log(listaMayor)


// Lista de los directores utilizando map
const directores = listaPeliculas.map((valor, indice) => `${indice + 1}.- ${valor.director}`)
console.log(directores)

// Lista títulos de productos utilizando map
const titulos = listaPeliculas.map((titulos, indice) => `${indice +1} - ${titulos.titulo}`)
console.log(titulos)

// Lista que concatene la lista de directores y lista de titulos
const concatenacion = directores.concat(titulos)
console.log(concatenacion)

console.log(...concatenacion)
const conPropagacion = [...directores, ...titulos]
console.log(conPropagacion)