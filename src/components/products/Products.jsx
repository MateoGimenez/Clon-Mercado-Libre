import './products.css'

export const Products = () => {
  const productos = [
    { motivo: 'Llevate tu favorito', nombre: "Teclado Mecánico Attack Shark X98pro 98% Inalámbrico Gasket", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Llevate tu favorito', nombre: "Teclado Mecánico Attack Shark X98pro 98% Inalámbrico Gasket", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    // ...otros
  ]

  const productsLimpio = productos.map((item) => ({
    ...item,
    precioConDescuento: item.precio - (item.precio * item.descuento) / 100
  }))

  const formatearPrecio = (valor) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(valor);

  return (
    <div className="contenedor-products">
      <div className="carrusel-products">
        {productsLimpio.map((item, index) => (
          <div className="card-products" key={index}>
            <h2>{item.motivo}</h2>
            <img src={item.img} alt="imagen producto" />
            <p className='nombre-product'>{item.nombre}</p>
            <nav className='precio-product'>{formatearPrecio(item.precio)}</nav>
            <nav className='descuento-product'>-{item.descuento}%</nav>
            <nav className="precioDescuento">{formatearPrecio(item.precioConDescuento)}</nav>
            <p className='envio-product'>{item.envio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
