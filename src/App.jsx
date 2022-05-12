import react, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blocks from "./components/Blocks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
      <Route
          path="/create"
          element={<Blocks />}
        ></Route>
      
        
      </Routes>
    </div>
  );
}

export default App;
