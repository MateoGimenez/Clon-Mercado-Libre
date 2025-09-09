import { useState, useEffect } from "react"
import "./home.css"

export const Home = () => {
  const [indice, setIndice] = useState(0)
  const [reinicio , setReinicio] = useState(false)

  const imagenes = [
    "/CarruselPromo1.webp",
    "/CarruselPromo2.webp",
    "/CarruselPromo3.webp",
    "/CarruselPromo4.webp",
    "/CarruselPromo5.webp"
  ]

  const siguiente = () => {
    setIndice((prev) => (prev + 1) % imagenes.length)
    setReinicio((r)=> !r)
  }

  const anterior = () => {
    setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length)
    setReinicio((r)=> !r)
  }

  //Efecto autoplay
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length)
    }, 4000) // cambia cada 4 segundos

    return () => clearInterval(intervalo) 
  }, [imagenes.length , reinicio])

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
