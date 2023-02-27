import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import SellPage from "./pages/SellPage/SellPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact strict path="/" element={<Homepage />} />
        <Route path="/collection/all" element={<SellPage />} />
        <Route exact path="/:nameProduct" element={<SellPage />} />
      </Routes>
    </div>
  );
}

export default App;
