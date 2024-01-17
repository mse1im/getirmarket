import "./Type.scss";

const ItemType: React.FC<IItemTypeProps> = ({ title, onClick, className }) => {
  return <div className={`type ${className}`} onClick={onClick}>{title}</div>;
};
export default ItemType;
