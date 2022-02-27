import elementosHtml from './elementosHTML.js'
import plantillaDeProductosEnCarrito from './plantillaDeProductosEnCarrito.js'

let cantidadDeProducto = parseInt(elementosHtml.cantidadDeProducto.textContent) 

elementosHtml.iconoCarro.item(0).addEventListener('click', () => {
    if(elementosHtml.bannerListaProductos.item(0).style.display == "flex") {
        elementosHtml.bannerListaProductos.item(0).style.display = "none"
    }
    else {
        elementosHtml.bannerListaProductos.item(0).style.display = "flex"
    }
})

elementosHtml.contenedorDeZapatos.item(0).addEventListener('click',(e) => {
    if(e.target && e.target.tagName == 'IMG') {
        const imagenMiniatura = e.target.getAttribute('src')
        elementosHtml.contenedorZapatoIndividual.setAttribute('src',imagenMiniatura)
        console.log(imagenMiniatura)
    }
})

elementosHtml.botonAumento.addEventListener('click',(e) => {
    e.preventDefault()
    let numeroAumento = parseInt(elementosHtml.cantidadDeProducto.textContent)
    numeroAumento++
    elementosHtml.cantidadDeProducto.textContent = numeroAumento 
})

elementosHtml.botonDisminuir.addEventListener('click',(e) => {
    e.preventDefault()
    if(parseInt(elementosHtml.cantidadDeProducto.textContent) == 0) {
        return
    }
    else{
        let numeroDisminucion = parseInt(elementosHtml.cantidadDeProducto.textContent) 
        numeroDisminucion--
        elementosHtml.cantidadDeProducto.textContent = numeroDisminucion
    }
})

elementosHtml.formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if(elementosHtml.cantidadDeProducto.textContent == '0') {
        return
    }
    else {
        elementosHtml.numeroDeProductos.innerHTML = `<p>${cantidadDeProducto+=parseInt(elementosHtml.cantidadDeProducto.textContent)}</p>`
        elementosHtml.contenedorListaCarrito.outerHTML = plantillaDeProductosEnCarrito(parseInt(cantidadDeProducto)) 
        elementosHtml.numeroDeProductos.style.display = "block"
        elementosHtml.cantidadDeProducto.textContent = '0'
    }
})

elementosHtml.contenedorZapatoIndividual.addEventListener('click',() => {
    console.log('hola')
})