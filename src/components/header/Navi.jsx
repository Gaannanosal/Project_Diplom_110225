import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../theme/ThemeContext";
import "./Navi.scss";
import logo from "../../assets/logo.png";
import { PiSun } from "react-icons/pi";
import { AiOutlineMoon } from "react-icons/ai";
import { HiMiniHeart } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navi() {
  const { theme, toggleTheme } = useTheme();
  const likedCount = 0; // заглушки
  const cartCount = 0;

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
              <span className="navi__right-icon-count">{likedCount}</span>
            </span>

            <span className="navi__right-icon" title="Cart">
              <NavLink to="/cart">
                <HiOutlineShoppingBag />
              </NavLink>
              <span className="navi__right-icon-count">{cartCount}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="navi-margin" />
    </>
  );
}
