//Crea un nuevo fichero JS que contenga las siguientes líneas
//Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
//Ejecuta la depuración de VSCode para visualizar la ejecución de la función

var limit = 10
var fibonacci = [0,1]

for (i = 2; i <= limit; i++) {
    fibonacci.push(fibonacci[i-1] + fibonacci[i-2])
    console.log(fibonacci[i])
}