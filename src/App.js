import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Product from "./components/Product";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route path="/cart" element={Cart} />
        <Route path="/product" element={(props) => <Product {...props} />} />
        <Route path="/checkout" element={Checkout} />
        <Route path="/orders" element={Orders} />
        <Route path="/payment" element={Payment} />
    </Routes>
  );
}
export default App;
