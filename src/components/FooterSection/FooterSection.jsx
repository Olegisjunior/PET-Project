import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="bg-[#1e1e1e] border-b-2 border-solid border-[#2b2b2b]"></div>

        <div className="pt-10 bg-[#1e1e1e] flex content-center pl-16 justify-around items-start pb-10">
          <div className="first flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">SHOP</h1>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="/Mountainbikes"
            >
              Mountain bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="/Roadbikes"
            >
              Road bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="/Ebikes"
            >
              Electra bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="/Kidsbikes"
            >
              Kids bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="Urbanbikes"
            >
              Urban bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="/Accessories"
            >
              Equipment
            </Link>
          </div>
          <div className="second flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">ABOUT US</h1>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="AboutUs"
            >
              Our history
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to="AboutUs"
            >
              Our missions
            </Link>
          </div>
          <div className="third flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">SUPPORT</h1>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Contact us
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Product support
            </Link>
          </div>
        </div>

        <div className="bg-[#1e1e1e] border-b-2 border-solid border-[#2b2b2b]"></div>

        <div className="text-white bg-[#1e1e1e] p-5 flex flex-col justify-center items-center">
          <p>Copyright by Oleg</p>
          <p>2024</p>
        </div>
      </div>
    </>
  );
};
