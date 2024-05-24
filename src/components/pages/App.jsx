import { Header } from "../Header/Header";
import Main from "../mainSection/Main";
import VideoBanners from "../videoBanners/VideoBanners";

import { BannerSignUp } from "../BannerSignUp/BannerSignUp";
import { SwiperSection } from "../SwiperSection/SwiperSection";
import { IconsBanner } from "../IconsBanner/IconsBanner";
import { FooterSection } from "../FooterSection/FooterSection";

function App() {
  return (
    <>
      <Header />
      <Main />
      <VideoBanners />
      <SwiperSection />
      <BannerSignUp />
      <IconsBanner />
      <FooterSection />
    </>
  );
}

export default App;
