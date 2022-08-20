//Principales operaciones aritméticas
let a = 3.5
let b = 4.8

//Suma
console.log(a + b)

//Resta
console.log(a - b)

//Multiplicación
console.log(a * b)

//División
console.log(a / b)


//Representación de los números en cadenas de texto
console.log(typeof a)
let rep = a.toString()

console.log(typeof rep)
console.log(rep)



//Redondeo de números decimales
let c = 3.3
let d = c * 3

console.log(d)
console.log(d.toFixed(0))


// .toFixed() -> Limitar el número de decimales al valor x
console.log(d.toFixed(4))
console.log(typeof d.toFixed(4))

let e = 1839.1232456789
let f = 2213556153215
console.log(e.toFixed(3))
console.log(f.toFixed(3))

// .toPrecision(x) -> Limita el número de cifras significativas
console.log(e.toPrecision(7))
console.log(f.toPrecision(7))

console.log(typeof f.toPrecision(3))