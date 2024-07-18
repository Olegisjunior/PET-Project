import React, { useContext } from "react";
import Button from "../interface/Buttons/Button";
import { CompareContext } from "../pages/App";

export const ButtonToCompare = ({ children, product }) => {
  const { compares, toggleCompare } = useContext(CompareContext);

  const AddToCompare = () => {
    toggleCompare(product);
  };
  return <Button onClick={AddToCompare}>{children}</Button>;
};

export default ButtonToCompare;
