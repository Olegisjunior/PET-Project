import React from "react";

export const SpecsComponent4 = ({ product }) => {
  return (
    <>
      <div className="Specs">
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
                Material:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Material ? product.specs.Material : "none"}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5  font-bold text-xl"
                type="circle"
              >
                Fit System:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Fit_System ? product.specs.Fit_System : "none"}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5  font-bold text-xl"
                type="circle"
              >
                Circumference:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Circumference
                  ? product.specs.Circumference
                  : "none"}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5  font-bold text-xl"
                type="circle"
              >
                Size:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Size ? product.specs.Size : "none"}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5  font-bold text-xl"
                type="circle"
              >
                Bottle height:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Bottle_height
                  ? product.specs.Bottle_height
                  : "none"}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5  font-bold text-xl"
                type="circle"
              >
                Dimensions(length, width, height):
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Dimensions
                  ? product.specs.Dimensions.map((item) => {
                      return (
                        <p className="mr-5" key={item}>
                          {item},
                        </p>
                      );
                    })
                  : "none"}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Weight:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Weight === "none"
                  ? "none"
                  : product.specs.Weight}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SpecsComponent4;
