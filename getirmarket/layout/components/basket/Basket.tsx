import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "@/redux/actions";
import "./Basket.scss";
interface IBasketProps {}

const Basket: React.FC<IBasketProps> = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);

  const handleIncrease = (item: any) => {
    dispatch(increaseQuantity(item.name, item.price));
  };

  const handleDecrease = (item: any) => {
    dispatch(decreaseQuantity(item.name, item.price));
  };

  return (
    <div className='basket-lg'>
      {itemsInCart.map((item, index) => (
        <div key={index} className='basket-lg-item'>
          <div className="basket-lg-item-info">
            <span className="title">{item.name}</span>
            <span className="price">₺ {item.price.toFixed(2)}</span>
          </div>
          <div className='basket-lg-item-action'>
            <button onClick={() => handleDecrease(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrease(item)}>+</button>
          </div>
        </div>
      ))}
      <div className='basket-lg-price'>
        <span>₺ {total.toFixed(2)}</span>
      </div>
    </div>
  );
};
export default Basket;
