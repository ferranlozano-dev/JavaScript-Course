class Persona {
    //Para hacer una clase privada -> #
    //Private -> Sólo se puede acceder desde dentro de la clase
    #nombrePublico
    #edad

    //Protected -> _
    //Solo se puede acceder desde dentro de la clase y clases descendientes
    _isDeveloper = true

    constructor(name, age){
        this.#nombrePublico = name
        this.#edad = age
        //this.#nombrePrivado = nombrePrivado
        //this.algo = algo
        
    }

    obtenNombre(){ //Función Getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombrePublico
    }

    //obtenNombrePriv(){
    //    return this.#nombrePrivado
    //}

    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
         this.#edad = nuevaEdad         
    }
}

//Persona definida
const persona = new Persona("Ferran", 23)
console.log(persona)

//Puede acceder al atributo porque es público
//console.log(persona.nombrePublico)
//console.log(persona.algo)

//No puedo acceder al nombre porque es privado
//console.log(persona.nombrePrivado)

//Accedemos al atributo privado (a traves de una funcion creada -> obtenNombrePriv)
//console.log(persona.obtenNombrePriv())

//No puedo acceder porque es protegida
console.log(persona._isDeveloper)

//No puedo acceder a la propiedad porque es privado
//console.log(persona.#obtenEdad())


//----------------------------------------------------------------------------------------------------
//Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

//Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
//Cambiar la edad de una persona
persona.setEdad(50)
console.log(persona.getEdad())