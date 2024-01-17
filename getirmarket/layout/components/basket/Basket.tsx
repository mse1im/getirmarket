import './Basket.scss'

interface IBasketProps {}

const Basket: React.FC<IBasketProps> = () => {

  return (
    <div className='basket-lg'>
      <div className='basket-lg-item'>
        <div className="basket-lg-item-info">
          <span className="title">title</span>
          <span className="price"></span>
        </div>
        <div className='basket-lg-item-action'>
        action
        </div>
      </div>
      <div className='basket-lg-price'>
        <span>₺ price</span>
      </div>
    </div>
  );
};
export default Basket;
