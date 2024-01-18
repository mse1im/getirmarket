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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M9 1L3.5 6L1 3.72727"
              stroke="#1EA4CE"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Name (A-Z)
        </label>
        <label>
          <input
            type="radio"
            value="name-desc"
            checked={sortValue === "name-desc"}
            onChange={() => handleSortChange("name-desc")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M9 1L3.5 6L1 3.72727"
              stroke="#1EA4CE"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Name (Z-A)
        </label>
        <label>
          <input
            type="radio"
            value="priceLowToHigh"
            checked={sortValue === "priceLowToHigh"}
            onChange={() => handleSortChange("priceLowToHigh")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M9 1L3.5 6L1 3.72727"
              stroke="#1EA4CE"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Price (Low to High)
        </label>
        <label>
          <input
            type="radio"
            value="priceHighToLow"
            checked={sortValue === "priceHighToLow"}
            onChange={() => handleSortChange("priceHighToLow")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
          >
            <path
              d="M9 1L3.5 6L1 3.72727"
              stroke="#1EA4CE"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Price (High to Low)
        </label>
      </div>
    </div>
  );
};

export default Sorting;
