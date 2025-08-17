import "./App.scss";

import Categories from "./components/categories/Categories";

import DiscountForm from "./components/diskountForm/DiskountForm";

export default function App() {
  return (
    <div className="wrap">
      {/* Блок с картинками категорий */}
      <Categories />
      <DiscountForm />
    </div>
  );
}
