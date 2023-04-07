import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Sale from "./pages/Sale";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <section className="layout-lg">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </div>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
