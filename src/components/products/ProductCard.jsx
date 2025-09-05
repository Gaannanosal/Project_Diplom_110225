import "./Products.scss";
import { useDispatch, useSelector } from "react-redux";
import { getLikedProducts } from "../../store/features/productsSlice";
import { HiOutlineHeart, HiMiniHeart } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { HiShoppingBag, HiOutlineShoppingBag } from "react-icons/hi";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { likedProducts } = useSelector((state) => state.products);
  const cartItem = useSelector((state) => state.cart.cart);
  const isLiked = likedProducts.includes(product.id);
  // const isInCart = cartItem.find(item => item.id === product.id) !== undefined;

  const handleLikedProducts = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(getLikedProducts(product.id));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addProductsToCart(product));
  };

  return (
    <div className="productCard">
      <div className="productCard__image">
        <Link to={`/product/${product.id}`}>
          <img
            src={`${(import.meta.env.VITE_APP_API_URL || "").replace(
              /\/+$/,
              ""
            )}${product.image}`}
            alt={product.title}
            className="productCard__image-el"
            loading="lazy"
          />
          {product.discount_price && (
            <div className="productCard__percentage">
              -
              {Math.round(
                ((product.price - product.discount_price) / product.price) * 100
              )}
              %
            </div>
          )}
        </Link>
      </div>

      <div className="productCard__icons">
        <span
          className={`productCard__icons-item ${isLiked ? "liked" : ""}`}
          onClick={handleLikedProducts}
        >
          {isLiked ? <HiMiniHeart /> : <HiOutlineHeart />}
        </span>

        <span
          className={`productCard__icons-item ${isLiked ? "liked" : ""} `}
          onClick={handleAddToCart}
        >
          {isLiked ? <HiShoppingBag /> : <HiOutlineShoppingBag />}
        </span>
      </div>

      <div className="productCard__info">
        <Link to={`/product/${product.id}`}>
          <div className="productCard__title">{product.title}</div>
          <div className="productCard__price">
            <span className="productCard__price-norm">
              {product.discount_price || product.price}
            </span>
            {product.discount_price && (
              <span className="productCard__price-discount">
                {product.price}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
