import Image from "./Image";
import Description from "./Description";
import "../../styles/detailItems.css";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimulation from "../../fetchSimulation";
import Productos from "../../Products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailItems = () => {
    const [ datos, setDatos ] = useState({});
    const { idItem } = useParams();
    
    useEffect(() => {
        setDatos([])

        fetchSimulation(Productos.find((flt) => flt.id === parseInt(idItem)), 1000)
        .then(respond => setDatos(respond))
    }, [idItem])
    
    return(
        <div className="detailItems">
            <>
            <div className="containerIz">
                <Image img= {datos.img}/>
            </div>  

            <div className="containerDer">
                <Description 
                    title= {datos.name}
                    description= {datos.description}
                    cantidad= {datos.stock}
                    precio= {datos.price}
                />
            </div>
        
            <div className="buttons">
                        
                <ButtonDetalles 
                    txt="Agregar al carrito"
                />
            </div>
            </>
        </div>
    )
}

export default DetailItems