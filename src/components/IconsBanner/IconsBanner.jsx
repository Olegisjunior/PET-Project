import youtube from "../ui/yt.svg";
import Inst from "../ui/inst.svg";
import Facebook from "../ui/fb.svg";
import Button from "../interface/Buttons/Button";

export const IconsBanner = () => {
  return (
    <>
      <div className="bg-[#1e1e1e] w-full h-[100px] flex justify-center items-center">
        <div className="w-[700px] bg-[#1e1e1e] h-[80px] flex justify-around items-center">
          <Button>
            <img src={youtube} className="w-[40px] invert h-[40px]" alt="" />
          </Button>
          <Button>
            <img src={Inst} className="w-[32px] invert h-[32px]" alt="" />
          </Button>
          <Button>
            <img src={Facebook} className="w-[32px] invert h-[32px]" alt="" />
          </Button>
        </div>
      </div>
    </>
  );
};
