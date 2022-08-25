//Funciones tipo flecha y funciones anonimas
//Son diferentes formas de declarar funciones

const array = [1, 5, 6, 2, 7, 12, 8, 92]


//Devuelve el doble de cada uno de sus valores
const array2 = array.map((valor) => valor * 2)
console.log(array2)


//Otra forma
//const dobleDelValor = valor => {
//    return valor * 2
//}
//console.log(dobleDelValor)

const dobleDelValor = valor => valor * 2

function doble(valor){
    return valor * 2
}
console.log(doble(6))