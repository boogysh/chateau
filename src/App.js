import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Error404 from "./components/errors/Error404";
import Home from "./components/home/Home";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panier" element={<Cart />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
