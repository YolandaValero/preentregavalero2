import Image from "./Image"
import "../../styles/cardItems.css"
import ButtonDetalles from "./ButtonDetalles"
import ButtonAddCart from "./AddCart"
import Description from "./Description"
import {Link} from "react-router-dom"
import cart from "../../img/cart-card.svg"

const CardItem = (props) => {
    return(
        <div className= "cardItems">
            <Image 
                img={props.img}
            />
            <Description
                title= {props.title}
                cantidad= {props.cantidad}
                precio= {props.precio}
                description={props.description}

            />
            <div className="buttons">
                <Link to= {`/item/${props.id}`}>
                <ButtonDetalles txt= "Ver Detalles"/>
                </Link>
                <ButtonAddCart id={props.id} svg={cart}/>
            </div>
        </div>
    )
}
export default CardItem