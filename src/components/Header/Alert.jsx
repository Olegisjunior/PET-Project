import React, { useState } from "react";

const myAlert = {
  position: "absolute",
  padding: "1rem 1rem",
  marginBottom: "1rem",
  border: "1px solid transparent",
  borderRadius: "0.25rem",
};

export const Alert = ({ type, children }) => {
  const [active, setActive] = useState(true);

  const handleClose = () => {
    setActive(false);
  };
  setTimeout(() => {
    setActive(false);
  }, 5000);

  return (
    <div
      onClick={handleClose}
      style={myAlert}
      className={
        type === "error"
          ? `text-[#1e1e1e] bg-[#f8d7da] border-[#f5c2c7]`
          : `text-[#1e1e1e] bg-[#d1e7dd] border-[#badbcc]`
      }
    >
      {children}
    </div>
  );
};

export default Alert;
