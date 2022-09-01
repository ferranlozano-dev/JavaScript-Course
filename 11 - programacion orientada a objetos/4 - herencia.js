// Inheritance o Herencia
class Persona {
    _name
    _age
    constructor(name, age){
        this._name = name
        this._age = age    
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this._name} tengo ${this._age} años`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje){
        //Llamar al constructor de la clase superior, no hace falta repetirlo
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo(){ // Override, definir algo que ya estaba definido
        super.saludo()
        console.log(`y soy desarrollador de ${this.lenguaje}`)
    }
    

}

const nuevoDev = new Desarrollador("Ferran", 23, "JavaScript")
console.log(nuevoDev)
nuevoDev.saludo()


// Polimorfismo => significa varias formas
//