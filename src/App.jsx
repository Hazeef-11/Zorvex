import Navbar from "./Navigation/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Foot from "./Footer/Foot";
import Collection from "./Pages/Collection";
import Mens_product from "./Product pages/Mens_product";
import Womens_product from "./Product pages/womens_product";
import Accessories_products from "./Product pages/Accessories_products";
import Footwear_products from "./Product pages/Footwear_products";
import Backpack_product from "./Product pages/backpack_product";
import Sunglasses_product from "./Product pages/Sunglasses_product";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mens-product" element={<Mens_product />} />
          <Route path="/womens-product" element={<Womens_product />} />
          <Route path="/accessories-product" element={<Accessories_products />}/>
          <Route path="/footwear-product" element={<Footwear_products />} />
          <Route path="/bag-product" element={<Backpack_product />} />
          <Route path="/sunglasses-product" element={<Sunglasses_product />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </>
  );
}

export default App;
