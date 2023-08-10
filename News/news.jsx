import "./news.css";
import Image5 from "./image5.jpg";
import Image6 from "./image6.jpg";

const News = () => {
  return (
    <div className="div">
      <h1 className="news">Latest News</h1>
      <p className="short">
        Articles, opinions, short or long stories trailing the labour party's
        <br /> presidential election campaign leading up to 2023
      </p>
      <div className="none">
        <div>
          <img src={Image6} className="obis" />
          <h2>Nobody can sabotage obidients says Peter Obi's support group</h2>
        </div>
        <div>
          <img src={Image5} className="obis " />
          <h2>When i'm encouraged about Peter Obi's movement- Charly Boy</h2>
        </div>

        <button className="but5"><a href="#">See More</a></button>
      </div>
    </div>
  );
};

export default News;
