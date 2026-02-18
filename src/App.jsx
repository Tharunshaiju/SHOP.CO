import Header from "./components/Header";
import Home from "./Pages/Home";
import Arrivals from "./Pages/Arrivals";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Order from "./Pages/Order";
import { useState } from "react";
import Filter from "./Pages/Filter";
import ProductDetails from "./Pages/ProductDetails";



function App() {
  const [order, setOrder] = useState(null);
  return (
    <div className="bg-white">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Arrivals />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder}/>} />
          <Route path="/order-confirmation" element={<Order order={order}/>} />
          <Route path="/filter-data" element={<Filter />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer  />
       
        
      </BrowserRouter>
    </div>
  );
}

export default App;
