const Image = (props) =>{
    return(
        <div className= "cardImg">
            <img className="agregarImg" src={props.img} alt="camita"></img>

        </div>
    )
}

export default Image