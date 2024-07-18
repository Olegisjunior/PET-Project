import React from "react";

export const SpecsComponent3 = ({ product }) => {
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
                Frame:
              </div>
              <div className="text-l bg-gray-200 flex align-middle text-center justify-center items-center">
                {product.specs.Frame}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Wheel front:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Wheel_front}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Wheel rear:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Wheel_rear}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Fork:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Fork}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Tire:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Tire}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                (E-system) Battery:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Battery}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                (E-system) Charger:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Charger}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                (E-system) Computer:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Computer}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                (E-system) Motor:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Motor}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Shifter:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Shifter}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Cassette:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Cassette}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Brake rotor:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Brake_rotor}
              </div>
            </div>
            <div className="flex bg-gray-200 mb-5 mt-5">
              <div
                className="pt-1 pb-1 flex justify-between pl-[250px] pr-[250px] mt-5 mb-5 bg-gray-200 font-bold text-xl"
                type="circle"
              >
                Rotor size:
              </div>
              <div className="text-l bg-gray-200 text-center flex justify-center items-center">
                {product.specs.Rotor_size}
              </div>
            </div>{" "}
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
                {product.specs.Weight === "none" ? null : "kg"}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SpecsComponent3;
