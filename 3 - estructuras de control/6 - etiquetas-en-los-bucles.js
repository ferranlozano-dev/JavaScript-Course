//Etiquetas en los bucles


let unidades = 0;
let decenas = 0;

//Este bucle se encarga de las decenas
while(true){
     //Este bucle se encarga de las unidades
    while(true){
        console.log(`El número actual es: ${decenas}${unidades}`
        )
        unidades++
        if(unidades === 10){
            unidades = 0
            break
        }
    }
    decenas++
    if(decenas === 2){
        break
    }
}