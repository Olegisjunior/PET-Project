import videodh from "../ui/videodh.mp4";
import roadbiking from "../ui/roadbiking.mp4";
import Button from "../interface/Buttons/Button";
import { Link } from "react-router-dom";

export const VideoBanners = () => {
  return (
    <>
      <div className="border-[#1e1e1e] border-solid border-[2px] flex justify-center items-center">
        <div className="bg-black w-full h-[400px] relative">
          <video
            src={roadbiking}
            autoPlay
            loop
            muted
            className="w-full h-[400px] object-cover opacity-[.80] contrast-150"
          />
          <Button tailwind="absolute text-white text-[4.5rem] left-[20%] top-[30%] rounded-lg font-[800]	w-[50rem] h-[10rem] bg-[##00000000] hover:text-[5rem] ">
            <Link
              className="text-white text-[4.5rem] font-[800] hover:text-[5rem]"
              to=""
            >
              Go to road bikes
            </Link>
          </Button>
        </div>
      </div>
      <div className="border-[#1e1e1e] border-solid border-[2px] flex justify-center items-center">
        <div className=" w-full h-[400px] relative">
          <video
            src={videodh}
            autoPlay
            loop
            muted
            className="w-full h-[400px] object-cover"
          ></video>
          <Button tailwind="absolute text-white text-[4.5rem] left-[20%] top-[30%] rounded-lg font-[800]	w-[50rem] h-[10rem] bg-[##00000000] hover:text-[5rem]">
            <Link
              className="text-white text-[4.5rem] font-[800] hover:text-[5rem]"
              to="/Mountainbikes"
            >
              Go to downhill bikes
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default VideoBanners;
