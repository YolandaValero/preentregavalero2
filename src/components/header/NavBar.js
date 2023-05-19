import MiloLogo from "./MiloLogo"
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <header>
            <div className="containerMilo">
                <MiloLogo/>
            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Camas"
                    itemDos = "Casas"
                    itemTres = "Juguetes"
                    itemCuatro = "Ropa"
                
                />
            </nav>

            <div className="containerCart">
                <CartWidget/>

            </div>
        </header>
    )
}

export default NavBar