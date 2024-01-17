import { useDispatch } from "react-redux";
import "./Product.scss"
import { addToCart } from "@/redux/actions";

const Product: React.FC<IProductProps> = ({ name, price }) => {
  const dispatch = useDispatch();

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
