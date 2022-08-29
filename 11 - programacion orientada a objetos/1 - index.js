const persona = {
    nombre: "Ferran",
    edad: 23,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola, soy Ferran")
    }
}

//console.log(persona)
persona.saludo()

//Muy tedioso, codigo repetido
const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function(){
        console.log("Hola, soy Miguel")
    }
}

//Factory function
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hello")
        }
    }
}

const persona_01 = creaPersona("Juan", 25, true)
const persona_02 = creaPersona("Pedro", 5, false)
const persona_03 = creaPersona("Jaime", 60, true)
console.log(persona_01, persona_02, persona_03)