localStorage.setItem("nombre", "Gorka")
localStorage.setItem("nombre", "Miguel")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify ({nombre: "gorka", edad: 30}))
console.log(JSON.parse(localStorage.getItem("persona")))


//JSON.stringify --> convierte un objeto/array en string
//JSON.parse --> convierte un objeto/array convertido a través de stringify en un objeto de JS

//Eliminar item localStorage
localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Ferran")


/* Cookies */
console.log(document.cookie)
document.cookie = "nombre-cookie=FerranCookie"

//document.cookie = "nombre-caducidad=Caducidad;
//expires=" + new Date(2023, 0, 1).toUTCString()

