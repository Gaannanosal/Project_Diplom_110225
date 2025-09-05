import "./App.scss";
import { Routes, Route, Outlet } from "react-router-dom";

import Navi from "./components/header/Navi.jsx";
import Header from "./components/header/Header.jsx";
 import Footer from "./components/Footer/Footer.jsx";
import Categories from "./components/categories/Categories.jsx";
import DiscountForm from "./components/diskountForm/DiskountForm.jsx";
import Sale from "./components/sale/Sale.jsx";
import AllSales from "./components/page/AllSales.jsx";


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
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/sales" element={<AllSales />} />

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
