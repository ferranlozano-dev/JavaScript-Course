//Fechas en JavaScript
const fecha = new Date()
console.log(fecha)

// Los meses inicializan en 0 (0 -> Enero y 11 -> Diciembre)
const fecha2 = new Date(1987, 11, 8)
console.log(fecha2)

// Podemos definir fechas con milisegundos
const fecha3 = new Date(0)
console.log(fecha3)

// También podemos definir fechas a través de strings
const fecha4 = new Date("October 14, 1979 12:15:15")
console.log(fecha4)

//Comparación de fechas
console.log(fecha > fecha2)


const fecha5 = new Date(1987, 10, 8)
console.log(fecha2 == fecha5) // ERROR! No se pueden comparar fechas de esta manera

// Forma correcta de comparar la igualdad entre fechas
console.log(fecha2.getTime() == fecha5.getTime())

// Obtener el día, el mes y el año de una fecha
// Método .getDate()
console.log(fecha2.getDate())

// Obtener mes
// Método .getMonth()
console.log(fecha2.getMonth() + 1)

// Obtener año
// Método .getYear()
console.log(fecha2.getFullYear())

// .toLocaleDateString
console.log(fecha2.toLocaleDateString())