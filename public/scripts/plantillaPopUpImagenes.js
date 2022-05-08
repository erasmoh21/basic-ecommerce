export default function plantillaPopUpImagenes(src) {
    return `
        <div class="contenedorElementosPopUp">
            <div class="contenedorBotonClose">
                <figure>
                    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" ><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" class="icon-close" fill-rule="evenodd"/></svg>
                </figure>
            </div>

            <div>
                <figure class="contenedorImagenPrincipal">
                    <div class='contenedorBtn-previous'>
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" class="iconPrevious"/></svg>
                    </div>
                    <img src="${src}" class="img-principal" alt="Imagen de zapato" tabindex="3">
                    <div class="contenedorBtn-next">
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" class="iconNext"/></svg>
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