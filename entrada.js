function paneldescarga() {
document.getElementById('tab-ilum').style.display = 'block'; // Apagar luces
document.getElementById('tab-descarga').style.display = 'block'; // Aparece cuadro de descarga
document.getElementById('tab-descarga').style.zIndex = '99999'; // Las descargas arriba de todo
document.getElementById('HTML100').style.zIndex = '0'; // Se esconde barra de menú
}
function cerrar() {
document.getElementById('tab-ilum').style.display = 'none'; //  Encender luces
document.getElementById('tab-descarga').style.display = 'none'; // Se esconde cuadro de descarga
document.getElementById('tab-descarga').style.zIndex = '999'; // Las descargas arriba de todo
document.getElementById('HTML100').style.zIndex = '200'; // Apacere esconde barra de menú
}
var activa = document.getElementById("activa");
activa.innerHTML = "Estado de la carpeta contenedora: <b style='color:#fff;background:-webkit-linear-gradient(110deg,#58ff55 10%,#3d693c 90%);padding:.1em .5em;border-radius:10px;border:1px solid #fff'>Activa</b>"
var noactiva = document.getElementById("caida");
noactiva.innerHTML = "Estado de la carpeta contenedora: <b style='color:#fff;background:-webkit-linear-gradient(110deg,#bb1919 10%,#251111 90%);padding:.1em .5em;border-radius:10px;border:1px solid #fff'>Caída</b>"
var enespera = document.getElementById("en-espera");
enespera.innerHTML = "Estado de la carpeta contenedora: <b style='color:#fff;background:-webkit-linear-gradient(110deg,#3dbbe7 10%,#1e3138 90%);padding:.1em .5em;border-radius:10px;border:1px solid #fff'>En Espera...</b>"
var calificar = document.getElementById("calificar");
calificar.innerHTML = "<b style='background:#d155ff8c;color:#fff;text-align:center;margin:1em'>¿Cuantas estrellitas le das a esta serie? :3</b>"
    