import { Link } from "react-router-dom";
// import { Page1 } from "../pages/page1"
// import { Page2 } from "../pages/page2"

export const Allpages = () => {
  return (
    <div className="pages">
      <Link to="/page1">
        <button className="num_but">1</button>
      </Link>
      <Link to="/page2">
        <button className="num_but">2</button>
      </Link>
      <Link to="/page3">
        <button className="num_but">3</button>
      </Link>
      <Link to="/page4">
        <button className="num_but">4</button>
      </Link>
      <Link to="/page5">
        <button className="num_but">5</button>
      </Link>
      <Link to="/page6">
        <button className="num_but">6</button>
      </Link>
      <Link to="/page7">
        <button className="num_but">7</button>
      </Link>
      <Link to="/page8">
        <button className="num_but">8</button>
      </Link>
      <Link to="/page9">
        <button className="num_but">9</button>
      </Link>
    </div>
  );
};
