import Image from "./Image"
import "../../styles/cardItems.css"
import ButtonDetalles from "./ButtonDetalles"
import ButtonAddCart from "./ButtonAddCart"
import Description from "./Description"
import {Link} from "react-router-dom"

const CardItem = (props) => {
    return(
        <div className= "cardItems">
            <Image 
            img={props.img}
            />
            <Description
                title= {props.name}
                cantidad= {props.cantidad}
                precio= {props.price}
                description= {props.description}

            />
            <div className="buttons">
                <Link to= {`/item/${props.id}`}>
                <ButtonDetalles txt= "Ver Detalles"/>
                </Link>
                <ButtonAddCart/>
            </div>

        </div>
    )

}

export default CardItem