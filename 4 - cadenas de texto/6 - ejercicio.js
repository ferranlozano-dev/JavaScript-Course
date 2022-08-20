//Una cadena de texto con tu Nombre
let miNombre = "Ferran "

//Una cadena de texto con tu Apellido
let miApellido = "Lozano"

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = miNombre + miApellido
console.log(estudiante)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculaslet 
estudianteMayus = estudiante
console.log(estudianteMayus.toUpperCase())

//-na cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minusculas
estudianteMinus = estudiante
console.log(estudianteMinus.toLocaleLowerCase())

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)

//Una variable que contenga la primera letra del Nombre
console.log(miNombre.startsWith("F"))

//Otra variable que contenga la última letra del Apellido
console.log(miApellido.endsWith("o"))

//Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.replace(/ /g, ""))

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes("Ferran"))