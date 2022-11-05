import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Shop from "./pages/Shop";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Error from "./pages/Error";

function App() {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/media' element={<Media/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/riders' element={<Team/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/error'  element={<Error/>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
