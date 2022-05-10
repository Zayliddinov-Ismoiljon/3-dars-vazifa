import "./todaylistitem.css";

const TodayListItem=({title, number})=>{
    return(
        <>
            <li className="today__item">
                <h3 className="today__itemtitle">{title}</h3>
                <span className="today__itemspan">{number}</span>
            </li>
        </>
    )
}

export default TodayListItem;