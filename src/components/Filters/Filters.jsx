import { useState } from "react";
import Button from "../interface/Buttons/Button";

export const Filters = ({ Category }) => {
  const [isListOpen, setListOpen] = useState(false);
  const [isActive, setIsActive] = useState({});

  const handlerButton = (categ) => {
    Category(categ);
    setIsActive((prevFilters) => {
      return {
        ...prevFilters,
        [categ]: !prevFilters[categ],
      };
    });
  };
  const toggleHandlerList = () => {
    setListOpen(!isListOpen);
  };
  return (
    <>
      <Button onClick={toggleHandlerList} hoverUnd={true}>
        Filters by brand's
      </Button>
      <ul className={isListOpen ? "flex flex-col justify-center " : "hidden "}>
        <li className="pt-2 pl-3 pr-3 flex ">
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
        <li className="pt-2 pl-3 pr-3 flex ">
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
        <li className="pt-2 pl-3 pr-3 flex ">
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
    </>
  );
};

export default Filters;
