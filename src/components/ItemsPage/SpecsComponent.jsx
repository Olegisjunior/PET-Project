import React from "react";

export const SpecsComponent2 = ({ product }) => {
  return (
    <>
      <div className="Specs ">
        {product && product.specs ? (
          <div className="">
            <h1 className="text-xl font-bold p-5 flex justify-center items-center">
              Specs
            </h1>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5  font-bold text-xl"
                type="circle"
              >
                Frame:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Frame}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Fork:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Fork}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Suspension:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Suspension}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Groupset:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Groupset}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Drivetrain:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Drivetrain}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Wheels:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Wheels}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Brakes:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Brakes}
              </div>
            </div>

            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Weight:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-left justify-center items-center">
                {product.specs.Weight === "none"
                  ? "none"
                  : product.specs.Weight}
                {product.specs.Weight === "none" ? null : "kg"}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SpecsComponent2;
