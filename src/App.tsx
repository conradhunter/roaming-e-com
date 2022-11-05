import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Shop from "./pages/Shop";
import Team from "./pages/Team";
import { useState } from "react";

function App() {

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/media' element={<Media/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/riders' element={<Team/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
