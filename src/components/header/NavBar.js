import MiloLogo from "./MiloLogo"
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget"
import ContainerCart from "./ContainerCart"
import ContextCart from "./ContextCart"

const NavBar = () => {
    return(
        <ContextCart>
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
                <ContainerCart/>
            </header>
        </ContextCart>
    )
}

export default NavBar