import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Basket: React.FC = () => {
  const total = useSelector((state: RootState) => state.cart.total);

  return (
    <div className="basket">
      <span className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z"
            fill="white"
          />
          <path
            d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z"
            fill="white"
          />
        </svg>
      </span>
      <span className="price">₺ {total.toFixed(2)}</span>
    </div>
  );
};
export default Basket;
