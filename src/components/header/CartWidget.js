import { useContext } from 'react'
import cart from '../../img/cart.svg'
import { listCartContext } from '../components item/ProviderContextListCart'
import {controllerShowCart} from "./ContextCart"

const CartWidget = () =>{
    const {setCartShow, cartShow} = useContext(controllerShowCart)
    const {listCart} = useContext (listCartContext)
    const showCart=() => {
        setCartShow((cartShow === "none") ? "flex" : "none")
    }

    return(
        <div className= "containerLength" onClick={showCart}>
            <img src={cart} alt="carrito"></img>     
            <span className= "cantidadCart">
                {listCart.length}
            </span>
        </div>
        )
}

export default CartWidget