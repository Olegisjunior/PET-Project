import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { FooterSection } from "../FooterSection/FooterSection";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Layout;
