import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";
import { HiShoppingBag, HiOutlineShoppingBag } from "react-icons/hi";

import { getLikedProducts } from "../../store/features/productsSlice";
import { addProductsToCart } from "../../store/features/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const likedIds = useSelector((s) => s.products.likedProducts);
  const cartItems = useSelector((s) => s.cart.cart);

  const isLiked = likedIds.includes(product.id);
  const isInCart = cartItems.some((i) => i.id === product.id);

  const handleToggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(getLikedProducts(product.id));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isInCart) dispatch(addProductsToCart(product));
  };

  const apiBase = import.meta.env.VITE_APP_API_URL ?? "";
  const imgSrc = `${apiBase}${product.image || ""}`;
  const hasDiscount = !!product.discont_price;
  const discountPct = hasDiscount
    ? Math.round(
        ((product.price - product.discont_price) / product.price) * 100
      )
    : 0;

  return (
    <div className="productCard">
      <div className="productCard__image">
        <Link to={`/product/${product.id}`}>
          <img
            src={imgSrc}
            alt={product.title || "Product image"}
            loading="lazy"
          />

          {hasDiscount && (
            <div className="productCard__percentage">-{discountPct}%</div>
          )}
        </Link>

        <div className="productCard__icons">
          <div className="productCard__icons-item">
            <span
              className={`productCard__icons-heart-fill ${
                isLiked ? "liked" : ""
              }`}
              onClick={handleToggleLike}
              title={isLiked ? "In favorites" : "Add to favorites"}
              aria-label="toggle favorite"
            >
              <HiMiniHeart />
            </span>
            <span
              className={`productCard__icons-heart-stroke ${
                isLiked ? "hidden" : ""
              }`}
              aria-hidden
            >
              <HiOutlineHeart />
            </span>
          </div>

          <div className="productCard__icons-item">
            <span
              className={`productCard__icons-hoppingBag-fill ${
                isInCart ? "liked" : ""
              }`}
              onClick={handleAddToCart}
              title={isInCart ? "In cart" : "Add to cart"}
              aria-label="add to cart"
            >
              <HiShoppingBag />
            </span>
            <span
              className={`productCard__icons-hoppingBag-stroke ${
                isInCart ? "hidden" : ""
              }`}
              aria-hidden
            >
              <HiOutlineShoppingBag />
            </span>
          </div>
        </div>
      </div>

      <div className="productCard__info">
        <Link to={`/product/${product.id}`}>
          <div className="productCard__title">{product.title}</div>

          <div className="productCard__price">
            <span className="productCard__price-norm">
              ${hasDiscount ? product.discont_price : product.price}
            </span>

            {hasDiscount && (
              <span className="productCard__price-discount">
                ${product.price}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}
