import logo from '../../img/logo.svg';
import {Link} from "react-router-dom"

const MiloLogo = () =>{
    return(
        <Link to= "/">
            <img src={logo} alt="tienda"></img>
        </Link>
    )
}

export default MiloLogo