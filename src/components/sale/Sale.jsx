import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import ProductCard from "../products/ProductCard";
import Sceleton from "../sceleton/Sceleton";
import { fetchProducts } from "../../store/features/productsSlice";
import "./Sale.scss";

export default function Sale() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((s) => s.products);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  const discounted = useMemo(() => {
    return (products || []).filter((p) => p.discont_price != null).slice(0, 4);
  }, [products]);

  return (
    <section className="sale">
      <div className="sale-header">
        <h2 className="sale-title">Sale</h2>

        <div className="sale__linie-wrapper">
          <div className="sale__linie" />
          <NavLink to="/sales" className="sale__btn">
            All sales
          </NavLink>
        </div>
      </div>

      <div className="sale-grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <Sceleton key={i} />)
          : discounted.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}
