import "./App.css";
import Cards from "./components/cards/cards";
import Home from "./components/home/home";
import Shop from "./components/shop/shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop/:shopId"
          element={
            <>
              <Shop/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
