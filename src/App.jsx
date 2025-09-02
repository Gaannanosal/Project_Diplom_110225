import "./App.scss";
import Navi from "./components/header/Navi.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Categories from "./components/categories/Categories.jsx";
import DiscountForm from "./components/diskountForm/DiskountForm.jsx";
import Sale from "./components/sale/Sale.jsx";

export default function App() {
  return (
    <div className="wrap">
      <Navi />
      <Header />
      <Categories />
      <DiscountForm />
      <Sale />
      <Footer />
    </div>
  );
}