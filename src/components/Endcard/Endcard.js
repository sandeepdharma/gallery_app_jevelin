import "./Endcard.scss";

const Endcard = () => {
  return (
    <div className="Endcard-container">
      <div className="footer-inner-container">
        <img
          src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/logo.png"
          alt="/"
          className="footer-title-image"
        />
        <p className="footer-matter">
          WordPress Theme built by{" "}
          <strong className="strong">ShuffleHound</strong>
        </p>
       
      </div>
    </div>
  );
};

export default Endcard;
