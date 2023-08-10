import Flag from "./flag.jpg"
import "./live.css"

export const Live = () => {
    return(
        <div>
            <h1 className="live">Live Stream</h1>
            <p className="labour">Labour party press conference to announce the campaign council</p>
            <img src={Flag} className="flag"/>
        </div>
    )
}

