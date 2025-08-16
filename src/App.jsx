import "./App.scss";

import Categories from "./components/categories/Categories";

export default function App() {
  return (
    <div className="container">
      {/* Блок с картинками категорий */}
      <Categories />
    </div>
  );
}
