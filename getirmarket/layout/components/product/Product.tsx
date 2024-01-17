import "./Product.scss"

const Product: React.FC<IProductProps> = ({ name, price }) => {
  return (
    <div className="product">
      <figure>
        <img src="https://dummyimage.com/92x92/#C4C4C/fff" alt="dummyimage" />
        <figcaption>
          <span className="price">₺ {price}</span>
          <span className="title">{name}</span>
        </figcaption>
      </figure>
      <button>Add</button>
    </div>
  );
};
export default Product;
