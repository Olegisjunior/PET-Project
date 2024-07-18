import { NotFoundPage } from "./NotFoundPage";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Mtb from "./Mtb";
import { HomePage } from "./HomePage";
import Layout from "../Layout/Layout";
import { ItemsPage } from "../ItemsPage/ItemsPage";
import { ItemsPage2 } from "../ItemsPage/ItemsPage2";
import { createContext, useState } from "react";
import { ComparePage } from "./ComparePage";
import { RoadBikes } from "./RoadBikes";
import ItemsPage3 from "../ItemsPage/ItemsPage3";
import { UbranBikes } from "./UrbanBikes";
import { Ebikes } from "./Ebikes";
import ItemsPage4 from "../ItemsPage/ItemsPage4";
import { Kidsbikes } from "./Kidsbikes";
import ItemsPage5 from "../ItemsPage/ItemsPage5";
import ItemsPage6 from "../ItemsPage/ItemsPage6";
import { Accessories } from "./Accessories";
import { AboutUs } from "./AboutUs";
import ScrollToTop from "./ScrollToTop";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const FavoritesContext = createContext();
export const CompareContext = createContext();
export const ColorContext = createContext();

const initialFavoritesState = {
  favorites: [],
  toggleFavorite: (product) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.id === product.id
      );
      if (isAlreadyFavorite) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  },
};

const MAX_COMPARE_BIKES = 4;

const initialCompareState = {
  compares: [],
  toggleCompare: (product) => {
    setCompare((prevCompare) => {
      const isAlreadyCompare = prevCompare.some((com) => com.id === product.id);
      if (isAlreadyCompare) {
        return prevCompare.filter((com) => com.id !== product.id);
      }
      return [...prevCompare, product];
    });
  },
};

function App() {
  const [favorites, setFavorites] = useState(initialFavoritesState.favorites);
  const [compares, setCompare] = useState(initialCompareState.compares);
  const [bikeColor, setBikeColor] = useState();

  const toggleCompare = (product) => {
    setCompare((prevCompare) => {
      const isAlreadyCompare = prevCompare.some((com) => com.id === product.id);
      if (isAlreadyCompare) {
        return prevCompare.filter((com) => com.id !== product.id);
      }
      if (prevCompare.length >= MAX_COMPARE_BIKES) {
        alert(`You can only compare up to ${MAX_COMPARE_BIKES} bikes.`);
        return prevCompare;
      }
      return [...prevCompare, product];
    });
  };

  const toggleFavorite = (product) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.id === product.id
      );
      if (isAlreadyFavorite) {
        return prevFavorites.filter((fav) => fav.id !== product.id);
      }
      return [...prevFavorites, product];
    });
  };

  const handleColor = (color) => {
    setBikeColor(color);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      <CompareContext.Provider value={{ compares, toggleCompare }}>
        <ColorContext.Provider value={{ bikeColor }}>
          <>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="Mountainbikes" element={<Mtb />} />
                <Route path="Roadbikes" element={<RoadBikes />} />
                <Route path="Urbanbikes" element={<UbranBikes />} />
                <Route path="Ebikes" element={<Ebikes />} />
                <Route path="Kidsbikes" element={<Kidsbikes />} />
                <Route path="Accessories" element={<Accessories />} />
                <Route path="Compare" element={<ComparePage />} />
                <Route path="AboutUs" element={<AboutUs />} />
                <Route path="SignIn" element={<SignIn />} />
                <Route path="SignUp" element={<SignUp />} />
                <Route
                  path="Mountainbikes/:id"
                  element={
                    <ItemsPage
                      onAddToFavorites={toggleFavorite}
                      handleColor={handleColor}
                    />
                  }
                />
                <Route
                  path="Roadbikes/:id"
                  element={
                    <ItemsPage2
                      onAddToFavorites={toggleFavorite}
                      handleColor={handleColor}
                    />
                  }
                />
                <Route
                  path="Urbanbikes/:id"
                  element={
                    <ItemsPage3
                      onAddToFavorites={toggleFavorite}
                      handleColor={handleColor}
                    />
                  }
                />
                <Route
                  path="Ebikes/:id"
                  element={
                    <ItemsPage4
                      onAddToFavorites={toggleFavorite}
                      handleColor={handleColor}
                    />
                  }
                />
                <Route
                  path="Kidsbikes/:id"
                  element={
                    <ItemsPage5
                      onAddToFavorites={toggleFavorite}
                      handleColor={handleColor}
                    />
                  }
                />
                <Route
                  path="Accessories/:id"
                  element={
                    <ItemsPage6
                      onAddToFavorites={toggleFavorite}
                      handleColor={handleColor}
                    />
                  }
                />

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </>
        </ColorContext.Provider>
      </CompareContext.Provider>
    </FavoritesContext.Provider>
  );
}

export default App;
