import { useEffect, useState } from "react";
import "./ProductsFilter.scss";
import { FaCheck } from "react-icons/fa6";

const isNumber = (text) => {
 
  return !Number.isNaN(+text);
};

const ProductsFilter = ({ isDiscount = true, products, setProducts }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [isDiscout, setIsDiscount] = useState(false);
  const [typeProducts, setTypeProducts] = useState("");

  const getSortProducts = () => {
    if (typeProducts === "") return [...products]; 

    return [...products].sort((a, b) => {
      const priceA = a.discont_price || a.price;
      const priceB = b.discont_price || b.price;
      switch (typeProducts) {
        case "low":
          return priceB - priceA;
        case "hight":
          return priceA - priceB;
        case "a-z": {
          const aText = a.title.toLowerCase();
          const bText = b.title.toLowerCase();
          if (aText > bText) return 1; 
          if (aText < bText) return -1;
          return 0;
        }
      }
    });
  };

  useEffect(() => {
    const productsSorted = getSortProducts(); 
    const fromS = +from;
    const toS = !+to ? Infinity : +to;
    
    const newDatas = productsSorted.filter((elem) => {
     
      const price = elem.discont_price || elem.price; 

      const isPrice = fromS <= price && toS >= price;
      const isDiscountS = isDiscout && isDiscount ? elem.discont_price : true;
      return isPrice && isDiscountS;
    });

    setProducts(newDatas);
  }, [from, to, isDiscout, typeProducts, products, isDiscount]);

  const handleChangeFrom = (e) => {
   
    const text = e.target.value; 
    const is = isNumber(text); 
    if (is) {
      setFrom(text); 
    }
  };

  const handleChangeTo = (e) => {
    const text = e.target.value;
    const is = isNumber(text);
    if (is) {
      setTo(text);
    }
  };

  const handleChangeDiscount = () => {
    
    setIsDiscount(!isDiscout);
  };

  const handleTypeProducts = (e) => {
    setTypeProducts(e.target.value);
  };

  return (
    <div className="productsFilter">
      <div className="productsFilter__priceRange">
        <p className="productsFilter__title">Price</p>
        <input
          onChange={handleChangeFrom}
          value={from}
          className="productsFilter__price"
          pattern="[1-9][0-9]*"
          type="text"
          inputMode="numeric"
          placeholder="from"
        />
        <input
          onChange={handleChangeTo}
          value={to}
          className="productsFilter__price"
          type="text"
          inputMode="numeric"
          placeholder="to"
        />
      </div>

      {isDiscount && (
        <div className="productsFilter__discount">
          <p className="productsFilter__label">Discounted items</p>
          <div className="customCheckbox" onClick={handleChangeDiscount}>
            {isDiscout && (
              <div className="customCheckbox-checked">
                <FaCheck />{" "}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="productsFilter__sort">
        <p className="productsFilter__title">Sorted</p>
        <select
          onChange={handleTypeProducts}
          value={typeProducts}
          className="productsFilter__select"
        >
          <option value="">by default</option>
          <option value="low">price: high-low</option>
          <option value="hight">price: low-high</option>
          <option value="a-z">alphabetical: A to Z</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsFilter;
