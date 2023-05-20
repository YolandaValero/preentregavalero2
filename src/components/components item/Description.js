const Description = (props) =>{
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <span className="descriptionTitle"></span>
            <p className="parrafo">
                {props.description}
            </p>

            <span className="cantidad">
                Cantidad: {props.cantidad}
            </span>

            <span className="precio">
                ${props.precio}
            </span>
        </div>
    )
}

export default Description