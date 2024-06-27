import like from "../ui/heart_fill.png";
import unlike from "../ui/heart_nofill.png";

export const LikeButton = ({
  handleColor,
  product,
  selectedColor,
  toggleFavorite,
  favorites,
}) => {
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleClick = () => {
    toggleFavorite(product);
    if (selectedColor !== 0) {
      handleColor(selectedColor);
    }
  };

  return (
    <button
      className={"h-[2rem] justify-center items-center"}
      onClick={handleClick}
    >
      {isFavorite ? (
        <img className="h-[20px] justify-center items-center" src={like} />
      ) : (
        <img className="h-[20px] justify-center items-center" src={unlike} />
      )}
    </button>
  );
};
