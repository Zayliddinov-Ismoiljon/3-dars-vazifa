import "./overwiewitem.css"

const OverwiewItem=({title, number})=>{
    return(
        <>
            <li className="overwiew__item">
                <h3 className="overwiew__itemtitle">{title}</h3>
                <span className="overwiew__numspan">{number}</span>
            </li>
        </>
    )
}

export default OverwiewItem;