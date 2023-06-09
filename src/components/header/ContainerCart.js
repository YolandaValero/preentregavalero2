import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../components item/ProviderContextListCart";

const ContainerCart = () => {

    const {listCart, clearCart } = useContext(listCartContext);
    const { cartShow, setCartShow} = useContext(controllerShowCart);
    
    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="cart" style={style} >
            <div className="cerrar">
                <button className="close" onClick={closeCart}>
                    <img src={close} alt="imagen"></img>
                </button>
            </div>

            <div className="containerItemsCart">
                {
                    (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito está vacío, ¡Vamos a llenarlo!</span>
                    : listCart.map(product => ( 
                        <ItemCart 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            img={product.img}
                            quantity={product.quantity}
                            price={product.price}
                        />
                    ))
                }   
            </div>

            <div className="TerminarCompra">
                    
                <button className="terminar" >
                    Finalizar Compra
                </button>

                <button className="clear" onClick={clearCart}>
                    <img src={clear} alt="imagen"></img>
                </button>
            </div>
        </div>
        
    )
}

export default ContainerCart