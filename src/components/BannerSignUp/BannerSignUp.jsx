import Button from "../interface/Buttons/Button";
import Input from "../interface/Inputs/Input";

export const BannerSignUp = () => {
  return (
    <>
      <div className="bannersignup bg-[#1e1e1e] w-full h-[400px] flex justify-center items-center ">
        <div className="container bg-[#1e1e1e] w-[1280px] h-[300px] flex flex-col justify-around items-center">
          <h1 className="text-white text-[3rem]">SIGN ME UP!</h1>
          <p className="text-[#b6b2b2] text-[1.5rem]">
            Get special offers, exclusive product news, and event info straight
            to your inbox.
          </p>

          <Input
            placeholder={"abc@gmail.com"}
            tailwind={"w-[480px] p-2 text-[1.5rem] h-[2.5rem] text-center "}
          />

          <Button
            hoverUnd={true}
            tailwind="text-white  w-[300px] bg-[#3e3e3e] rounded-[35px] text-[2rem] h-[3rem]"
          >
            send
          </Button>
        </div>
      </div>
    </>
  );
};
