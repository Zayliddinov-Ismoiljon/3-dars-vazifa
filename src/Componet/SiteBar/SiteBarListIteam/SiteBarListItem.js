import "./sitebarlistitem.css";

const SiteBarListItem=({Icon, text})=>{
    return(
        <>
            <li className="sitebar__listitem">
                <a href="#" className="sitebar__listlink"><Icon/></a>
                <a href="#" className="sitebar__listlink">
                <p className="sitebar__icontext">{text}</p>
                </a>
            </li>
        </>
    )
}

export default SiteBarListItem;