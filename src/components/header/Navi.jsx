import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../theme/ThemeContext";
import "./Navi.scss";
import logo from "../../assets/logo.png";
import { PiSun } from "react-icons/pi";
import { AiOutlineMoon } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addProductsToCart } from "../../store/features/cartSlice";
import { HiMiniHeart } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { getLikedProducts } from "../../store/features/productsSlice";

export default function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const { products, likedProducts } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);

  const [randomProduct, setRandomProduct] = useState(null);

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cart);
  const productInCart =
    randomProduct && cartItems.find((item) => item.id === randomProduct.id);
const { theme, toggleTheme } = useTheme(); 
  useEffect(() => {
    const savedProduct = localStorage.getItem("dailyDiscountProduct");
    if (savedProduct) {
      const { product, timestamp } = JSON.parse(savedProduct);
      const now = new Date().getTime();

      if (now - timestamp >= 86400000) {
        localStorage.removeItem("dailyDiscountProduct");
      } else {
        setRandomProduct(product);
      }
    }
  }, []);

  return (
    <>
      <div className="navi">
        <div className="navi__container">
          <div className="navi__left">
            <img className="navi__container__logo" src={logo} alt="logo" />
            <div
              className={`navi__container__mode ${
                theme === "dark" ? "dark" : "light"
              }`}
              onClick={toggleTheme}
            >
              <div className="navi__container__mode-boll" />
              <PiSun className="navi__container__mode-sun" />
              <AiOutlineMoon className="navi__container__mode-moon" />
            </div>
          </div>

          <div className="navi__center">
            <div className="navi__promo">1 day discount!</div>
            <nav className="navi__menu">
              <ul className="navi__menu-list">
                <li className="navi__menu-item">
                  <NavLink to="/">Main Page</NavLink>
                </li>
                <li className="navi__menu-item">
                  <NavLink to="/categories">Categories</NavLink>
                </li>
                <li className="navi__menu-item">
                  <NavLink to="/products">All products</NavLink>
                </li>
                <li className="navi__menu-item">
                  <NavLink to="/sales">All sales</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navi__right">
            <span className="navi__right-icon" title="Favorites">
              <NavLink to="/products/likedProducts">
                <HiMiniHeart />
              </NavLink>
              <span className="navi__right-icon-count">
                {likedProducts.length}
              </span>
            </span>

            <span className="navi__right-icon" title="Cart">
              <NavLink to="/cart">
                <HiOutlineShoppingBag />
              </NavLink>
              <span className="navi__right-icon-count">{cart.length}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="navi-margin" />
    </>
  );
}
