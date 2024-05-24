import videodh from "../ui/videodh.mp4";
import roadbiking from "../ui/roadbiking.mp4";
import Button from "../interface/Buttons/Button";

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
            Go to road bikes
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
            Go to downhill bikes
          </Button>
        </div>
      </div>
    </>
  );
};

export default VideoBanners;
