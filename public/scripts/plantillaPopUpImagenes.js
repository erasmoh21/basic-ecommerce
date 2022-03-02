export default function plantillaPopUpImagenes(src) {
    return `
        <div class="contenedorElementosPopUp">
            <div class="contenedorBotonClose">
                <figure>
                    <img src="../../images/icon-close.svg" tabindex="1">
                </figure>
            </div>

            <div>
                <figure class="contenedorImagenPrincipal">
                    <div class='contenedorBtn-previous'>
                        <img src="../../images/icon-previous.svg" alt="icono de flecha a la derecha" class="iconPrevious">
                    </div>
                    <img src="${src}" class="img-principal" alt="Imagen de zapato" tabindex="3">
                    <div class="contenedorBtn-next">
                        <img src="../../images/icon-next.svg" alt="icono de flecha a la izquierda" class="iconNext">
                    </div>
                </figure>
            </div>

            <div class="contenedorImagenes">
                <figure>
                    <img src="../../images/image-product-1-thumbnail.jpg" class="imagenes" alt="Imagenes de zapatos en miniatura" tabindex="5">
                    <img src="../../images/image-product-2-thumbnail.jpg" class="imagenes" alt="Imagenes de zapatos en miniatura" tabindex="6">
                    <img src="../../images/image-product-3-thumbnail.jpg" class="imagenes" alt="Imagenes de zapatos en miniatura" tabindex="7">
                    <img src="../../images/image-product-4-thumbnail.jpg" class="imagenes" alt="Imagenes de zapatos en miniatura" tabindex="8">
                <figure>
            </div>
        </div>
    `
} 