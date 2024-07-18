import React from "react";

export const How2PickSize = () => {
  return (
    <>
      <div className="howtopicksize flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold p-5">How to pick size?</h1>
        <div className="flex flex-col">
          <p className="ml-[55px] font-bold">S</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 overflow: hidden; border-[#1e1e1e]">
            <div className="w-[120px] rounded-l-xl h-[21px] bg-gray-300  flex justify-center items-center">
              150-165cm
            </div>
          </div>
          <p className="ml-[175px] font-bold">M</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[120px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
              165-175cm
            </div>
          </div>
          <p className="ml-[295px] font-bold">L</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[240px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
              175-185cm
            </div>
          </div>
          <p className="ml-[415px] font-bold">XL</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[360px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
              185-190cm
            </div>
          </div>
          <p className="ml-[525px] font-bold">XXL</p>
          <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
            <div className="ml-[476px] w-[120px] rounded-r-xl h-[21px] bg-gray-300  flex justify-center items-center">
              190-200cm
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
