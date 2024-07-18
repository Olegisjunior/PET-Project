import Logo from "../ui/Logo.svg";
import Heart from "../ui/heart.png";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
// import compare from "../ui/comapre.svg";
import compare from "../ui/compare.png";
import FavoritesComponent from "./FavoritesComponent";
import { CompareContext } from "../pages/App";
import { FavoritesContext } from "../pages/App";

export const Header = () => {
  const [selected, setSelected] = useState(false);
  const { compares } = useContext(CompareContext);
  const { favorites } = useContext(FavoritesContext);

  const DataForModal = () => {
    setSelected(!selected);
  };

  return (
    <header className="bg-[#1E1E1E] w-full h-[60px] flex justify-around items-center ">
      <div className="logo">
        <img className="ml-2 h-[30px] invert " src={Logo} alt="logo" />
        <div className="font-semibold text-white">BikeStaff</div>
      </div>
      <div className="nav-items justify-around font-s`semibold text-white align-center flex gap-5 ">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Mountainbikes">Mountain</Link>
        </div>
        <div>
          <Link to="/Roadbikes">Road</Link>
        </div>
        <div>
          <Link to="/Urbanbikes">City</Link>
        </div>
        <div>
          <Link to="/Ebikes">Electic</Link>
        </div>
        <div>
          <Link to="/Kidsbikes">Kids</Link>
        </div>
        <div>
          <Link to="/Accessories">Accessories</Link>
        </div>
        <div>
          <Link to="/AboutUs">About us</Link>
        </div>
      </div>
      <div className="nav-end font-semibold text-white flex gap-3 relative">
        <div>
          <Link to="/SignIn">Sign in</Link>
        </div>
        <div>
          <Link to="/SignUp">Sign up</Link>
        </div>
        <div className="relative">
          <Button onClick={() => DataForModal()}>
            <img className="h-[20px] " src={Heart} alt="liked" />
            {favorites.length > 0 ? (
              <div className="absolute bg-[#e5e7eb] text-[#1e1e1e] rounded-[50%] h-[17px] w-[17px] left-2 z-50 bottom-0 flex justify-center items-center">
                {favorites.length}
              </div>
            ) : null}
          </Button>
        </div>
        <div className="relative">
          <Link to="/Compare">
            {compares.length > 0 ? (
              <div className="absolute bg-[#e5e7eb] text-[#1e1e1e] rounded-[50%] h-[17px] w-[17px] left-2 z-50 bottom-0 flex justify-center items-center">
                {compares.length}
              </div>
            ) : null}

            <img className="h-[18px] invert " src={compare} alt="compare" />
          </Link>
        </div>
        <div>
          <Button hoverUnd={true}>Cart</Button>
        </div>
      </div>
      <FavoritesComponent selected={selected} setSelected={setSelected} />
    </header>
  );
};
