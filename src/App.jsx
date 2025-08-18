import "./App.scss";

import Categories from "./components/categories/Categories";

import DiscountForm from "./components/diskountForm/DiskountForm";
import Sale from "./components/sale/Sale";
export default function App() {
  return (
    <div className="wrap">
      {/* Блок с картинками категорий */}
      <Categories />
      <DiscountForm />
      <Sale/>
    </div>
  );
}
