import "./ticket.css";
import TicketListItem from "../TicketListItem/TicketListItem";

const Ticket=()=>{
    return(
        <>
            <div className="ticket">
                        <div className="ticket__about">
                            <h3 className="ticket__abouttitle">Unresolved tickets</h3>
                            <a className="ticket__aboutlink" href="#">Wiew details</a>
                        </div>
                        <p className="ticket__text">Group: Support</p>
                        <ul className="ticket__list">
                            <TicketListItem title={"Waiting on Feature Request"} number={"4230"}/>
                            <TicketListItem title={"Awaiting Customer Response"} number={"1005"}/>
                            <TicketListItem title={"Awaiting Developer Fix"} number={"914"}/>
                            <TicketListItem title={"Pending"} number={"281"}/>
                        </ul>
            </div>
        </>
    )
}

export default Ticket;