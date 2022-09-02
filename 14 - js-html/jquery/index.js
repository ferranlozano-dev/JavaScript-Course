//Forma de trabajar con JQuery
//Selector y acción

//Escondemos la lista desordenada
//$("li").hide()

//Escondemos el título h1
//$("h1").hide()

//Esto se va a ejecutar una vez termine de cargar el documento
//$(document).ready(() => {

//})

//Forma simplificada
$(() => {
   //$("#el-1").hide() //La amhohadilla hace referencia a las listas
   //El . hace referencia a las clases
    $(".hide-btn").click(() => {
        //Cuando hago click en el botón de hide, el h1 se oculta
        //$("h1").hide()
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        //Cuando hago click en el botón de show, el h1 se oculta
        //$("h1").show()
        $("h1").fadeIn()
    })
    //Cambiar el color del H1 cuando hacemos doble click en un elemento
    $("li").dblclick(() => {
        $("h1").css({color: "red"})
    })
    //Añadir un nuevo li cuando hacemos click en el botón Add Element
    $(".new-element").click(() => {
        $("ul").append("<li>New Element</li>")
    })
    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })
    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})