import elementosHtml from './elementosHTML.js'
import plantillaDeProductosEnCarrito from './plantillaDeProductosEnCarrito.js'
import plantillaPopUpImagenes from './plantillaPopUpImagenes.js'

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
    const imagenesEnFormatoGrande = {
        "../../images/image-product-1-thumbnail.jpg":"../../images/image-product-1.jpg",
        "../../images/image-product-2-thumbnail.jpg":"../../images/image-product-2.jpg",
        "../../images/image-product-3-thumbnail.jpg":"../../images/image-product-3.jpg",
        "../../images/image-product-4-thumbnail.jpg":"../../images/image-product-4.jpg"
    }
    if(e.target && e.target.tagName == 'IMG') {
        const imagenMiniatura = e.target.getAttribute('src')
        elementosHtml.contenedorZapatoIndividual.setAttribute('src',imagenesEnFormatoGrande[imagenMiniatura])
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
        elementosHtml.elementoContenedorListaCarro.style.display = 'none'
        elementosHtml.numeroDeProductos.innerHTML = `<p>${cantidadDeProducto+=parseInt(elementosHtml.cantidadDeProducto.textContent)}</p>`
        elementosHtml.contenedorListaCarrito.innerHTML = plantillaDeProductosEnCarrito(parseInt(cantidadDeProducto)) 
        elementosHtml.numeroDeProductos.style.display = "block"
        elementosHtml.cantidadDeProducto.textContent = '0'
    }
})

elementosHtml.contenedorZapatoIndividual.addEventListener('click',() => {
    elementosHtml.contenedorPopUp.style.display = "block"
    elementosHtml.contenedorPopUp.innerHTML = plantillaPopUpImagenes(elementosHtml.contenedorZapatoIndividual.getAttribute('src')) 
})

elementosHtml.contenedorPopUp.addEventListener('click',(e) => {
    if(e.target && e.target.getAttribute('src') == "../../images/icon-close.svg") {
        elementosHtml.contenedorPopUp.style.display = "none"
    }
})

elementosHtml.contenedorPopUp.addEventListener('click',(e) => {
    const arrayDeImagenes = ["../../images/image-product-1.jpg","../../images/image-product-2.jpg","../../images/image-product-3.jpg","../../images/image-product-4.jpg"]

    if(e.target.className == "iconPrevious") {
        if(arrayDeImagenes[0] == document.querySelector('.img-principal').getAttribute('src')) return

        arrayDeImagenes.forEach((imagen,i) => {
            if(imagen == document.querySelector('.img-principal').getAttribute('src')) {
                document.querySelector('.img-principal').setAttribute('src',arrayDeImagenes[i-1])
                return
            }
        })
    }
    if(e.target.className == "iconNext") {
        if(arrayDeImagenes[3] == document.querySelector('.img-principal').getAttribute('src')) return
        let validador = false 

        arrayDeImagenes.forEach((imagen,i) => {
            if(validador) return
            if(imagen == document.querySelector('.img-principal').getAttribute('src')) {
                document.querySelector('.img-principal').setAttribute('src',arrayDeImagenes[i+1])
                validador = true
            }
        })
    }
})
