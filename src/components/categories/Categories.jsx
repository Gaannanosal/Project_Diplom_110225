
import fertilizer from "../../assets/fertilizer.jpg";
import planting from "../../assets/planting.jpg";
import protection from "../../assets/protection.jpg";
import tools from "../../assets/tools.jpg";
import "./Categories.css";

export default function Categories() {
  return (
    <div className="categories">
      <div className="category-card">
        <img src={fertilizer} alt="Fertilizer" />
        <p>Fertilizer</p>
      </div>

      <div className="category-card">
        <img src={planting} alt="Planting material" />
        <p>Protective products and septic tanks</p>
      </div>

      <div className="category-card">
        <img src={protection} alt="Plant protection" />
        <p>Planting material	</p>
      </div>

      <div className="category-card">
        <img src={tools} alt="Tools and equipment" />
        <p>Tools and equipment</p>
      </div>
    </div>
  );
}