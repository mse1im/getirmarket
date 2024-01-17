import Product from "../product/Product";
import Basket from "../basket/Basket";
import Pagination from "../pagination/Pagination";
import Type from "../filters/type/Type";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/redux/store";
import { setBrands, setItems } from "@/redux/actions";
import "./List.scss";

const List: React.FC<IProductProps> = () => {
  const dispatch = useDispatch();
  const allItems = useSelector((state: RootState) => state.item.items);
  const [filteredItems, setFilteredItems] = useState(allItems);
  const [activeTag, setActiveTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const filterItems = (itemType: string) => {
    if (itemType === activeTag) {
      setFilteredItems(allItems);
      setActiveTag("");
    } else {
      const filtered = allItems.filter((item) => item.itemType === itemType);
      setFilteredItems(filtered);
      setActiveTag(itemType);
    }
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(setItems());
    dispatch(setBrands());
  }, [dispatch]);

  useEffect(() => {
    let filtered = allItems;

    if (activeTag) {
      filtered = filtered.filter((item) => item.itemType === activeTag);
    }

    setFilteredItems(filtered);
  }, [activeTag, allItems]);

  return (
    <main className="products">
      <div className="products-filter">filtreler</div>
      <div className="products-wrapper">
        <h1>Products</h1>
        <div className="products-types">
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
  );
};

export default List;
