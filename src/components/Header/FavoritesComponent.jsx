import React from "react";
import Button from "../interface/Buttons/Button";
import { useContext, useState } from "react";
import close from "../ui/closeImg.png";
import { FavoritesContext } from "../pages/App/";
import { ColorContext } from "../pages/App/";
import { Link } from "react-router-dom";

export const FavoritesComponent = ({ selected, setSelected }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { bikeColor } = useContext(ColorContext);

  const selectedImageFunc = (item, bikeColor) => {
    if (item.colors.length <= 1 && !bikeColor) {
      if (item.galimg) {
        return item.galimg[0];
      } else {
        return item.img;
      }
    } else if (item.colors.length >= 1 && !bikeColor) {
      return item.galimg[0];
    } else if (item.galimg && item.colors.length === 1 && bikeColor) {
      return item.galimg[0];
    } else if (item.colors.length === 1 && bikeColor) {
      return item.img;
    } else if (item.colors.length > 1 && bikeColor === item.colors[0]) {
      return item.galimg[0];
    } else if (item.colors.length > 1 && bikeColor === item.colors[1]) {
      return item.galimg2[0];
    }
  };
  return (
    <>
      {selected && (
        <aside className="fixed top-[0px] border-[2px] border-solid border-[#1e1e1e] bg-white right-[0px] bg-gray-200 min-w-[600px] w-fit max-h-[100%] min-h-[150px] overflow-y-scroll z-50 flex-col">
          <div className="bg-gray-200 flex p-2">
            <div className="flex shrink-0">
              <Button onClick={() => setSelected(false)}>
                <img className="h-[20px] " src={close} />
              </Button>
            </div>
            <div className="text-xl  flex items-center mx-auto font-bold">
              Favorites
            </div>
          </div>
          {favorites.length === 0 ? (
            <div className="flex justify-center items-center gap-[10rem] ">
              <div className="mt-10 text-center">No favorites yet.</div>
            </div>
          ) : (
            favorites.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex gap-10 justify-between pl-5 pr-5 items-center"
                >
                  <Link
                    className="flex justify-between gap-10 items-center"
                    to={`Mountainbikes/${item.id}`}
                  >
                    <img
                      className="h-[120px] flex justify-center items-center "
                      src={selectedImageFunc(item, bikeColor)}
                    ></img>

                    <h1 className="font-bold">{item.name}</h1>
                  </Link>
                  <h1 className="semi-bold">{item.price}$</h1>
                  <Button
                    key={item.id}
                    onClick={() => {
                      toggleFavorite(item);
                    }}
                  >
                    <img className="h-[20px]" src={close} />
                  </Button>
                </div>
              );
            })
          )}
        </aside>
      )}
      {selected && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setSelected(false)}
        ></div>
      )}
    </>
  );
};

export default FavoritesComponent;
