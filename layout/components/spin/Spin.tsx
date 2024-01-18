import "./Spin.scss";

const Spin: React.FC<ISpinProps> = ({ spinning, children }) => {
  return (
    <>
      {spinning ? (
        <div className="spin">
          <div className="loader"></div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Spin;
