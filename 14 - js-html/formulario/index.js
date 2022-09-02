const f = document.getElementById("formulario")
console.log(f)

//Cada vez que haya un submit, ejecuta esta función
f.addEventListener("submit", evento => {
    console.log(evento)
    evento.preventDefault()
})