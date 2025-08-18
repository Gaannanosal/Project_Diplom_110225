import { NavLink } from "react-router-dom";
import "./Sale.scss";

export default function Sale() {
  return (
    <div className="sale">
      <div className="sale-header">
        <h2 className="sale-title">Sale</h2>
        <div className="sale__linie-wrapper">
          <div className="sale__linie"></div>
          <NavLink to="/sale">
            <div className="sale__btn">All sales</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
