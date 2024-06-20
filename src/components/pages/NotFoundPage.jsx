import React from "react";
// import { Header } from "../Header/Header";

export const NotFoundPage = () => {
  return (
    <>
      {/* <Header /> */}
      <h1 className="flex justify-center items-center pt-20 text-4xl">
        PAGE NOT FOUND
      </h1>
      <h1 className="flex justify-center items-center pt-10 text-2xl">
        <a href="/">Home</a>
      </h1>
    </>
  );
};

export default NotFoundPage;
