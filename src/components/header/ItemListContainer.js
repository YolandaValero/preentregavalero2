import {Link} from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/camas">
                    {props.itemUno}
                </Link>
            </li>

            <li>
                <Link to="category/casas">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/juguetes">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/ropa">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )

}
export default ItemListContainer