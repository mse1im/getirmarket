import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import "../Filters.scss";

interface IBrandsProps {
  onSelectBrand: (brandSlug: string) => void;
}

const Brands: React.FC<IBrandsProps> = ({ onSelectBrand }) => {
  const brands = useSelector((state: RootState) => state.brands.brands);
  const items = useSelector((state: RootState) => state.item.items);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(brands);

  const brandCounts: { [key: string]: number } = {};
  items.forEach((item) => {
    brandCounts[item.manufacturer] = (brandCounts[item.manufacturer] || 0) + 1;
  });

  const totalItemCount = items.length;

  const debounceSearch = useCallback(
    debounce((search) => {
      const filtered = brands.filter((brand) =>
        brand.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBrands(filtered);
    }, 300),
    [brands]
  );

  useEffect(() => {
    if (searchTerm) {
      debounceSearch(searchTerm);
    } else {
      setFilteredBrands(brands);
    }
    return () => debounceSearch.cancel();
  }, [searchTerm, debounceSearch]);

  return (
    <div className="filter-brands">
      <h4>Brands</h4>
      <div className="content">
        <input
          type="text"
          className="search"
          placeholder="Search brands"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="brands">
          {searchTerm === "" && (
            <label className="all">
              <input
                type="radio"
                name="brand"
                value="all"
                onChange={() => onSelectBrand("all")}
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
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              All <span className="count">({totalItemCount})</span>
            </label>
          )}
          {filteredBrands.map((brand) => (
            <label key={brand.slug}>
              <input
                type="radio"
                name="brand"
                value={brand.slug}
                onChange={() => onSelectBrand(brand.slug)}
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
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="title">{brand.name}</span>{" "}
              <span className="count">({brandCounts[brand.slug] || 0})</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
