import PropTypes from "prop-types";

const euroSymbol = String.fromCodePoint(0x020ac);

const ProductCard = ({ image, title, rate, price }) => {
  const ratingIcon =
    "https://icons.veryicon.com/png/o/commerce-shopping/mivi-official-mall/star-rating-5.png";
  return (
    <div className="card">
      <img className="product-img" src={image} alt={title} />
      <div className="product-info">
        <div className="title-rating">
          <h2>{title}</h2>
          <img src={ratingIcon} alt="product rating" className="rate" />
          <span>{rate}</span>
        </div>
        <h3>
          <sup className="euro-symbol">{euroSymbol}</sup>
          {price}
        </h3>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export { ProductCard, euroSymbol };
