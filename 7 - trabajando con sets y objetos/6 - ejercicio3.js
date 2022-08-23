//EJERCICIO 3 - Trabajando con sets y objetos
//- La fecha de hoy
const fechaHoy = new Date()
console.log(fechaHoy)

//La fecha de tu nacimiento
const fechaNacimiento =  new Date(1999, 5, 17, 00,05)
console.log(fechaNacimiento)

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fechaHoy > fechaNacimiento)

//Una variable que contenga el día de tu nacimiento
console.log(fechaNacimiento)

//Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(fechaNacimiento.getDay())

//Una variable que contenga el año de tu nacimiento (con 4 dígitos)
console.log(fechaNacimiento.getFullYear())