import { useState } from "react";
import Button from "../interface/Buttons/Button";

export const Filters = ({ Category, Sizes, Years }) => {
  const [isListOpen, setListOpen] = useState(true);
  const [isListOpen2, setListOpen2] = useState(false);
  const [isListOpen3, setListOpen3] = useState(false);
  const [isActive, setIsActive] = useState({});
  const [isActive2, setIsActive2] = useState({});
  const [isActive3, setIsActive3] = useState({});

  const handlerButton = (categ) => {
    Category(categ);
    setIsActive((prevFilters) => {
      return {
        ...prevFilters,
        [categ]: !prevFilters[categ],
      };
    });
  };

  const handlerButton2 = (size) => {
    Sizes(size);
    setIsActive2((prevFilters) => {
      return {
        ...prevFilters,
        [size]: !prevFilters[size],
      };
    });
  };
  const handlerButton3 = (year) => {
    Years(year);
    setIsActive3((prevFilters) => {
      return {
        ...prevFilters,
        [year]: !prevFilters[year],
      };
    });
  };

  const toggleHandlerList = () => {
    setListOpen(!isListOpen);
  };

  const toggleHandlerList2 = () => {
    setListOpen2(!isListOpen2);
  };

  const toggleHandlerList3 = () => {
    setListOpen3(!isListOpen3);
  };
  return (
    <>
      <Button
        onClick={toggleHandlerList}
        tailwind={"font-semibold"}
        hoverUnd={true}
      >
        Filters by brands
      </Button>
      <ul
        className={
          isListOpen ? "flex flex-col justify-center items-center " : "hidden "
        }
      >
        <li className="pt-2 pl-3 pr-3 flex pb-2 ">
          <Button
            tailwind={
              isActive["Merida"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton("Merida")}
            hoverUnd={true}
          >
            Merida
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex  pb-2">
          <Button
            tailwind={
              isActive["Trek"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton("Trek")}
            hoverUnd={true}
          >
            Trek
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex  pb-2">
          <Button
            tailwind={
              isActive["Giant"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton("Giant")}
            hoverUnd={true}
          >
            Giant
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2 ">
          <Button
            tailwind={
              isActive["Specialized"]
                ? `rounded bg-gray-300 pl-5 pr-5`
                : `pl-5 pr-5`
            }
            onClick={() => handlerButton("Specialized")}
            hoverUnd={true}
          >
            Specialized
          </Button>
        </li>
      </ul>
      <Button
        onClick={toggleHandlerList2}
        tailwind={"font-semibold"}
        hoverUnd={true}
      >
        Filters by sizes
      </Button>
      <ul
        className={
          isListOpen2 ? "flex flex-col justify-center items-center" : "hidden "
        }
      >
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive2["s"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton2("s")}
            hoverUnd={true}
          >
            S
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive2["m"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton2("m")}
            hoverUnd={true}
          >
            M
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive2["l"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton2("l")}
            hoverUnd={true}
          >
            L
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive2["xl"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton2("xl")}
            hoverUnd={true}
          >
            XL
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive2["xxl"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton2("xxl")}
            hoverUnd={true}
          >
            XXL
          </Button>
        </li>
      </ul>
      <Button
        onClick={toggleHandlerList3}
        tailwind={"font-semibold"}
        hoverUnd={true}
      >
        Filters by Years
      </Button>
      <ul
        className={
          isListOpen3 ? "flex flex-col justify-center items-center " : "hidden "
        }
      >
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive3["2024"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton3("2024")}
            hoverUnd={true}
          >
            2024
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive3["2023"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton3("2023")}
            hoverUnd={true}
          >
            2023
          </Button>
        </li>
        <li className="pt-2 pl-3 pr-3 flex pb-2">
          <Button
            tailwind={
              isActive3["2022"] ? `rounded bg-gray-300 pl-5 pr-5` : `pl-5 pr-5`
            }
            onClick={() => handlerButton3("2022")}
            hoverUnd={true}
          >
            2022
          </Button>
        </li>
      </ul>
    </>
  );
};

export default Filters;
