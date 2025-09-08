import { useState } from 'react'
import './products.css'

export const Products = () => {
  const [indice, setIndice] = useState(0)
  const productos = [
    { motivo: 'Llevate tu favorito', nombre: "Teclado Mecánico Attack Shark X98pro 98% Inalámbrico Gasket", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Llevate tu favorito', nombre: "Teclado Mecánico Attack Shark X98pro 98% Inalámbrico Gasket", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Llevate tu favorito', nombre: "Teclado Mecánico Attack Shark X98pro 98% Inalámbrico Gasket", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Llevate tu favorito', nombre: "Teclado Mecánico Attack Shark X98pro 98% Inalámbrico Gasket", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Llevate tu favorito', nombre: "ICONO", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Llevate tu favorito', nombre: "ICONO", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Comienza otro', nombre: "ICONO", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
    { motivo: 'Comienza otro', nombre: "ICONO", img: './public/products/teclado mecanicoinalambricoAula.webp', precio: 184615, descuento: 41, envio: 'envio gratis' },
  ]

  const productsLimpio = productos.map((item) => ({
    ...item,
    precioConDescuento: item.precio - (item.precio * item.descuento) / 100
  }))

  const formatearPrecio = (valor) => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(valor);

  const itemsPorVista = 4
  const maxIndice = Math.ceil(productos.length / itemsPorVista) - 1

  const siguiente = () => {
    setIndice((prev) => Math.min(prev + 1, maxIndice))
  }

  const anterior = () => {
    setIndice((prev) => Math.max(prev - 1, 0))
  }

  return (
    <div className="contenedor-products">
      <button className={`boton-izquierda ${indice === 0 ? "oculto" : ""}`} onClick={anterior}>‹</button>
      <div className="carrusel-products">
        {productsLimpio.map((item, index) => (
          <div className="card-products" key={index}
            style={{ transform: `translateX(-${indice * 426}%)` }}
          >
            <h2>{item.motivo}</h2>
            <img src={item.img} alt="imagen producto" />
            <p className='nombre-product'>{item.nombre}</p>
            <nav className='precio-product'>{formatearPrecio(item.precio)}</nav>
            <div className="precioNuevo">
              <nav className="precioDescuento">{formatearPrecio(item.precioConDescuento)}</nav>
              <nav className='descuento-product'>-{item.descuento}%off</nav>
            </div>
            <p className='envio-product'>{item.envio}</p>
          </div>
        ))}
      </div>
      <button className={`boton-derecha ${indice === maxIndice ? "oculto" : ""}`} onClick={siguiente}>›</button>
    </div>

  )
}
