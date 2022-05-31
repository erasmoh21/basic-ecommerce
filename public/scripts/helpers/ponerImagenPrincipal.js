import elementosHtml from "../elementosHTML.js"
import imagenesTransicionMobileAntecedente from "./objetoImagenesParaTransicionMobileAntecede.js"
import imagenesTransicionMobilePrecedente from "./objetoImagenesParaTransicionMobilePrecede.js"

const ponerImagenPrincipal = (tipoDeBoton) => {
    const imagenActual = elementosHtml.contenedorZapatoIndividual.getAttribute('src') 
    let imagenAPoner = ''

    if(tipoDeBoton == 'next') {
        imagenAPoner = imagenesTransicionMobilePrecedente[imagenActual] || '../../images/image-product-4.jpg' 
    }
    else {
        imagenAPoner = imagenesTransicionMobileAntecedente[imagenActual] || '../../images/image-product-1.jpg' 
    }

    elementosHtml.contenedorZapatoIndividual.setAttribute('src',imagenAPoner)
}

export default ponerImagenPrincipal; 