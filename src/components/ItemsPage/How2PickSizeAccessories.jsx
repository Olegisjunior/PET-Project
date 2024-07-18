import React from "react";

export const How2PickSizeAccessories = ({ product }) => {
  return (
    <>
      {product && product.name && product.name.includes("Helmet") ? (
        <div className="howtopicksize flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold p-5">
            How to pick size? (Circumference)
          </h1>
          <div className="flex flex-col">
            <p className="ml-[50px] font-bold">S</p>
            <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 overflow: hidden; border-[#1e1e1e]">
              <div className="w-[120px] rounded-l-xl h-[21px] bg-gray-300  flex justify-center items-center">
                51 - 57 cm
              </div>
            </div>
            <p className="ml-[170px] font-bold">M</p>
            <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
              <div className="ml-[120px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
                54 - 60 cm
              </div>
            </div>
            <p className="ml-[290px] font-bold">L</p>
            <div className="w-[600px] h-[25px] rounded-xl bg-white border-solid border-2 border-[#1e1e1e]">
              <div className="ml-[240px] w-[120px]  h-[21px] bg-gray-300  flex justify-center items-center">
                58 - 63 cm
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
