//Errores en JS
const miFuncion = valor => {
    if(typeof val == "number"){
    return 2 * valor
    }
    //return false
    throw new Error("El valor debe ser de tipo número")
}
//const elDoble = console.log(miFuncion("hola"))
const numero = 8

try {
    //Código que puede fallar
    console.log("Código que puede ejecutarse de forma correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e) {
    //En caso de fallar, quiero que ejecutes esto
    console.error(e)
    console.error("ERROR")
} finally {
    console.lof("Esto se ejecuta tanto si se produce algun error como si no")
}


//Algunos errores
//InternalError, SyntaxError, TypeError, RangeError y RefereError