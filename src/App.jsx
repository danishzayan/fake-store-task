import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/login";
import Product from "./page/Product";
import ViewProduct from "./page/ViewProduct";
import NotFound from "./page/NotFound";
import { Toaster } from "react-hot-toast";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ViewProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App;
