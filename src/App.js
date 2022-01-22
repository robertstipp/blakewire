import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { About, Catalog, Contact, CustomCable, Home, Quality } from "./Pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quality" element={<Quality />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
