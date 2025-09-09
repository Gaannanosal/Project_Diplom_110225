import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProductsCategory } from "../store/features/productsCategorySlice";
import ProductCard from "../components/products/ProductCard";
import "../components/styles/Sections.scss";
import NavigationHistory from "../components/navigationHistory/NavigationHistory";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";
import Sceleton from "../components/sceleton/Sceleton";

const CategoryProduct = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const { products, loading, error, category } = useSelector(
    (state) => state.productsCategory
  );
  const [datas, setDatas] = useState(products); 

  useEffect(() => {
    dispatch(fetchProductsCategory(categoryId));
  }, [categoryId]); 

  useEffect(() => {
    setDatas(products);
   
  }, [products]);

  const history = [
    { text: "Main page", to: "/" },
    { text: "Categories", to: "/categories" },
    { text: category.title, to: "/" },
  ];

  return (
    <div className="container">
      <div className="section">
        <NavigationHistory histores={history} />
        <div className="section__title">
          <h2>{category.title}</h2>
        </div>
        <ProductsFilter products={products} setProducts={setDatas} />
        <div className="section__list">
          {error ? (
            <h2 className="error-title">Something Error</h2>
          ) : loading ? (
            Array.from({ length: 8 }).map((_, i) => <Sceleton key={i} />)
          ) : (
            datas.map(
              (
                elem 
              ) => <ProductCard product={elem} key={elem.id} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
