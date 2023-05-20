import CardItem from "./CardItem";
import FetchSimulation from "../../fetchSimulation"
import Products from "../../Products"
import {useState, useEffect} from "react"
import "../../styles/containerCardItems.css"
import { useParams } from "react-router-dom";

const ContainerCardItems = () => {
    const [datos, setDatos] = useState( [] )
    let {idCategory} = useParams()

    useEffect(() => {
        setDatos([]);

        if (idCategory === undefined){
            FetchSimulation(Products, 1000)
            .then(respond => setDatos(respond))
        } else{
            FetchSimulation(Products.filter((filter) => filter.type === idCategory), 1000)
            .then(respond => setDatos(respond))
        }
    }, [idCategory])

    return(
        <div className="containerCardItems">
            {
                datos.map((product) => (
                    <CardItem
                        id={product.id}
                        key={product.id}
                        img={product.img}
                        title={product.name}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCardItems
