import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Error404 from "../src/components/errors/Error404";
import Home from "./pages/Home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Cart from "./pages/Cart";

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
