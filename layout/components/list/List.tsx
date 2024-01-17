import Product from "../product/Product";
import Basket from "../basket/Basket";
import Pagination from "../pagination/Pagination";
import Type from "../filters/type/Type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { setBrands, setItems } from "@/redux/actions";
import Sorting from "../filters/sorting/Sorting";
import Spin from "../spin/Spin";
import Brands from "../filters/brands/Brands";
import Tags from "../filters/tags/Tags";
import "./List.scss";

const List: React.FC<IProductProps> = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const allItems = useSelector((state: RootState) => state.item.items);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [, setSelectedBrand] = useState("");
  const [, setSelectedTag] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const filterItems = (itemType: string) => {
    if (itemType === "all") {
      setFilteredItems(allItems);
      setActiveTag("");
    } else if (itemType === activeTag) {
      setFilteredItems(allItems);
      setActiveTag("");
    } else {
      const filtered = allItems.filter((item) => item.itemType === itemType);
      setFilteredItems(filtered);
      setActiveTag(itemType);
    }
    setCurrentPage(1);
  };

  const handleSort = (sortType: string) => {
    let sortedItems = [...filteredItems];
    switch (sortType) {
      case "priceLowToHigh":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "all") {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter((item) => item.tags.includes(tag));
      setFilteredItems(filtered);
    }
  };


  const handleSelectBrand = (brandSlug: string) => {
    setSelectedBrand(brandSlug);
    if (brandSlug === "all") {
      setFilteredItems(allItems);
    } else {
      const filtered = allItems.filter((item) => item.manufacturer === brandSlug);
      setFilteredItems(filtered);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(setItems());
      await dispatch(setBrands());
      setIsLoading(false);
    };
  
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(allItems);
  }, [allItems]);

  useEffect(() => {
    let filtered = allItems;

    if (activeTag) {
      filtered = filtered.filter((item) => item.itemType === activeTag);
    }

    setFilteredItems(filtered);
  }, [activeTag, allItems]);

  return (
    <Spin spinning={isLoading}>
      <main className="products">
        <div className="products-filters">
          <Sorting onSort={handleSort} />
          <Brands onSelectBrand={handleSelectBrand} />
          <Tags onSelectTag={handleSelectTag} />
        </div>
        <div className="products-wrapper">
          <h1>Products</h1>
          <div className="products-types">
            <Type
              title="all"
              onClick={() => filterItems("all")}
              className={activeTag === "" ? "active" : ""}
            />
            <Type
              title="mug"
              onClick={() => filterItems("mug")}
              className={activeTag === "mug" ? "active" : ""}
            />
            <Type
              title="shirt"
              onClick={() => filterItems("shirt")}
              className={activeTag === "shirt" ? "active" : ""}
            />
          </div>
          <div className="products-wrapper-items">
            {currentItems.map((item) => (
              <Product key={item.slug} name={item.name} price={item.price} />
            ))}
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredItems.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <div className="products-basket">
          <Basket />
        </div>
      </main>
    </Spin>
  );
};

export default List;
