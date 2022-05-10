import "./tack.css";

const Tack=()=>{
    return(
        <>
            <div className="tack__about">
                <div className="tack__info">
                    <h3 className="tack__abouttitle">Tasks</h3>
                    <a className="tack__aboutlink" href="#">View all</a>
                </div>
                <p className="tack__text">Today</p>
                <div className="tack__create">
                    <h4 className="tack__createtitle">Create new task</h4>
                    <button type="button" className="tack__createbtn">+</button>
                </div>
                <form className="form">
                    <label className="form__label" name="radio">
                        <div className="input__about">
                        <input className="form__input" type="radio" name="radio"/>
                        Finish ticket update
                        </div>
                        <button type="button" className="form__button1">Urgent</button>
                    </label>
                    <label className="form__label" name="radio">
                        <div className="input__about">
                            <input className="form__input" type="radio" name="radio"/>
                            Create new ticket example
                        </div>
                        <button type="button" className="form__button2">New</button>
                    </label>
                    <label className="form__label" name="radio">
                        <div className="input__about">
                            <input className="form__input" type="radio" name="radio"/>
                            Update ticket report
                        </div>
                        <button type="button" className="form__button3">Default</button>
                    </label>
                </form>
            </div>
        </>
    )
}

export default Tack;