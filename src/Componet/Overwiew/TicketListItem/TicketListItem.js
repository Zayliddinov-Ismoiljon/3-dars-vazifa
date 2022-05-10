import "./ticketlistitem.css";

const TicketListItem=({title, number})=>{
    return(
        <>
            <li className="ticket__item">
                <h3 className="ticket__itemtitle">{title}</h3>
                <span className="ticket__itemspan">{number}</span>
            </li>
        </>
    )
}

export default TicketListItem;