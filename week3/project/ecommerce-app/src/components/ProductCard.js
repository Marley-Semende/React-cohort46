import PropTypes from "prop-types";
import { useFavorites } from "../contexts/FavoritesContext";
import regularHeart from "../assets/heart-regular.svg";
import solidHeart from "../assets/heart-solid.svg";
import euroSymbol from "../util/util";

const ProductCard = ({ image, title, rate, price, id }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const ratingIcon =
    "https://icons.veryicon.com/png/o/commerce-shopping/mivi-official-mall/star-rating-5.png";

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className="card">
      <img className="product-img" src={image} alt={title} />
      <img
        className="favorite-icon"
        src={isFavorite(id) ? solidHeart : regularHeart}
        alt="Heart Icon"
        onClick={handleFavoriteToggle}
      />
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
  id: PropTypes.number.isRequired,
};

export { ProductCard, euroSymbol };
