import Logo from "../ui/Logo.svg";
import Heart from "../ui/heart.png";

export const Header = () => {
  return (
    <header className="bg-[#1E1E1E] w-full h-[60px] flex justify-around items-center ">
      <div className="logo">
        <img className="ml-2 h-[30px] invert " src={Logo} alt="logo" />
        <div className="font-semibold text-white">BikeStaff</div>
      </div>
      <div className="nav-items justify-around font-s`semibold text-white flex gap-5 ">
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Mountain</a>
        </div>
        <div>
          <a href="">Road</a>
        </div>
        <div>
          <a href="">City</a>
        </div>
        <div>
          <a href="">Electic</a>
        </div>
        <div>
          <a href="">Kids</a>
        </div>
        <div>
          <a href="">Accessories</a>
        </div>
        <div>
          <a href="">About us</a>
        </div>
      </div>
      <div className="nav-end font-semibold text-white flex gap-3">
        <div>
          <a href="">Sign in</a>
        </div>
        <div>
          <a href="">Sign up</a>
        </div>
        <div>
          <a href="">
            <img className="h-[20px] " src={Heart} alt="liked" />
          </a>
        </div>
        <div>
          <a href="">Cart</a>
        </div>
      </div>
    </header>
  );
};
