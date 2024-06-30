import { NotFoundPage } from "./NotFoundPage";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Mtb from "./Mtb";
import { HomePage } from "./HomePage";
import Layout from "../Layout/Layout";
import { ItemsPage } from "../ItemsPage/ItemsPage";
import { createContext, useState } from "react";
import { ComparePage } from "./ComparePage";

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
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="Mountainbikes" element={<Mtb />} />
                <Route path="Compare" element={<ComparePage />} />
                <Route
                  path="Mountainbikes/:id"
                  element={
                    <ItemsPage
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
