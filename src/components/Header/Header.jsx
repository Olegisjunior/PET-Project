import Logo from "../ui/Logo.svg";
import Heart from "../ui/heart.png";
import Button from "../interface/Buttons/Button";

export const Header = () => {
  return (
    <header className="bg-[#1E1E1E] w-full h-[60px] flex justify-around items-center ">
      <div className="logo">
        <img className="ml-2 h-[30px] invert " src={Logo} alt="logo" />
        <div className="font-semibold text-white">BikeStaff</div>
      </div>
      <div className="nav-items justify-around font-s`semibold text-white flex gap-5 ">
        <div>
          <Button hoverUnd={true}>Home</Button>
        </div>
        <div>
          <Button hoverUnd={true}>Mountain</Button>
        </div>
        <div>
          <Button hoverUnd={true}>Road</Button>
        </div>
        <div>
          <Button hoverUnd={true}>City</Button>
        </div>
        <div>
          <Button hoverUnd={true}>Electic</Button>
        </div>
        <div>
          <Button hoverUnd={true}>Kids</Button>
        </div>
        <div>
          <Button hoverUnd={true}>Accessories</Button>
        </div>
        <div>
          <Button hoverUnd={true}>About us</Button>
        </div>
      </div>
      <div className="nav-end font-semibold text-white flex gap-3">
        <div>
          <Button hoverUnd={true}>Sign in</Button>
        </div>
        <div>
          <Button hoverUnd={true}>Sign up</Button>
        </div>
        <div>
          <Button>
            <img className="h-[20px] " src={Heart} alt="liked" />
          </Button>
        </div>
        <div>
          <Button hoverUnd={true}>Cart</Button>
        </div>
      </div>
    </header>
  );
};
