import Images from "../images/Ellipse 32.png";
import Fastar from "../component/FaStar";
import { Link } from "react-router-dom";

export const Griditem = () => {
  return (
    <div className="All">
      <div className="gridcontainer">
        <div className="griditem">
          <h4>
            "I've been a product writer
            <br /> for 5 years and i'm currently <br />
            working at the Roothub as a <br />
            web developer"
          </h4>
          <div className="flex">
            <img src={Images} />
            <br />
            <div className="right">
              <p>Emilia Johnson</p>
              <h4 className="pass">Web Developer</h4>
              <div className="fastar">{Fastar()}</div>
            </div>
          </div>
        </div>
        <Link to="#"><input className="request" value={"Request"} type="button"/></Link>
      </div>
     
    </div>
  );
};
