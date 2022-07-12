import elementosHtml from './elementosHTML.js'
import plantillaDeProductosEnCarrito from './plantillaDeProductosEnCarrito.js'
import plantillaPopUpImagenes from './plantillaPopUpImagenes.js'
import arrayImagenes from './helpers/imagenesPopUp.js'
import objetoImagenesEnFormatoGrande from './helpers/imagenesEnFormatoGrande.js' 
import ponerImagenPrincipal from './helpers/ponerImagenPrincipal.js'

let cantidadDeProducto = parseInt(elementosHtml.cantidadDeProducto.textContent) 

elementosHtml.contenedorBarHeader.addEventListener('click',(e) => {
    if(elementosHtml.barWrap.style.display == "none") {
        elementosHtml.barWrap.style.display = "block"
    }
    else {
        elementosHtml.barWrap.style.display = "none"
    }
})

elementosHtml.iconNextMobile.addEventListener('click',() => {
    ponerImagenPrincipal('next')
})

elementosHtml.iconPreviousMobile.addEventListener('click',() => {
    ponerImagenPrincipal('previous')
})

elementosHtml.iconCloseBarHeader.addEventListener('click',() => {
    elementosHtml.barWrap.style.display = "none"
})

window.addEventListener('resize',(e) => {
    if(window.innerWidth > 971) {
        elementosHtml.barWrap.style.display = "none"
    }
})


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
        elementosHtml.contenedorZapatoIndividual.setAttribute('src',objetoImagenesEnFormatoGrande[imagenMiniatura])
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
        elementosHtml.contenedorListaCarrito.innerHTML = plantillaDeProductosEnCarrito(cantidadDeProducto) 
        elementosHtml.numeroDeProductos.style.display = "block"
        elementosHtml.cantidadDeProducto.textContent = '0'
    }
})

elementosHtml.contenedorZapatoIndividual.addEventListener('click',() => {
    if(window.innerWidth > 971) {
        elementosHtml.contenedorPopUp.style.display = "block"
        elementosHtml.contenedorPopUp.innerHTML = plantillaPopUpImagenes(elementosHtml.contenedorZapatoIndividual.getAttribute('src')) 
    }
})

elementosHtml.contenedorPopUp.addEventListener('click',(e) => {
    if(e.target && e.target.classList.contains('icon-close') && e.target.tagName == 'path') {
        elementosHtml.contenedorPopUp.style.display = "none"
    }
})

elementosHtml.contenedorPopUp.addEventListener('click',(e) => {
    if(e.target.classList.contains("iconNext")  && e.target.tagName == 'path' && e.target) {
        console.log(e.target.classList.contains("iconNext"))
        if(arrayImagenes[3] == document.querySelector('.img-principal').getAttribute('src')) return
        let validador = false 

        arrayImagenes.forEach((imagen,i) => {
            if(validador) return
            if(imagen == document.querySelector('.img-principal').getAttribute('src')) {
                document.querySelector('.img-principal').setAttribute('src',arrayImagenes[i+1])
                validador = true
            }
        })
    }
    if(e.target.classList.contains("iconPrevious") && e.target.tagName == 'path' && e.target) {
        console.log(e.target.classList.contains('iconPrevious'))
        if(arrayImagenes[0] == document.querySelector('.img-principal').getAttribute('src')) return

        arrayImagenes.forEach((imagen,i) => {
            if(imagen == document.querySelector('.img-principal').getAttribute('src')) {
                document.querySelector('.img-principal').setAttribute('src',arrayImagenes[i-1])
                return
            }
        })
    }
})