import { Footer } from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/header/NavBar";
import { MainContent } from "./pages/MainContent";
import { Checkout } from "./pages/Checkout";
import { NotFound } from "./pages/NotFound";
import { ShowProduct } from "./pages/ShowProduct";
import { CategoryProducts } from "./components/main/categories/CategoryProducts";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:category" element={<CategoryProducts />} />
          <Route path="headphones/:id" element={<ShowProduct />} />
          <Route path="earphones/:id" element={<ShowProduct />} />
          <Route path="speakers/:id" element={<ShowProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
