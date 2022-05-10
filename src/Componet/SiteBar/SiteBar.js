import "./sitebar.css";

import SiteBarLogo from "./SiteBarLogo/SiteBarLogo";
import SiteBarListItem from "./SiteBarListIteam/SiteBarListItem";
import { SiteBarItemIcon1, SiteBarItemIcon2, SiteBarItemIcon3, SiteBarItemIcon4, SiteBarItemIcon5, SiteBarItemIcon6, SiteBarItemIcon7, SiteBarItemIcon8 } from "./SiteBarListIteam/SiteBarItemIcon/SiteBarItemIcon";

const SiteBar=()=>{
    return(
        <>
            <div className="sitebar">
                <div className="sitebar__header">
                    <a className="sitebar__logolink" href="/">
                        <SiteBarLogo/>
                    </a>
                    <p className="sitebar__logotext">Dashboard Kit</p>
                </div>
                <ul className="sitebar__list">
                    <SiteBarListItem Icon={SiteBarItemIcon1} text={"Overview"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon2} text={"Tickets"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon3} text={"Ideas"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon4} text={"Contacts"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon5} text={"Agents"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon6} text={"Articles"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon7} text={"Settings"}/>
                    <SiteBarListItem Icon={SiteBarItemIcon8} text={"Subscription"}/>
                </ul>
            </div>
        </>
    )
}

export default SiteBar;