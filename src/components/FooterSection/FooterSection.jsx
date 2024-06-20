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
              to=""
            >
              Road bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Electra bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Hybrid bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Men's bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Women's bikes
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Equipment
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Clothing
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Cloth
            </Link>
          </div>
          <div className="second flex justify-center items-center flex-col text-[#dadddb]">
            <h1 className="text-[1.25rem] text-[#ffffff]">ABOUT US</h1>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Our history
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              our missions
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              our principles
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Technology
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Stores
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
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Bike registration
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Bike archive
            </Link>
            <Link
              className="hover:underline focus:outline-none hover:pointer"
              to=""
            >
              Manuals & user guides
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
