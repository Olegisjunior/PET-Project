import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { FooterSection } from "../FooterSection/FooterSection";

export const Layout = ({ favorites, onAddToFavorites }) => {
  console.log(`Layout comp 1${favorites} comp 2 ${onAddToFavorites}`);
  return (
    <>
      <Header favorites={favorites} onRemoveToFavorites={onAddToFavorites} />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default Layout;
