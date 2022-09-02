const hTexto = document.getElementById("h-texto")
console.log(hTexto)

//Cambiamos el color y el texto del H1 que está en index.html
hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento.detail)
    //Especificamos que queremos cambiar de los detail
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

//Function para cambiar el texto y el color
function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}