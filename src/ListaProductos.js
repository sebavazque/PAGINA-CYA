import React from 'react'
import camara from './imagen/camara.jpeg'
import proyecto from './imagen/proyecto.jpeg'
import batea1 from './imagen/batea1.jpg'
import hela from './imagen/hela.jpeg'
import AIRE from './imagen/AIRE.jpg'
import puerta from './imagen/puerta.jpg'
import central from './imagen/central.jpg'
import { Link } from 'react-router-dom'
import { BsChevronDoubleDown } from "react-icons/bs";


const ListaProductos = ({producto}) => {
    return (
    <div className='bannerContainer'>
        <div className='bannerProd' >
            <div className='bannerCont'>
                <h2>Nuestros productos</h2>
            </div>
        </div>       
        <hr className='iconBan' />
        <div className='iconItem'>
        <BsChevronDoubleDown />
        </div>

        <div className='productos'>
                    <div className='productContent'>
                        <img src={camara} />
                        <p>Camaras Frigorificas</p> 
                        <Link to='/camara/1'>Ver mas</Link>
                    </div>

                    <div className='productContent'>
                        <img src={proyecto} />
                        <p>Motores</p> 
                        <Link to='/evaporador/4' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={batea1} />
                        <p>Bateas</p> 
                        <Link to='/batea/6' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={hela} />
                        <p>Heladeras</p> 
                        <Link to='/heladera/2' >Ver mas detalles</Link>
                    </div>


                    <div className='productContent'>
                        <img src={central} />
                        <p>Centrales de frio</p> 
                        <Link to='/batea' >Ver mas detalles</Link>
                    </div>

                    <div className='productContent'>
                        <img src={AIRE} />
                        <p>Aires comerciales</p> 
                        <Link to='/aire/3' >Ver mas detalles</Link>
                    </div> 



        </div>
    
    </div>
    
    )
}

export default ListaProductos