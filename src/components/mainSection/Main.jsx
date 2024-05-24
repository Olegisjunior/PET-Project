import racebike from "../ui/race-1140w.jpg";
import downhill from "../ui/image2-1400w.jpeg";
import classes from "./app.module.css";
import Button from "../interface/Buttons/Button";

export const Main = () => {
  return (
    <main className="text-white flex">
      <div className="first">
        <div className="bg-black">
          <Button tailwind="flex absolute font-bold text-[3rem] left-[22%] top-[30%] justify-center bg-none items-center z-50">
            MTB
          </Button>

          <Button tailwind="flex absolute font-bold text-[1rem] left-[10%] top-[40%] justify-center bg-none items-center z-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            <br />
            Corporis, totam. Accusamus qui veniam soluta dolorem!
          </Button>

          <div className="dh relative">
            <img className={classes.dh} src={downhill} alt="downhillbikes" />
          </div>
        </div>
      </div>
      <div className="second">
        <div className="bg-black">
          <div className="info2 ">
            <Button tailwind="flex absolute font-bold text-[3rem] left-[72%] top-[30%] justify-center bg-none items-center z-50">
              ROAD
            </Button>
            <Button tailwind="flex absolute font-bold text-[1rem] left-[60%] top-[40%] justify-center bg-none items-center z-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Corporis, totam. Accusamus qui veniam soluta dolorem!
            </Button>
          </div>
          <div className="race relative">
            <img src={racebike} alt="racebikes" className={classes.race} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
