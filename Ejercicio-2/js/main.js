/** Paso 1
*1. Crear listado + título
*2. Añadir clase en js: js_title y al primer li: js_primerLi
*3. Traer el título y el primer li desde html por su clase
*4. Modificar el título concatenando el primer li 
*/

/** Paso 2
 * 1. <h1>
 * 2. <p class="ks_parrafo> </p>"
 * 3. Traer el elemento:
 *   3.1
 *   3.2
*/

const elementoTitle = document.querySelector(".js_title")
const elementoLi = document.querySelector(".js_primerLi")
const elementosegundoLi = document.querySelector(".js_segundoLi")


elementoTitle.innerHTML += elementoLi.innerText;
console.log (elementoLi)

/**
 * 

elementoLi.innerHTML = elementosegundoLi; */

elementoTitle.innerHTML += "Seila"; 

