//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const objetos = [
    {nombre: "Ferran"},
    {apellido: "Lozano"},
    {edad: 23},
    {altura: 173},
    {eresDesarrollador: true}
]
console.log(objetos)

//- Una variable que obtenga tu edad a partir del objeto anterior
console.log(objetos[2])

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const miLista = new Set(objetos)
console.log(miLista)

const objetosDatosPersonales = [
    {nombre: "Jordi"},
    {apellido: "Elgueta"},
    {edad: 22},
    {altura: 169},
    {eresDesarrollador: true},
    {nombre: "Ferran"},
    {apellido: "Martínez"},
    {edad: 55},
    {altura: 175},
    {eresDesarrollador: true},
    {nombre: "Marc"},
    {apellido: "Colomer"},
    {edad: 50},
    {altura: 155},
    {eresDesarrollador: false}
]
console.log(objetosDatosPersonales)

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
objetosDatosPersonales.sort((a, b) => a.edad - b.edad)
console.log(objetosDatosPersonales)