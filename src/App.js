import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPanel />
      </BrowserRouter>
    </div>
  );
}

export default App;
