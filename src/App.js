import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      <Navbar />
      <section class="layout-lg">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>{" "}
      </section>
      <Footer />
    </Router>
  );
}

export default App;
