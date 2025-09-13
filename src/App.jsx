import "./App.scss";
import { Routes, Route, Outlet } from "react-router-dom";
import ProductPage from './page/productPage/ProductPage.jsx'
import Navi from "./components/header/Navi.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Categories from "./components/categories/Categories.jsx";
import DiscountForm from "./components/diskountForm/DiskountForm.jsx";
import Sale from "./components/sale/Sale.jsx";
import AllSales from "./page/AllSales.jsx";
import AllProducts from "./page/AllProducts.jsx";
import CategoryProduct from "./page/CategoryProduct.jsx";
import AllCategories from "./page/Categories.jsx";
import Cart from "./page/Cart/Cart.jsx"
import useScrollToTop from "./hooks/useScrollToTop.js";

function Layout() {
  return (
    <div className="wrap">
      <Navi />
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Categories />
      <DiscountForm />
      <Sale />
    </>
  );
}

export default function App() {
  useScrollToTop()
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sales" element={<AllSales />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='cart' element={<Cart />}/>
        <Route
          path="categoriesProduct/:categoryId"
          element={<CategoryProduct />}
        />
        <Route
          path="*"
          element={
            <main className="page">
              <h1>404 — Not found</h1>
            </main>
          }
        />
      </Route>
    </Routes>
  );
}
