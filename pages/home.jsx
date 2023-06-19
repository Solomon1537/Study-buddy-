import { Griditem } from "../component/Griditem";
import { Allpages } from "../component/Allpages";
import { Griditem1 } from "../component/Griditem1";
import { Griditem2 } from "../component/Griditem2";

const All = () => {
  return (
    <div className="App">
      <h1>Let's get you matched</h1>
      <div className="cover">
        <div className="grid">
          <Griditem />
          <Griditem1 />
          <Griditem2 />
        </div>
        <div>
          <Allpages />
        </div>
      </div>
    </div>
  );
};
export default All;
