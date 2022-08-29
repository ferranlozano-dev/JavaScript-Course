//Como declarar un objeto de tipo persona

class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    saludo(){
        console.log(`Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

const nueva_persona = new Persona("Ferran", 23, true)
console.log(nueva_persona)
nueva_persona.saludo()

//Una instancia es una forma de inicializar una clase
let numero = 60 //estoy inicializand una variable
console.log(typeof numero)
let persona2 = new Persona("Maria", 34, false) //Esto es una instancia
console.log(typeof persona2)
console.log(persona2 instanceof Persona) //True si es una clase de tipo persona y false si no lo es

//Instanceof -> similar a typeof pero para clases