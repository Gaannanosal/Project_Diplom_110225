import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../products/ProductCard.jsx";
import "../styles/Sections.scss";
import NavigationHistory from "../navigationHistory/NavigationHistory.jsx";
import ProductsFilter from "../ProductsFilter/ProductsFilter.jsx";
import Sceleton from "../sceleton/Sceleton.jsx";
import { fetchProducts } from "../../store/features/productsSlice.js";

export default function AllSales() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((s) => s.products);

  useEffect(() => {
    if (!products || products.length === 0) dispatch(fetchProducts());
  }, [dispatch, products]);

  const discounted = useMemo(
    () => (products || []).filter((p) => p.discont_price != null),
    [products]
  );
  const [list, setList] = useState(discounted);

  useEffect(() => setList(discounted), [discounted]);

  const history = [
    { text: "Main page", to: "/" },
    { text: "All sales", to: "/sales" },
  ];

  return (
    <div className="container">
      <div className="section">
        <NavigationHistory histores={history} />

        <div className="section__title">
          <h2>Discounted items</h2>
        </div>

        <ProductsFilter
          isDiscount={false}
          products={products}
          setProducts={setList}
        />

        <div className="section__list">
          {loading
            ? Array.from({ length: 12 }).map((_, i) => <Sceleton key={i} />)
            : list?.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}
