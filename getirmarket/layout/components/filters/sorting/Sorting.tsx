import { useState } from "react";
import "../Filters.scss";

const Sorting: React.FC<ISortProps> = ({ onSort }) => {
  const [sortValue, setSortValue] = useState("name-asc");

  const handleSortChange = (value: string) => {
    setSortValue(value);
    onSort(value);
  };

  return (
    <div className="sorting">
      <h4>Sorting</h4>
      <div className="content sort">
        <label>
          <input
            type="radio"
            value="name-asc"
            checked={sortValue === "name-asc"}
            onChange={() => handleSortChange("name-asc")}
          />
          Name (A-Z)
        </label>
        <label>
          <input
            type="radio"
            value="name-desc"
            checked={sortValue === "name-desc"}
            onChange={() => handleSortChange("name-desc")}
          />
          Name (Z-A)
        </label>
        <label>
          <input
            type="radio"
            value="priceLowToHigh"
            checked={sortValue === "priceLowToHigh"}
            onChange={() => handleSortChange("priceLowToHigh")}
          />
          Price (Low to High)
        </label>
        <label>
          <input
            type="radio"
            value="priceHighToLow"
            checked={sortValue === "priceHighToLow"}
            onChange={() => handleSortChange("priceHighToLow")}
          />
          Price (High to Low)
        </label>
      </div>
    </div>
  );
};

export default Sorting;
