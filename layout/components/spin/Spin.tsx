import "./Spin.scss";

const Spin: React.FC<ISpinProps> = ({ spinning, children }) => {
  return (
    <div>
      {spinning ? (
        <div className="spin">
          <div className="loader"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Spin;
