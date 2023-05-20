import "../../styles/itemCart.css"
import deleteWhite from "../../img/deleteWhite.svg"
import { useContext } from "react"
import { listCartContext } from "../components item/ProviderContextListCart"


const ItemCart = ( {id, title, img, price, quantity } ) => {

    const { removeFromCart } = useContext(listCartContext)
    
    return (
        <div className="itemCart">

            <div className="img">
                <img src={img} alt="imagen"></img>
            </div>

            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`cantidad: ${quantity}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * quantity}</span>
            </div>

            <button className="delete" onClick={ () => removeFromCart(id) }>
                <img src={deleteWhite} alt="imagen"></img>
            </button>
        </div>
    )
}

export default ItemCart