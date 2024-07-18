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

  const typeOfBike = (item) => {
    if (item.id <= 19) {
      return "Mountainbikes";
    } else if (item.id >= 20 && item.id <= 29) {
      return "Roadbikes";
    } else if (item.id >= 30 && item.id <= 39) {
      return "Urbanbikes";
    }
  };

  return (
    <>
      <div className="h-[187vh] overflow-hidden p-2">
        <div className="container flex" key={Math.random()}>
          {compares.length === 0 ? (
            <h1 className="ml-[56%] mt-10 text-xl">Nothing to compare.</h1>
          ) : (
            compares.map((item) => {
              return (
                <div className="order-last">
                  <div className="container2 flex flex-col relative pt-5">
                    <div className="absolute left-[400px] top-[2.5px]">
                      <Button
                        key={item.id + Math.random()}
                        onClick={() => {
                          toggleCompare(item);
                        }}
                      >
                        <img className="h-[20px]" src={close} />
                      </Button>
                    </div>
                    <div className="flex flex-col justify-center items-center w-[425px] h-[220px] pb-5">
                      <Link
                        className="flex justify-center flex-col items-center"
                        to={`/${typeOfBike(item)}/${item.id}`}
                        key={item.id + Math.random()}
                      >
                        <img
                          className="h-[200px] flex justify-center items-center "
                          src={selectedImageFunc(item, bikeColor)}
                        ></img>
                        <h1 className="text-xl font-semibold">{item.name}</h1>
                      </Link>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5 ">
                      <h1 className="px-2">{item.brand}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5 ">
                      <h1 className="px-2">{item.price}$</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex  justify-around items-center w-[425px] h-[75px] py-5 ">
                      {item.colors.map((i) => {
                        return (
                          <button
                            key={item.id + Math.random()}
                            style={{ background: i }}
                            className={`disabled  rounded-[50%] w-[30px] h-[30px] border border-[2px] border-[#1e1e1e] `}
                          ></button>
                        );
                      })}
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[150px] py-5  text-center">
                      <h1 className="line-clamp-4 px-2">{item.specs.Frame}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Suspension}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[120px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Fork}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[120px] py-5  text-center">
                      <h1 className="line-clamp-3 px-2">
                        {item.specs.Wheels
                          ? item.specs.Wheels
                          : item.specs.Wheel_front}
                        . {item.specs.Wheels ? null : item.specs.Wheel_rear}...
                      </h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Tire}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[120px] py-5  text-center">
                      <h1 className="px-2">
                        {item.specs.Drivetrain
                          ? item.specs.Drivetrain
                          : item.specs.Cassette}
                      </h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[120px]  py-5  text-center">
                      <h1 className="px-2">
                        {item.specs.Groupset
                          ? item.specs.Groupset
                          : item.specs.Shifter}
                      </h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[120px]  py-5  text-center">
                      <h1 className="px-2">
                        {item.specs.Brakes
                          ? item.specs.Brakes
                          : item.specs.Brake_rotor}
                        <br />
                        {item.specs.Brakes ? null : item.specs.Rotor_size}
                      </h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Weight}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Battery}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Charger}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Computer}</h1>
                    </div>
                    <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
                    <div className="flex justify-center items-center w-[425px] h-[75px] py-5  text-center">
                      <h1 className="px-2">{item.specs.Shifter}</h1>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {compares.length !== 0 ? (
            <div className="flex justify-start flex-col order-1 bg-[#1e1e1e10]">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] h-[240px] font-bold text-xl flex justify-center items-center">
                    Product
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Brand
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Price
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    colors
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold py-5 h-[150px] border-[#1e1e1e] flex justify-center items-center">
                    Frame
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Suspension
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5  flex justify-center items-center">
                    Fork
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5  flex justify-center items-center">
                    Wheels
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Tire
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5  flex justify-center items-center">
                    Drivetrain (cassete)
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5  flex justify-center items-center">
                    Groupset (s hifter)
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[120px] py-5  flex justify-center items-center">
                    Brakes
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Weight
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Battery
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Charger
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Computer
                  </h1>
                </div>
              </div>
              <hr className="bg-[rgba(0_0_0_0.15)] w-full " />
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center flex-col items-center">
                  <h1 className="w-[170px] font-bold h-[75px] py-5  flex justify-center items-center">
                    Motor
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
