import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../interface/Buttons/Button";
import Truck from "../ui/truck.svg";
import Shield from "../ui/shield.svg";
// import Compare from "../ui/comapre.svg";
import compare from "../ui/compare.png";
import "./img.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { LikeButton } from "../LikeButton/LikeButton";
import { FavoritesContext } from "../pages/App";
import ButtonToCompare from "./ButtonToCompare";
import { How2PickSize } from "./How2PickSize";
import { SpecsComponent2 } from "./SpecsComponent2";

export const ItemsPage4 = ({ handleColor }) => {
  const [product, setProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState();
  const [images, setImages] = useState([]);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const { id } = useParams();

  const getItem = async () => {
    try {
      const response = await axios.get(
        `https://9062e60b1552f6a8.mokky.dev/ebikes/${id}`
      );
      setProduct(response.data);
      setSelectedColor(response.data.colors[0]);
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    getItem();
  }, [id]);

  const getImageByColor = (color) => {
    if (!product || !Array.isArray(product.colors)) {
      return [];
    }

    if (product.colors && color === product.colors[0]) {
      return Array.isArray(product.galimg)
        ? product.galimg.map((item) => ({
            original: item,
            thumbnail: item,
          }))
        : [];
    } else if (product.colors && color === product.colors[1]) {
      return Array.isArray(product.galimg)
        ? product.galimg2.map((item) => ({
            original: item,
            thumbnail: item,
          }))
        : [];
    } else {
      return [
        ...(Array.isArray(product.galimg)
          ? product.galimg.map((item) => ({
              original: item,
              thumbnail: item,
            }))
          : []),
      ];
    }
  };

  useEffect(() => {
    const newImages = getImageByColor(selectedColor);
    setImages(newImages);
  }, [product, selectedColor]);

  return (
    <>
      {product && (
        <div>
          <div className="flex bg-gray-200 min-h-[100vh]">
            <div className="w-[55%] ml-10 mt-5">
              {product && product.galimg ? (
                <ImageGallery
                  className="image-gallery-thumbnail image-gallery-thumbnail-image.focus image-gallery-thumbnail-image.active"
                  items={images}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  useTranslate3D={false}
                  fit
                />
              ) : (
                <img src={product.img} />
              )}
            </div>
            <div className="Card w-[40%] bg-white flex flex-col ml-10 mt-5 mr-10 h-fit ">
              <div className="text-xl font-bold flex justify-center items-center mt-5 mb-5">
                {product.name}
              </div>
              <hr className="" />
              <div className="text-center text-gray-700 flex flex-col justify-center items-center pl-[10rem] pr-[10rem] mb-5 mt-5">
                {product.description}
                <div className="mt-5 flex gap-10">
                  {product.colors.map((item, index) => {
                    return (
                      <button
                        onClick={() => setSelectedColor(item)}
                        key={index}
                        style={{ background: item }}
                        className={`rounded-[50%] w-[30px] h-[30px] border-black border-solid border-2`}
                      ></button>
                    );
                  })}
                </div>
              </div>
              <hr className="mb-5" />
              <div className="Price flex justify-around items-center">
                <div className="font-bold text-[2rem] font-['arial']">
                  {product && product.price}$
                </div>
                <div>
                  <Button
                    tailwind={
                      "rounded-xl w-[200px] h-[2rem] bg-green-600 font-semibold hover:font-bold	drop-shadow-lg	"
                    }
                  >
                    Buy
                  </Button>
                </div>
                <div>
                  <Button
                    tailwind={
                      "rounded-xl w-[200px] h-[2rem] border-2 border-green-600 font-semibold hover:font-bold drop-shadow-lg	"
                    }
                  >
                    Buy on credit
                  </Button>
                </div>
              </div>
              <hr className="mt-5" />

              <div className="2in1 flex mt-5 ml-[10rem] gap-10 justify-around">
                <div className="Sizes flex flex-col ">
                  <span className="font-bold">Sizes:</span>
                  <label htmlFor="S_size ">
                    {product && product.size && product.size.includes("s") ? (
                      <>
                        <input type="radio" id="S_size" name="size" />
                        <span className="ml-2 font-['arial']">S</span>
                      </>
                    ) : (
                      <>
                        <input type="radio" id="S_size" name="size" disabled />
                        <span
                          className="ml-2 text-gray-500 font-['arial']"
                          disabled
                        >
                          S
                        </span>
                      </>
                    )}
                  </label>
                  <label htmlFor="M_size">
                    {product && product.size && product.size.includes("m") ? (
                      <>
                        <input type="radio" id="M_size" name="size" />
                        <span className="ml-2  font-['arial']">M</span>
                      </>
                    ) : (
                      <>
                        <input type="radio" id="M_size" name="size" disabled />
                        <span
                          className="ml-2 text-gray-500 font-['arial']"
                          disabled
                        >
                          M
                        </span>
                      </>
                    )}
                  </label>
                  <label htmlFor="L_size">
                    {product && product.size && product.size.includes("l") ? (
                      <>
                        <input type="radio" id="L_size" name="size" />
                        <span className="ml-2 font-['arial']">L</span>
                      </>
                    ) : (
                      <>
                        <input type="radio" id="L_size" name="size" disabled />
                        <span
                          className="ml-2 text-gray-500 font-['arial']"
                          disabled
                        >
                          L
                        </span>
                      </>
                    )}
                  </label>
                  <label htmlFor="XL_size">
                    {product && product.size && product.size.includes("xl") ? (
                      <>
                        <input type="radio" id="XL_size" name="size" />
                        <span className="ml-2 font-['arial']">XL</span>
                      </>
                    ) : (
                      <>
                        <input type="radio" id="XL_size" name="size" disabled />
                        <span
                          className="ml-2 text-gray-500 font-['arial']"
                          disabled
                        >
                          XL
                        </span>
                      </>
                    )}
                  </label>
                  <label htmlFor="XXL_size">
                    {product && product.size && product.size.includes("xxl") ? (
                      <>
                        <input type="radio" id="XXL_size" name="size" />
                        <span className="ml-2 font-['arial']">XXL</span>
                      </>
                    ) : (
                      <>
                        <input
                          type="radio"
                          id="XXL_size"
                          name="size"
                          disabled
                        />
                        <span
                          className="ml-2 text-gray-500 font-['arial']"
                          disabled
                        >
                          XXL
                        </span>
                      </>
                    )}
                  </label>
                </div>
                <div className="flex flex-col gap-10 justify-center items-center ">
                  <LikeButton
                    toggleFavorite={toggleFavorite}
                    favorites={favorites}
                    handleColor={handleColor}
                    product={product}
                    selectedColor={selectedColor}
                  />
                  <ButtonToCompare product={product}>
                    <div className="flex items-center justify-center items-center">
                      <img src={compare} className="h-[20px] mr-2" />
                      compare
                    </div>
                  </ButtonToCompare>
                </div>
              </div>
              <hr className="mt-5" />
              <div className="w-full flex flex-col">
                <div className="Delivery flex justify-around items-center font-semibold mt-5 mb-5">
                  <div className="flex flex-col gap-10">
                    <span className="font-bold flex items-center">
                      <img className="h-[23px] mr-2" src={Truck} alt="" />
                      Delivery.
                    </span>
                    <span className="font-bold flex items-center">
                      <img className="h-[23px] mr-2" src={Shield} alt="" />
                      Guarantee.
                    </span>
                  </div>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                      <li>Pickup from our stores </li>

                      <li>USPS, DHL Express, ebay</li>
                    </div>
                    <div className="flex flex-col">
                      <li>Frame - 10 years</li>
                      <li>gears - 1 year</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1e1e1e] min-h-[120vh] pb-10 flex justify-center items-center">
            <div className=" bg-white w-[80%] h-[205vh]">
              <div className="Descrp flex flex-col justify-center items-center">
                <h1 className="text-xl font-bold p-5">{product.name}</h1>
                <p className="p-5">{product.description}</p>
              </div>
              <div>
                <SpecsComponent2 product={product} />
              </div>
              <div>
                <How2PickSize />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemsPage4;
