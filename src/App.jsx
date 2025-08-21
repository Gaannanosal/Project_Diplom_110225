import "./App.scss";
import Footer from "./components/Footer/Footer"
import Categories from "./components/categories/Categories";
import DiscountForm from "./components/diskountForm/DiskountForm";
import "./components/Footer/Footer.scss"
import Sale from "./components/sale/Sale";

export default function App() {
  return (
    <div className="wrap">
      {/* Блок с картинками категорий */}
      <Categories />
      <DiscountForm />
      <Sale/>
      <Footer/>
    </div>
  );
}
