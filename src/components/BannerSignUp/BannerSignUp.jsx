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
          <input
            className="w-[480px] p-2 text-[1.5rem] focus:outline-none h-[2.5rem] text-center rounded-[35px]"
            type="text"
            placeholder="abc@gmail.com"
          />
          <button className="text-white hover:underline focus:outline-none hover:pointer w-[300px] text-[2rem] h-[3rem]">
            send
          </button>
        </div>
      </div>
    </>
  );
};
