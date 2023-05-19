import cartCard from '../../img/cart-card.svg'

const ButtonAddCart = () =>{
    return(
        <button id="addCart"> 
            <img src={cartCard} alt="adding"></img> 
        </button>
    )
}

export default ButtonAddCart