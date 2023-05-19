import Image from "./Image";
import Description from "./Description";
import "../../styles/detailItems.css";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimulation from "../../fetchSimulation";
import Productos from "../../Products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailItems = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {
        setDatos([])

        fetchSimulation(Productos.filter( flt => flt.id === idItem), 1000)
        .then(respond => setDatos(respond))
    }, [idItem])
    
    return(
        <div className="detailItems">
            {
                datos.map( items => (
                    <>
                        <div className="containerIz">
                            <Image 
                                imagen={items.img}
                            />
                        </div>  

                        <div className="containerDer">
                            <Description 
                                title= {items.name}
                                parrafo= {items.description}
                                cantidad = {items.stock}
                                precio={items.price}
                            />
                        </div>
        
                        <div className="buttons">
                        
                            <ButtonDetalles 
                                txt="Agregar al carrito"
                            />
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default DetailItems