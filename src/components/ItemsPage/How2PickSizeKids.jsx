import React from "react";

export const How2PickSizeKids = () => {
  return (
    <>
      <div className="howtopicksize flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold p-5">How to pick size?</h1>
        <div className="flex flex-col">
          <p className="ml-[30px] font-bold">12" wheel</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 overflow: hidden; border-[#1e1e1e]">
            <div className="w-[120px] rounded-l-xl h-[21px] bg-gray-300  flex justify-center items-center">
              86-102cm
            </div>
          </div>
          <p className="ml-[150px] font-bold">16" wheel</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[120px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
              99-117cm
            </div>
          </div>
          <p className="ml-[270px] font-bold">20" wheel</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[240px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
              114-132cm
            </div>
          </div>
          <p className="ml-[390px] font-bold">24" wheel</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[360px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
              130-150cm
            </div>
          </div>
          <p className="ml-[500px] font-bold">26" wheel</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[476px] w-[120px] rounded-r-xl h-[21px] bg-gray-300  flex justify-center items-center">
              146-160cm
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
