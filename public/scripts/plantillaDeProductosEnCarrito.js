export default function plantillaDeProductosEnCarrito(numeroDeProductos) {
    return `
        <section class="productosEnCarro">
            <div class="productosEnCarro-elementos">
                <div class="contenedorImagenProducto">
                    <figure>
                        <img src="../../images/image-product-1-thumbnail.jpg" alt="foto del zapato"></img>
                    </figure>
                </div>

                <div class="contenedorPrecioDeProducto">
                    <p>Fall Limited Edition Speakers</p>
                    <p>$125.00 x ${numeroDeProductos} <b>$${numeroDeProductos*125.00}.00</b></p>
                </div>

                <div class='contenedorIconoDelete'>
                    <figure>
                        <img src="../../images/icon-delete.svg"></img>
                    </figure>
                </div>
            </div>

            <div class="productosEnCarro-checkout">
                <p>Checkout</p>
            </div>
        </section>
    `
}