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
              All ({totalItemCount})
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
              {brand.name} ({brandCounts[brand.slug] || 0})
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
