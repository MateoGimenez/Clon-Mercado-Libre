import { useState } from "react";
import './header.css'
export const Header = () =>{
    const [contador , setContador] = useState(0)


    return(
        <header>
            <div className="nav-header">
                <div className="contenedor-logo">
                    <a className='logo' href="https://listado.mercadolibre.com.ar/_Container_mk-t2-double-dates-9-septiembre-2025-he-televisores#c_id=/home/exhibitors-carousel/element&c_campaign=display%2Fclicks%2FMLA%2Fcount&c_element_order=3&c_uid=ab2adaa0-ee91-4653-b94f-7637cf9751b8"></a>
                </div>

                <div className="contenedor-input">
                    <input type="text" placeholder="Buscar productos, marcas y mas..."/>
                    <button>🔍</button>
                </div>

                <div className="contenedor-oferta">
                    <a className="oferta" href=""></a>
                </div>

                <div className="contenedor-ubicacion">
                    <a href="">
                        <p>Enviar a Mateo</p>
                        <p>Calle Pepito</p>
                    </a>
                </div>

                <div className="contenedor-opciones">
                    <nav className="nav-menu">
                        <ul className="nav-menu-list">
                            <li className="nav-menu-items"><a href="">Categorias</a></li>
                            <li className="nav-menu-items"><a href="">Ofertas</a></li>
                            <li className="nav-menu-items"><a href="">Cupones</a></li>
                            <li className="nav-menu-items"><a href="">Supermercado</a></li>
                            <li className="nav-menu-items"><a href="">Moda</a></li>
                            <li className="nav-menu-items"><a href="">Vender</a></li>
                            <li className="nav-menu-items"><a href="">Ayuda</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="contenedor-user">
                    <nav className="nav-user-menu">
                        <li className="nav-user-item">Mateo</li>
                        <li className="nav-user-item">Mis Compras</li>
                        <li className="nav-user-item">Favoritos</li>
                        <li className="nav-user-item">campana</li>
                        <li className="nav-user-item">carrito</li>
                    </nav>
                </div>
            </div>
        </header>
    )
}