import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Router> 
      <div>
        <nav>
          <Link to="/">Acasă</Link> | <Link to="/cart">Coș</Link> |{" "}
          <Link to="/checkout">Checkout</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/product/:id" element={<ProductDetails />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
