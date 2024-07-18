import { useContext } from "react";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";
import like from "../ui/heart_fill.png";
import unlike from "../ui/heart_nofill.png";
import { FavoritesContext } from "../pages/App";
import compare from "../ui/compare.png";
import ButtonToCompare from "../ItemsPage/ButtonToCompare";

export const Items = (props) => {
  const { name, img, price, id, product } = props;
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const handleClick = () => {
    toggleFavorite(product);
  };
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  return (
    <div className="w-[325px] h-[200px] hover:shadow-[0_60px_30px_rgb(0,0,0,0.15)]">
      <div className="bar flex justify-between">
        <a
          title="New Product"
          className=" bg-gray-300 text-[0.8rem] rounded-[30px] w-[60px] flex justify-center items-center"
        >
          NEW
        </a>
        <div className="flex gap-3">
          <button
            className={"h-[2rem] justify-center items-center"}
            onClick={handleClick}
          >
            {isFavorite ? (
              <img
                className="h-[17px] justify-center items-center"
                src={like}
              />
            ) : (
              <img
                className="h-[17px] justify-center items-center"
                src={unlike}
              />
            )}
          </button>

          <ButtonToCompare product={product}>
            <img className="h-[20px] mr-2" src={compare} />
          </ButtonToCompare>
        </div>
      </div>
      <Link key={id} to={`/Mountainbikes/${id}`}>
        <img
          src={img}
          className="max-w-full min-h-full object-cover"
          alt="bike"
        />

        <a className="justify-center hover:cursor-pointer flex wrap">{name}</a>
        <a className="justify-center flex hover:cursor-pointer ">{`${price}$`}</a>
      </Link>
    </div>
  );
};

export default Items;
