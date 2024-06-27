import React from "react";
// import { Header } from "../Header/Header";

export const NotFoundPage = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="pt-[15%]">
          <h1 className="flex justify-center items-center text-4xl">
            PAGE NOT FOUND
          </h1>
          <h1 className="flex gap-2 justify-center items-center pt-5 text-2xl">
            <div>back to</div>
            <a className="underline" href="/">
              Home
            </a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
