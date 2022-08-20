//Métodos avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

array.forEach(ciudades => {
    console.log(ciudades)
})

// Mostramos los datos y hacemos un índice con números
const newArray = array.map((ciudades, indice) => `${indice + 1}.- ${ciudades}`)



//---------------------------------------------------------------------------------

const listaObjetos = [
{nombre: "Leire", edad: 35},
{nombre: "Gorka", edad: 34},
{nombre: "Miguel", edad: 28},
{nombre: "Lucía", edad: 3},
{nombre: "Amaia", edad: 29}
]

//Sólo mostramos las personas cuya edad sea mayor a 30
//const personas = listaObjetos.filter(valor  => {
//    if(valor.edad > 30){
//       return true
//    }else{
//       return false
//    }
//})

//Mucho más simplificado que el método de arriba
const personas = listaObjetos.filter(objeto => objeto.edad > 30)
console.log(personas)


//Obtener todas las personas, menos Miguel
const nuevaLista = listaObjetos.filter(objeto => objeto.nombre != "Miguel")
console.log(nuevaLista)