import Image1 from "./image1.webp";
import Image from "./image.webp";
import "./meet.css";

const Meet = () => {
  return (
    <div>
      <h1 className="candid">Meet The Candidates</h1>
      <p className="meet">
        The labour party's presidential ticket is a team of two outstanding
        leaders whose candidacy has inspired
        <br />
        Nigeria's fastest-growing and most significant political movement.
      </p>
      <div className="images">
        <div>
          <img src={Image1} className="img" />
          <h2 className="excell">His Excellency, Peter Gregory Obi,CON</h2>
          <a href="#" className="view" >VIew Profile</a>
        </div>
        <div >
          <img src={Image}  className="img"/>
          <h2 className="excell">Senator Yusuf Datti Baba-Ahmed,PhD</h2>
          <a href="#" className="view">View Profile</a>
        </div>
      </div>
    </div>
  );
};

export default Meet;
