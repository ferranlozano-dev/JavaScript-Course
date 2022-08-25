//Funciones asíncronas y promesas
//Funcines que por ejemplo hacemos una llamada a una base de datos

function miAsync(){
    //Hace una llamada a una base de datos externa
    //Puede darnos algún error
}

//Funciones que pueden no ejecutarse de forma exitosa
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    //Si esta todo correcto, se ejecuta
    if(i != 0) {
        resolve()
        console.log("Número: " + i)
    } else {
        reject()
        console.log("Número: " + i)
    }
})

//Controlamos tanto los éxitos como los rechazos
miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    //Independientement de si se ha ejecutado de forma correcta o no, finally siempre se ejecuta
    .finally(()=> console.log("Siempre se ejecuta"))








