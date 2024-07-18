import React from "react";
import Main from "../mainSection/Main";
import VideoBanners from "../videoBanners/VideoBanners";
import { SwiperSection } from "../SwiperSection/SwiperSection";
import { BannerSignUp } from "../BannerSignUp/BannerSignUp";
import { IconsBanner } from "../IconsBanner/IconsBanner";

export const HomePage = () => {
  return (
    <>
      <Main />
      <VideoBanners />
      <SwiperSection />
      <BannerSignUp />
      <IconsBanner />
    </>
  );
};

// Plan:
// 0) fix home page first post (mtb/road) to full screen image with cover mode cause look better with it. YES
// 1) To Discover info of bikes for Road category, YES
// 1.1) City, YES
// 1.2) Electric, YES
// 1.3) Kid, YES
// 1.4) Accessories YES
// 1.5) Fix design in compare page YES
// 1.6) Fix all descriptions on homepage, all loremipsum :D YES
// 2) Create pages for all of them /\ YES
// 3) About us Page YES
// 4) Sign in, Sign up pages YES
// 5) Cart, buy buttons
// 6) indexes on Icons for added to favorites or compare or buying YEs
// 7) replace all banners in mtb -> urban ..
// 8) alert to added to compare or like or cart
