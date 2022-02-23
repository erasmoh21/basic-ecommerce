import elementosHtml from './elementosHTML.js'

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
    }
})

elementosHtml.botonAumento.addEventListener('click',() => {
    let numeroAumento = parseInt(elementosHtml.cantidadDeProducto.textContent)
    numeroAumento++
    elementosHtml.cantidadDeProducto.textContent = numeroAumento 
})

elementosHtml.botonDisminuir.addEventListener('click',() => {
    if(parseInt(elementosHtml.cantidadDeProducto.textContent) == 0) {
        return
    }
    else{
        let numeroDisminucion = parseInt(elementosHtml.cantidadDeProducto.textContent) 
        numeroDisminucion--
        elementosHtml.cantidadDeProducto.textContent = numeroDisminucion
    }
})