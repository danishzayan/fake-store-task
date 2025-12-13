import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/login";
import Product from "./page/Product";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  );
}

export default App;
