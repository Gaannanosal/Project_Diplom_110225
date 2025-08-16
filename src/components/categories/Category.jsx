import "./Categories.scss";

const Category = ({ category }) => {
  console.log(category);

  return (
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



  );
};
export default Category;
