import Image from "./Image"
import "../../styles/cardItems.css"
import ButtonDetalles from "./ButtonDetalles"
import ButtonAddCart from "./ButtonAddCart"
import Description from "./Description"
import ImgPrueba from "../../img/prueba.svg"


const CardItem = () =>{
    return(
        <div className= "cardItems">
            <Image img={ImgPrueba}/>
            <Description 
                title= "Cama Donita"
                cantidad= {50}
                precio= {3000}
            />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>

        </div>
    )

}

export default CardItem