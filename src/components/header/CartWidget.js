import cart from '../../img/cart.svg'

const CartWidget = () =>{
    return(
        <div className= "containerLength">
            <img src={cart} alt="carrito"></img>     
            <span className= "numCart" >1</span>
        </div>
        )
}

export default CartWidget