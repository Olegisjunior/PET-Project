import racebike from "../ui/race-1140w.jpg";
import downhill from "../ui/image2-1400w.jpg";
import classes from "./app.module.css";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <main className="text-white flex">
      <div className="first">
        <div className="bg-black">
          <div className="dh relative">
            <img className={classes.dh} src={downhill} alt="downhillbikes" />
          </div>

          <div className="flex flex-col absolute left-[7%] top-[40%]">
            <Button tailwind=" font-bold text-[3rem] justify-center bg-none items-center z-50">
              <Link to="/Mountainbikes" className="font-bold text-[3rem]">
                MTB
              </Link>
            </Button>

            <Button tailwind=" font-bold text-[1rem] justify-center bg-none items-center z-50">
              <Link to="/Mountainbikes" className="font-bold text-[1rem]">
                Mountain bikes share some similarities with other bicycles, but
                incorporate features
                <br />
                designed to enhance durability and performance in rough terrain
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="bg-black">
          <div className="info2 ">
            <div className="race relative">
              <img src={racebike} alt="racebikes" className={classes.race} />
            </div>
            <div className="flex flex-col absolute right-[12%] top-[40%]">
              <Button tailwind=" font-bold text-[3rem] justify-center bg-none items-center z-50">
                <Link to="/Roadbikes" className="font-bold text-[3rem]">
                  Road
                </Link>
              </Button>
              <Button tailwind=" font-bold text-[1rem] justify-center bg-none items-center z-50">
                <Link to="/Roadbikes" className="font-bold text-[1rem]">
                  Road bicycle is built for traveling at speed on paved roads.
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
