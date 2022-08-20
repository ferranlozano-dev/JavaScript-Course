// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

//Forma antigua y poco eficiente
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//Forma más eficiente --> forEach
array.forEach(valor => {
    console.log(valor)
})

//Búsqueda de un valor dentro de una lista -> .find()
// Voy a buscar el elemento 90
const variable = array.find(valor => {
    if (valor == 90){
        return true
    }
})
console.log(variable)


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29}
]

//Forma muy eficiente
const objeto = listaObjetos.find(o => o.nombre == "Miguel")
console.log(objeto.edad)

const { edad } = listaObjetos.find(g => g.nombre == "Leire")
console.log(edad)
