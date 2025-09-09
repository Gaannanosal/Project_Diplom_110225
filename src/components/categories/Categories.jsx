import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/features/categoriesSlice";

import "../styles/Sections.scss";
import Category from "./Category";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const getRandomCategories = () => {
   
     return [...categories]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)
  };

  const randomCategories = getRandomCategories();

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="container">
      <div className="section">
        <div className="section__title">
          <h2>Categories</h2>
          <div className="section__linie-wrapper">
            <div className="section__linie"></div>
            <NavLink to="/categories">
              <div className="section__btn">All categories</div>
            </NavLink>
          </div>
        </div>

        <div className="section__list">
          {randomCategories.length
            ? randomCategories.map((cat) => {
                return <Category category={cat} key={cat.id} />;
              })
            : loading}
        </div>

        <div className="section__linie-wrapper-mob">
          <NavLink to="/categories">
            <div className="section__btn-mob">All categories</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
