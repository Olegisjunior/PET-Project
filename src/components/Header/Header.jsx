import Logo from "../ui/Logo.svg";
import Heart from "../ui/heart.png";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import close from "../ui/closeImg.png";
import compare from "../ui/comapre.svg";
import { FavoritesContext } from "../pages/App/";
import { ColorContext } from "../pages/App/";

export const Header = () => {
  const [selected, setSelected] = useState(false);

  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { bikeColor } = useContext(ColorContext);

  const DataForModal = () => {
    setSelected(!selected);
  };

  const selectedImageFunc = (item, bikeColor) => {
    if (item.colors.length <= 1 && !bikeColor) {
      if (item.galimg) {
        console.log(`1 if`);
        return item.galimg[0];
      } else {
        console.log(`1 else`);
        return item.img;
      }
    } else if (item.colors.length >= 1 && !bikeColor) {
      console.log(`2 elseif`);
      return item.galimg[0];
    } else if (item.galimg && item.colors.length === 1 && bikeColor) {
      console.log(`2 elseif`);
      return item.galimg[0];
    } else if (item.colors.length === 1 && bikeColor) {
      console.log(`2 elseif`);
      return item.img;
    } else if (item.colors.length > 1 && bikeColor === item.colors[0]) {
      console.log(`3 elseif`);
      return item.galimg[0];
    } else if (item.colors.length > 1 && bikeColor === item.colors[1]) {
      console.log(`4 elseif`);
      return item.galimg2[0];
    }
  };

  return (
    <header className="bg-[#1E1E1E] w-full h-[60px] flex justify-around items-center ">
      <div className="logo">
        <img className="ml-2 h-[30px] invert " src={Logo} alt="logo" />
        <div className="font-semibold text-white">BikeStaff</div>
      </div>
      <div className="nav-items justify-around font-s`semibold text-white flex gap-5 ">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Mountainbikes">Mountain</Link>
        </div>
        <div>
          <Link to="">Road</Link>
        </div>
        <div>
          <Link to="">City</Link>
        </div>
        <div>
          <Link to="">Electic</Link>
        </div>
        <div>
          <Link to="">Kids</Link>
        </div>
        <div>
          <Link to="">Accessories</Link>
        </div>
        <div>
          <Link to="">About us</Link>
        </div>
      </div>
      <div className="nav-end font-semibold text-white flex gap-3 relative">
        <div>
          <Link to="">Sign in</Link>
        </div>
        <div>
          <Link to="">Sign up</Link>
        </div>
        <div>
          <Button onClick={() => DataForModal()}>
            <img className="h-[20px] " src={Heart} alt="liked" />
          </Button>
        </div>
        <div>
          <Link to="/Compare">
            <img className="h-[18px] invert " src={compare} alt="compare" />
          </Link>
        </div>
        <div>
          <Button hoverUnd={true}>Cart</Button>
        </div>
      </div>
      {selected && (
        <aside className="fixed top-[0px] border-[2px] border-solid border-[#1e1e1e] bg-white right-[0px] bg-gray-200 min-w-[600px] w-fit max-h-[100%] min-h-[150px] overflow-y-scroll z-50 flex-col">
          <div className="bg-gray-200 flex p-2">
            <div className="flex shrink-0">
              <Button onClick={() => setSelected(false)}>
                <img className="h-[20px] " src={close} />
              </Button>
            </div>
            <div className="text-xl  flex items-center mx-auto font-bold">
              Favorites
            </div>
          </div>
          {favorites.length === 0 ? (
            <div className="flex justify-center items-center gap-[10rem] ">
              <div className="mt-10 text-center">No favorites yet.</div>
            </div>
          ) : (
            favorites.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-10 justify-between pl-5 pr-5 items-center"
                >
                  <Link
                    className="flex justify-between gap-10 items-center"
                    to={`Mountainbikes/${item.id}`}
                  >
                    <img
                      className="h-[120px] flex justify-center items-center "
                      src={selectedImageFunc(item, bikeColor)}
                    ></img>

                    <h1 className="font-bold">{item.name}</h1>
                  </Link>
                  <h1 className="semi-bold">{item.price}$</h1>
                  <Button
                    key={item.id}
                    onClick={() => {
                      toggleFavorite(item);
                    }}
                  >
                    <img className="h-[20px]" src={close} />
                  </Button>
                </div>
              );
            })
          )}
        </aside>
      )}
      {selected && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setSelected(false)}
        ></div>
      )}
    </header>
  );
};
