import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./pages/home"
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Page4 } from "./pages/page4";
import { Page5 } from "./pages/page5";
import { Page6 } from "./pages/page6";
import { Page7 } from "./pages/page7";
import { Page8 } from "./pages/page8";
import { Page9 } from "./pages/page9";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<All />}/>
          <Route path="/page1" element={<Page1 />}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />}/>
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
