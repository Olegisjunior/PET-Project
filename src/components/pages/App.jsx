// import { Header } from "../Header/Header";
import { NotFoundPage } from "./NotFoundPage";
import { Routes, Route, useSearchParams } from "react-router-dom";
import Mtb from "./Mtb";
import { HomePage } from "./HomePage";
import Layout from "../Layout/Layout";
import { ItemsPage } from "../ItemsPage/ItemsPage";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (product) => {
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
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              favorites={favorites}
              onAddToFavorites={handleAddToFavorites}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="Mountainbikes" element={<Mtb />} />
          <Route
            path="Mountainbikes/:id"
            element={<ItemsPage onAddToFavorites={handleAddToFavorites} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
