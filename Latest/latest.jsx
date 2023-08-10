import "./latest.css";
import Image2 from "./fingerprint.png";
import Image3 from "./image4.jpg";
import { Link } from "react-router-dom";

export const Latest = () => {
  return (
    <div className="bold">
      <div className="project">
        <button className="but2">
          <a href="#">Ob/Datti Victory Funds</a>
        </button>
        <h1 className="help">
          Help Make Our <br />
          Dream for a New <br />
          Nigeria Come True!
        </h1>
        <h4 className="need">
          NIgeria needs all patriots on board im this project.We need your{" "}
          <br />
          support to win this 2023 election.Together we will, TAKE BACK NIGERIA.
        </h4>
        <Link to="/donate">
          <input type="submit" className="but3" value={"Donate"} />
        </Link>
        <br />
        <input
          type="button"
          value={
            "*Foreign donations are currently not accepted on this platform"
          }
          className="but4"
        />
      </div>
      <div className="project1">
        <h1 className="vote">VOTE</h1>
        <div className="imagess">
          <img src={Image2} className="pics" />
          <img src={Image3} className="pic2" />
        </div>
        <h3>
          2023 <span className="span">Presidential</span>
        </h3>
        <h2 className="h2">ELECTION</h2>
      </div>
    </div>
  );
};
