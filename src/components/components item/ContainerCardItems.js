import CardItem from "./CardItem";
import FetchSimulation from "../../fetchSimulation"
import Products from "../../Products"
import {useState, useEffect} from "react"

const ContainerCardItems = () => {
    const [datos, setDatos] = useState( [] )

    useEffect(() => {
        FetchSimulation(Products, 3000)
        .then(respond => setDatos(respond))
        .catch(error => console.log(error))
    }, [])

    return(
        <>
            {
                datos?.map(product => (
                    <CardItem
                        key={product.id}
                        img={product.img}
                        title={product.name}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }
        </>
    )
}

export default ContainerCardItems
