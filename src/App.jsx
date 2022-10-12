import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/login";
import Pokemons from "./components/pokemons";

function App() {
  return (
    <Router>


      <Navbar/>
      <div className="container">


      <Routes>
        <Route  path="/" exact element={<Pokemons/> }/>
        <Route  path="/login*" exact element={<Login/> }/>
      </Routes>

      </div>
    </Router>

  );
}

export default App;
