import "./Categories.scss";
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <NavLink to={`/categoriesProduct/${category.id}`}>
      <div className="catedoryCard">
        <div className="catedoryCard__image">
          <img
            src={`${import.meta.env.VITE_APP_API_URL}${category.image}`}
            alt={category.title}
            className="category-image"
          />
        </div>
        <div className="catedoryCard__title">{category.title}</div>
      </div>
    </NavLink>
  );
};
export default Category;
