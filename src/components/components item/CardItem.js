import Image from "./Image"
import "../../styles/cardItems.css"
import ButtonDetalles from "./ButtonDetalles"
import ButtonAddCart from "./ButtonAddCart"
import Description from "./Description"

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
            />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>

        </div>
    )

}

export default CardItem