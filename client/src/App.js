import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./components/Main";

function App() {


  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}
export default App;