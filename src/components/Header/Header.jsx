import Logo from "../ui/Logo.svg";
import Heart from "../ui/heart.png";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import close from "../ui/closeImg.png";
export const Header = ({ favorites, onRemoveToFavorites }) => {
  const [selected, setSelected] = useState(false);

  const DataForModal = () => {
    setSelected(!selected);
  };

  console.log(`favorites header: ${favorites}`);
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
          <Button hoverUnd={true}>Cart</Button>
        </div>
      </div>
      {selected && (
        <aside className="fixed top-[0px] border-[2px] border-solid border-[#1e1e1e] bg-white right-[0px] bg-gray-200 min-w-[500px] w-fit h-screen z-50 flex-col">
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
            <div className="flex justify-center items-center  gap-[10rem] ">
              <div className="mt-10 text-center">No favorites yet.</div>
            </div>
          ) : (
            favorites.map((item) => {
              // Переробити на боковий елемент, як бургер меню тільки бокове
              return (
                <div className="">
                  <div
                    key={item.id}
                    className="flex gap-10 justify-center items-center"
                  >
                    <img className="h-[120px]" src={item.img}></img>
                    <h1 className="font-bold">{item.name}</h1>
                    <h1 className="semi-bold">{item.price}$</h1>
                    <Button
                      key={item.id}
                      onClick={() => onRemoveToFavorites(item)}
                    >
                      <img className="h-[20px]" src={close} />
                    </Button>
                  </div>
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
