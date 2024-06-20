import React from "react";
import Main from "../mainSection/Main";
// import { Header } from "../Header/Header";
import VideoBanners from "../videoBanners/VideoBanners";
import { SwiperSection } from "../SwiperSection/SwiperSection";
import { BannerSignUp } from "../BannerSignUp/BannerSignUp";
import { IconsBanner } from "../IconsBanner/IconsBanner";
import { FooterSection } from "../FooterSection/FooterSection";

export const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
      <Main />
      <VideoBanners />
      <SwiperSection />
      <BannerSignUp />
      <IconsBanner />
      {/* <FooterSection /> */}
    </>
  );
};
