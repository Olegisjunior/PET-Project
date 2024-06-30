import React, { useContext } from "react";
import { CompareContext } from "../pages/App";
import { ColorContext } from "../pages/App/";
import { Link } from "react-router-dom";
import Button from "../interface/Buttons/Button";
import close from "../ui/closeImg.png";

export const ComparePage = () => {
  const { compares, toggleCompare } = useContext(CompareContext);
  const { bikeColor } = useContext(ColorContext);

  const selectedImageFunc = (item, bikeColor) => {
    if (item.colors.length <= 1 && !bikeColor) {
      if (item.galimg) {
        return item.galimg[0];
      } else {
        return item.img;
      }
    } else if (item.colors.length > 1) {
      return item.galimg[0];
    } else if (item.colors.length > 1 && !bikeColor) {
      return item.galimg[0];
    } else if (item.colors.length > 1 && bikeColor === item.colors[0]) {
      return item.galimg[0];
    } else if (item.colors.length > 1 && bikeColor === item.colors[1]) {
      return item.galimg2[0];
    }
  };
  return (
    <>
      <div className="h-[150vh] overflow-x-scroll">
        <h1 className="text-xl flex justify-center">Compare</h1>
        <div className="container flex">
          {compares.length === 0 ? (
            <h1 className="ml-[56%] mt-10 text-xl">Nothing to compare.</h1>
          ) : (
            compares.map((item) => {
              return (
                <div className="order-last ml-auto">
                  <div className="container2 flex flex-col relative">
                    <div className="absolute left-[245px] top-[5px]">
                      <Button
                        key={item.id}
                        onClick={() => {
                          toggleCompare(item);
                        }}
                      >
                        <img className="h-[20px]" src={close} />
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[270px] h-[170px] border border-2 border-[#1e1e1e] ">
                      <Link
                        className="flex justify-center flex-col items-center"
                        to={`/Mountainbikes/${item.id}`}
                      >
                        <img
                          className="h-[120px] flex justify-center items-center "
                          src={selectedImageFunc(item, bikeColor)}
                        ></img>

                        <h1 className="underline">{item.name}</h1>
                      </Link>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[75px] py-5 border border-[1px] border-[#1e1e1e]">
                      <h1 className="">{item.brand}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[75px] py-5 border border-[1px] border-[#1e1e1e]">
                      <h1 className="">{item.price}$</h1>
                    </div>
                    <div className="flex  justify-around items-center w-[270px] h-[75px] py-5 border border-[1px] border-[#1e1e1e]">
                      {item.colors.map((i) => {
                        return (
                          <button
                            key={item.id}
                            style={{ background: i }}
                            className={`disabled  rounded-[50%] w-[30px] h-[30px] border-black border-solid border-2`}
                          ></button>
                        );
                      })}
                    </div>

                    <div className="flex justify-center items-center w-[270px] h-[75px] py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Weight}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[150px] py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Frame}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[75px] py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Suspension}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[120px] py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Fork}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[120px] py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Wheels}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[120px] py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Drivetrain}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[120px]  py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Groupset}</h1>
                    </div>
                    <div className="flex justify-center items-center w-[270px] h-[120px]  py-5 border border-[1px] border-[#1e1e1e] text-center">
                      <h1 className="">{item.specs.Brakes}</h1>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {compares.length !== 0 ? (
            <div className="flex justify-start flex-col order-1 ">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] h-[170px] font-bold border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Product
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Brand
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Price
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    colors
                  </h1>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Weight
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[150px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Frame
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Suspension
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Fork
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Wheels
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Drivetrain
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Groupset
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5 border border-2 border-[#1e1e1e] flex justify-center items-center">
                    Brakes
                  </h1>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
