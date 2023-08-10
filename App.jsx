import "./App.css";
import { Seet } from "./pages/seen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Join } from "./pages/join";
import { Candid } from "./pages/candidates";
import { Party } from "./pages/party";
import { Labour } from "./pages/labour";
import { Material } from "./pages/material";
import { Contact } from "./pages/contacts";
import { Donate } from "./pages/donate";
import { Submit } from "./pages/submit";
import React from "react"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Seet />} />
          <Route path="/join" element={<Join />} />
          <Route path="/candidates" element={<Candid />} />
          <Route path="/party" element={<Party />} />
          <Route path="/labour" element={<Labour />} />
          <Route path="/material" element={<Material />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
