//ENTRADAS DEL PROBLEMA (comentario de linea)
/*
Comentario de bloque
*/
//ENTRADAS==VARIAVLES==CONSTANTES

/*let nombreProducto="batimovil" 
let precioProducto=400000
let pesoProducto=18.5
let tieneDescuento=true
let descripcionProducto="Batimovil a escala"
let telefonoVendedor="3046104275"

const NOMBRE_CLIENTE= "Daniel"

//Arreglos unidimensionales(vectores)
//Sirven para almacenar varios elementos en una sola variante
let producto=["batimovil","camiseta","gorra","bati morral"]
let productos2=Array("batimovil","camiseta","gorra","bati morral")



//SALIDAS
console.log("buenas")
console.log(nombreProducto)
console.log("Su nombre es: "+NOMBRE_CLIENTE+" y su producto es: "+nombreProducto)
console.log(`Su nombre es: ${NOMBRE_CLIENTE} y su producto es ${nombreProducto}`)
console.log("*********")
console.log(producto)
console.log(productos2)*/

//Controlando etiquetas
//Para javaScripts una etiqueta es una referenncia de memoria
//1. Crear una variable para guardar una etiqueta
let etiquetaTitulo = document.getElementById("titulo")
console.log(etiquetaTitulo)

//2. Como modificar el texto de una etiqueta
etiquetaTitulo.textContent="rojo vos no existis"

//Controlar el menu
let etiquetaMenu = document.getElementById("menu")
etiquetaMenu.textContent="Uefa Champions League"

//Controlando foto
let etiquetaFoto=document.getElementById("champions")
etiquetaFoto.textContent.src="img/champions2.jpg"

//cambiar el estilo de la etiqueta
etiquetaTitulo.classList.add("text-center")
etiquetaTitulo.classList.add("text-danger")