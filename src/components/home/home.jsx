import { useState, useEffect } from "react"
import "./home.css"

export const Home = () => {
  const [indice, setIndice] = useState(0)

  const imagenes = [
    "./public/CarruselPromo1.webp",
    "./public/CarruselPromo2.webp",
    "./public/CarruselPromo3.webp",
    "./public/CarruselPromo4.webp",
    "./public/CarruselPromo5.webp"
  ]

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length)
  }

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  //Efecto autoplay
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length)
    }, 4000) // cambia cada 4 segundos

    return () => clearInterval(intervalo) 
  }, [imagenes.length])

  return (
    <section>
      <div className="contenedor-home">
        <div className="contenedor-carrusel">
          {/* Contenedor que se desplaza */}
          <div
            className="contenedor-imagenes"
            style={{ transform: `translateX(-${indice * 100}%)` }}
          >
            {imagenes.map((img, i) => (
              <img key={i} src={img} alt={`imagen-${i}`} />
            ))}
          </div>

          {/* Botones */}
          <button className="izquierda" onClick={anterior}>
            &#10094;
          </button>
          <button className="derecha" onClick={siguiente}>
            &#10095;
          </button>
          {/* Indicadores de carrusel */}
           <ul className="indicadores">
             {imagenes.map((_,i) =>(
                <li
                    key={i}
                    className={i === indice ? "activo" : ""}
                    onClick={()=> setIndice(i)}
                ></li>
                ))}
            </ul>
          <div className="gradient"></div>
        </div>
      </div>
    </section>
  )
}
