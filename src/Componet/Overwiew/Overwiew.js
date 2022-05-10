import "./overwiew.css";

import {OveriewHeaderIcon1, OverwiewHeaderIcon2} from "./OverwiewHeaderIcon/OverwiewHeaderIcon";
import OverwiewImg from "../../Assets/images/jones.png";
import OverwiewItem from "./OverwiewItem/OverwiewItem";
import TodayListItem from "./TodatListItem/TodayListItem";
import Ticket from "./Ticket/Ticket";
import Tack from "./Tack/Tack";

const Overwiew=()=>{
    return(
        <>
            <div className="overwiew__section">
                <div className="overwiew__header">
                    <h2 className="overwiew__headertitle">Overview</h2>
                    <div className="overwiew__about">
                        <div className="overwiew__info">
                            <OveriewHeaderIcon1/>
                            <OverwiewHeaderIcon2/>
                        </div>
                        <h3 className="overwiew__name">Jones Ferdinand</h3>
                        <img className="overwiew__img" src={OverwiewImg}/>
                    </div>
                </div>
                <ul className="overwiew__list">
                    <OverwiewItem title={"Unresolved"} number={"60"}/>
                    <OverwiewItem title={"Overdue"} number={"16"}/>
                    <OverwiewItem title={"Open"} number={"43"}/>
                    <OverwiewItem title={"On hold"} number={"64"}/>
                </ul>
                <div className="today">
                    <div className="today__info">
                        <h3 className="today__infotitle">Today’s trends</h3>
                        <div className="today__about">
                            <p className="today__abouttext">as of 25 May 2019, 09:41 PM</p>
                            <ul className="today__aboutlist">
                                <li className="today__aboutitem">
                                    <span className="today__aboutspan"></span>
                                    <p className="today__aboutitemtext">Today</p>
                                </li>
                                <li className="today__aboutitem">
                                    <span id="span" className="today__aboutspan"></span>
                                    <p className="today__aboutitemtext">Yesterday</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="today__list">
                        <TodayListItem title={"Resolved"} number={"449"}/>
                        <TodayListItem title={"Received"} number={"426"}/>
                        <TodayListItem title={"Average first response time"} number={"33m"}/>
                        <TodayListItem title={"Average response time"} number={"3h 8m"}/>
                        <TodayListItem title={"Resolution within SLA"} number={"94%"}/>
                    </ul>
                </div>
                <div className="untack">
                    <Ticket/>
                    <Tack/>
                </div>
            </div>
        </>
    )
}

export default Overwiew;