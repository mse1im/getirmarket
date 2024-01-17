import { useDispatch, useSelector } from "react-redux";
import "./Product.scss"
import { addToCart } from "@/redux/actions";
import { RootState } from "@/redux/store";

const Product: React.FC<IProductProps> = ({ name, price }) => {
  const dispatch = useDispatch();
  const total = useSelector((state: RootState) => state.cart.total);

  const handleAddToCart = () => {
    const item = { name, price };
    dispatch(addToCart(item));
  };

  return (
    <div className="product">
      <figure>
        <img src="https://dummyimage.com/92x92/#C4C4C/fff" alt="dummyimage" />
        <figcaption>
          <span className="price">₺ {price}</span>
          <span className="title">{name}</span>
        </figcaption>
      </figure>
      <button onClick={handleAddToCart}>Add</button>
    </div>
  );
};
export default Product;
