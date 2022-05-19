//Dependencies
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import NFT from "./Pages/NFT";
import Messages from "./Pages/Messages";
import Quiz from "./Pages/Quiz";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
