// Ejercicio 1 - 7.-Trabajando con Sets y Objetos

// Un nuevo Set con los nombres de tu familia
const nombres = ["Ferran", "Pili", "Manuel", "Olga", "David", "Joan", "Carlos"]
const miSet = new Set(nombres)

console.log(miSet)


// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Ferran")
console.log(miSet)

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("JavaScript")
console.log(miSet)