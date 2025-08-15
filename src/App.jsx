import "./App.css";
import { NavLink } from "react-router-dom";
import Categories from "./components/categories/Categories";

export default function App() {
  return (
    <div className="container">
      <section className="section">
        <div className="section_header">
          <h2>Categories</h2>
          <div className="line" />
          <NavLink to="/categories" className="section_btn">
            All categories
          </NavLink>
        </div>

        {/* Блок с картинками категорий */}
        <Categories />
      </section>
    </div>
  );
}